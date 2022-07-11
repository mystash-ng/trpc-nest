/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import * as trpcExpress from '@trpc/server/adapters/express';
import * as trpc from '@trpc/server';
import { trpcRouter } from '@mystash/trpc';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  app.use(cors());

  // trpc middleware setup
  const createContext = ({
    req,
    res,
  }: trpcExpress.CreateExpressContextOptions) => ({});

  type Context = trpc.inferAsyncReturnType<typeof createContext>;

  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
      createContext,
    })
  );

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
