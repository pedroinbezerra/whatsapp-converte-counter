import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class DomainValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const whitelist = process.env.WHITELIST?.split(',') || [];
    const apiKey = process.env.APIKEY;

    const receivedKey = req.header('ApiKey');
    const origin = req.header('Origin');

    if (receivedKey === apiKey && (whitelist.includes(origin) || !origin)) {
      res.header('Access-Control-Allow-Origin', origin || '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
      );
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS',
      );
      next();
    } else {
      Logger.warn('Forbidden access to: ', origin);
      res.status(403).json({ message: 'Forbidden' });
    }
  }
}
