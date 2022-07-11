import { createReactQueryHooks } from '@trpc/react';
import { TrpcAppRouter } from '@mystash/trpc';

export const trpc = createReactQueryHooks<TrpcAppRouter>();
