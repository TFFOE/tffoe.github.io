import {Injectable, UseInterceptors} from '@nestjs/common';
import {SpotifyApiService} from "../spotify-api/spotify-api.service";
import {DatabaseService} from "../database/database.service";
import {ArtistEntity} from "../database/entity/artist.entity";

@Injectable()
export class ArtistService {
  constructor(
    private spotifyService: SpotifyApiService,
    private databaseService: DatabaseService
  ) {}

  async getArtist(): Promise<ArtistEntity> {
    const artistFromDatabase = await this.databaseService.getArtist(process.env.ARTIST_ID.toString())
    if (JSON.stringify(artistFromDatabase) !== JSON.stringify({})) {
      return artistFromDatabase
    }

    const artistFromSpotify: Promise<ArtistEntity> = this.spotifyService.getArtist()
      .then(
        createArtistDto => {
          const artistEntity = createArtistDto.toEntity()
          return this.databaseService.createArtist(artistEntity)
        }
      );
    return await artistFromSpotify
  }
}
