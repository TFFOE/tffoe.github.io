import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArtistEntity} from "./entity/artist.entity";
import {Repository} from "typeorm";
import {Artist} from "../../dist/database/artist.entity";

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(ArtistEntity)
    private artistRepository: Repository<ArtistEntity>
  ) {}

  async getArtist(): Promise<ArtistEntity> {
    return await this.artistRepository.findOne(9)
  }

  async createArtist(artistEntity: ArtistEntity): Promise<ArtistEntity> {
    return this.artistRepository.save(artistEntity)
  }
}
