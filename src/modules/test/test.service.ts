import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Cache } from 'cache-manager';
import { RedisService } from 'src/services/redis/redis.service';

@Injectable()
export class TestService {
  constructor(private readonly redisService: RedisService) {}
  async create(createTestDto: CreateTestDto) {
    return await this.redisService.set('key', 'abc', 3000);
  }

  async findAll() {
    // const data = await this.redisService.get('test');
    // console.log(data);
    return 'data';
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
