import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArtistEntity} from "./entity/artist.entity";
import {Repository} from "typeorm";

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(ArtistEntity)
    private artistRepository: Repository<ArtistEntity>
  ) {}

  async getArtist(id: string): Promise<ArtistEntity> {
    return await this.artistRepository.findOne(id)
  }

  async createArtist(artistEntity: ArtistEntity): Promise<ArtistEntity> {
    return this.artistRepository.save(artistEntity)
  }
}
