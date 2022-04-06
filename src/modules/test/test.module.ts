import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { RedisModule } from 'src/services/redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
