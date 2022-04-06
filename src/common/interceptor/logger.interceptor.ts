import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { map, Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('before');
    const res = context.switchToHttp().getResponse<Response>();
    console.log(res.statusCode);
    return next.handle().pipe(
      map((data) => {
        return {
          payload: data,
          code: 200,
          timestamp: new Date().toISOString(),
        };
      }),
    );
  }
}
