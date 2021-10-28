import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";

import { GraphQLModule } from "@nestjs/graphql";
import { DatabaseModule } from './database/database.module';
import { SpotifyApiModule } from './spotify-api/spotify-api.module';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [
    SpotifyApiModule,
    DatabaseModule,
    ArtistModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
