import {Controller, Get, Param, Render, Req, Request} from '@nestjs/common';
import { AppService } from './app.service';
import {Observable, throwIfEmpty} from "rxjs";
import {AxiosResponse} from "axios";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  async index(): Promise<string> {
    return await this.appService.index()
  }
}
