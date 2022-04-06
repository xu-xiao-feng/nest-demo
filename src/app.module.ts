import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TestModule } from './modules/test/test.module';
import { ServiceModule } from './services/service.module';
@Module({
  imports: [TestModule, ServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  // 中间件配置
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // 排除
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'dogs', method: RequestMethod.GET },
      )
      // 配置路由及其方法
      .forRoutes({ path: '*', method: RequestMethod.ALL });

    // 路由支持通配符, 全部则使用 *
    // .forRoutes({ path: 'c*ts', method: RequestMethod.GET });
  }
}
