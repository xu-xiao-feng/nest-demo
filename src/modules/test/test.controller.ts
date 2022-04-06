import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  ForbiddenException,
  RequestTimeoutException,
  UseInterceptors,
  CacheKey,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { HttpExceptionFilter } from 'src/common/exception/http-exception.filter';
import { LoggerInterceptor } from 'src/common/interceptor/logger.interceptor';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get()
  // 绑定方法, 绑定 controller, 或者绑定全局
  // @UseFilters(HttpExceptionFilter)
  @UseInterceptors(LoggerInterceptor)
  @CacheKey('test_key')
  findAll() {
    // throw new RequestTimeoutException();
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
