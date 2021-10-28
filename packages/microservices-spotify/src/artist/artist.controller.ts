import {Controller, Get} from '@nestjs/common';
import {ArtistService} from "./artist.service";
import {ArtistEntity} from "../database/entity/artist.entity";

@Controller('artist')
export class ArtistController {
  constructor(
    private artistService: ArtistService
  ) {}

  @Get()
  async getArtist(): Promise<ArtistEntity> {
    return this.artistService.getArtist()
  }
}
