import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManeger: Cache) {}

  /**
   * 设置
   * @param key string
   * @param value any
   * @param ttl number
   * @returns string
   */
  async set(key: string, value: any, ttl: number) {
    return await this.cacheManeger.set(key, value, { ttl });
  }

  /**
   * 获取
   * @param key string
   * @returns any
   */
  async get(key) {
    return await this.cacheManeger.get(key);
  }

  /**
   * 删除
   * @param key string
   * @returns string
   */
  async del(key) {
    return await this.cacheManeger.del(key);
  }

  /**
   * 清空
   * @returns string
   */
  async reset() {
    return await this.cacheManeger.reset();
  }
}
