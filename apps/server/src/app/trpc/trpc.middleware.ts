import { Request, Response, NextFunction } from 'express';

export function trpc(req: Request, res: Response, next: NextFunction) {
  console.log('Trpc request', req);

  next();
}
