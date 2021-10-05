import {Injectable, UseInterceptors} from '@nestjs/common';
import {SpotifyApiService} from "../spotify-api/spotify-api.service";
import {DatabaseService} from "../database/database.service";
import {ArtistEntity} from "../database/entity/artist.entity";
import * as constants from "constants";
import {LoggingInterceptor} from "../logging.interceptor";

@Injectable()
export class ArtistService {
  constructor(
    private spotifyService: SpotifyApiService,
    private databaseService: DatabaseService
  ) {}

  @UseInterceptors(LoggingInterceptor)
  async getArtist(): Promise<ArtistEntity> {
    const artistFromDatabase = this.databaseService.getArtist()
    if (JSON.stringify(artistFromDatabase) !== JSON.stringify({})) {
      // console.log(artistFromDatabase)
      return artistFromDatabase
    }

    let artistFromSpotify: Promise<ArtistEntity> = this.spotifyService.getArtist()
      .then(
        createArtistDto => {
          const artistEntity = createArtistDto.toEntity()
          return this.databaseService.createArtist(artistEntity)
        }
      );
    return await artistFromSpotify
  }
}
