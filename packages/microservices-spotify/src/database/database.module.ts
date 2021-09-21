import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: process.env.MONGO_HOST,
    //   database: process.env.MONGO_DB,
    //   synchronize: true,
    // })
  ]
})
export class DatabaseModule {}
