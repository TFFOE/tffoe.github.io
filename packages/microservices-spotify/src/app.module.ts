import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";

import {GraphQLModule} from "@nestjs/graphql";
import {DatabaseModule} from './database/database.module';
import {SpotifyApiModule} from './spotify-api/spotify-api.module';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [
    SpotifyApiModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.graphql'],
    //   playground: true
    // }),
    ArtistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
