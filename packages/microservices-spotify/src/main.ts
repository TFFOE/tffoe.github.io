import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";

const logger = new Logger('Microservice')

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({logger: true})
  );
  await app.listen(process.env.PORT)
  // const app = await NestFactory.createMicroservice(
  //   AppModule,
  //   {
  //     transport: Transport.TCP
  //   })
  // await app.listen();
}

bootstrap();
