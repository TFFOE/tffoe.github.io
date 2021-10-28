import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import {SpotifyApiModule} from "../spotify-api/spotify-api.module";
import {DatabaseModule} from "../database/database.module";

@Module({
  controllers: [ArtistController],
  providers: [ArtistService],
  imports: [SpotifyApiModule, DatabaseModule]
})
export class ArtistModule {}
