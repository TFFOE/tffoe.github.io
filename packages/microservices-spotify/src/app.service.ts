import {Injectable} from '@nestjs/common';
import {DatabaseService} from "./database/database.service";
import {SpotifyApiService} from "./spotify-api/spotify-api.service";


@Injectable()
export class AppService {
  constructor(
    private databaseService: DatabaseService,
    private spotifyService: SpotifyApiService
  ) {}
  getHello(): string {
    return process.env.REFRESH_TOKEN
  }

  addArtist(): string {
    return ''
  }
}
