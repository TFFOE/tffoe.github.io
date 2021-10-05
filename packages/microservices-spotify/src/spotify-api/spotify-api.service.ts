import {Injectable} from '@nestjs/common';
import axios, {Method} from "axios";
import {CreateArtistDto} from "./dto/createArtist.dto";

@Injectable()
export class SpotifyApiService {

  async getArtist(): Promise<CreateArtistDto> {
    const url = 'artists/' + process.env.ARTIST_ID.toString()
    return this.request(url)
      .then(response => new CreateArtistDto(response))
  }

  private async request(relative_url: string, params: Record<string, string> = {}, method: Method = 'get'): Promise<Object> {
    const url = `https://api.spotify.com/v1/${relative_url}`
    return this.getAccessToken().then((token) => {
      const headers = {
        Authorization: `Bearer ${token}`
      }
      return axios({
        method: method,
        url: url,
        headers: headers,
        params: new URLSearchParams(params)
      })
        .then(
          response => {
            return response.data
          },
          error => {
            console.log(error)
          })
    })
  }

  private async getAccessToken(): Promise<Object> {
    const url = 'https://accounts.spotify.com/api/token'
    const headers = {
      Authorization: process.env.AUTH_ENCODED
    }
    const data = {
      grant_type: 'refresh_token',
      refresh_token: process.env.REFRESH_TOKEN
    }
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data: new URLSearchParams(data),
    })
      .then((response) => {
          return response.data['access_token']
        },
        (error) => {
          console.log(error.data)
        })
  }
}
