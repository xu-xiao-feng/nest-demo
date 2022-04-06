import { CacheModule, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import * as ioredis from 'cache-manager-ioredis';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    // CacheModule.register({
    //   store: ioredis,
    //   host: 'localhost',
    //   port: 6379,
    //   password: 123456,
    //   db: 0,
    // }),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      auth_pass: 123456,
      db: 0,
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
