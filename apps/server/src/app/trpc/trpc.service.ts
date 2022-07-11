import { Injectable } from '@nestjs/common';
import * as trpc from '@trpc/server';
import { z } from 'zod';

@Injectable()
export class TrpcService {
  static trpcRouter = trpc
    .router()
    .query('getServer', {
      input: z.string(),
      async resolve(req) {
        req.input;
        return { id: req.input, name: 'myStash' };
      },
    })
    .mutation('createCompany', {
      input: z.object({ name: z.string().min(3) }),
      async resolve(req) {
        console.log('Here you go >>>', req.input);
      },
    });
}

export type TrpcAppRouter = typeof TrpcService.trpcRouter;
