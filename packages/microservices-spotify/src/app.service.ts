import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import axios from "axios";


@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  getHello(): string {
    return process.env.REFRESH_TOKEN
  }

  async index(): Promise<string> {
    return getAccessToken().then((token) => {
      const url = 'https://api.spotify.com/v1/me'
      const headers = {
        Authorization: `Bearer ${token}`
      }
      return axios({
        method: 'get',
        url: url,
        headers: headers
      })
      .then(
        (response) => {
          return response.data
        },
        (error) => {
          console.log(error)
        })
    })
  }
}

async function getAccessToken() {
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
