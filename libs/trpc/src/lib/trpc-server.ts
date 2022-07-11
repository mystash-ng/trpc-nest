/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as trpc from '@trpc/server';
import { z } from 'zod';

export const trpcRouter = trpc
  .router()
  .query('server', {
    async resolve(req) {
      return { name: 'myStash x Brighter really?' };
    },
  })
  .mutation('createCompany', {
    input: z.object({ name: z.string().min(3) }),
    async resolve(req) {
      console.log('Here you go >>>', req.input);
    },
  });

export type TrpcAppRouter = typeof trpcRouter;
