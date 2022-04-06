import { HttpException, HttpStatus } from '@nestjs/common';

export class TimeoutException extends HttpException {
  constructor() {
    super('Request Timeout', HttpStatus.REQUEST_TIMEOUT);
  }
}
