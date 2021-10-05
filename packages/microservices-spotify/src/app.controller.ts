import {Controller, Get, Param, Render, Req, Request} from '@nestjs/common';
import {AppService} from './app.service';
import {Observable, throwIfEmpty} from "rxjs";
import {AxiosResponse} from "axios";
import {SpotifyApiService} from "./spotify-api/spotify-api.service";
import {DatabaseService} from "./database/database.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly db: DatabaseService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
