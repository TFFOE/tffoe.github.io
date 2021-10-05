import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArtistEntity} from "./entity/artist.entity";
import {DatabaseService} from './database.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  exports: [
    DatabaseService,
  ],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([ArtistEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      autoLoadEntities: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: process.env.MONGO_HOST,
    //   database: process.env.MONGO_DB,
    //   synchronize: true,
    // })
  ],
  providers: [DatabaseService]
})
export class DatabaseModule {}
