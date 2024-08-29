import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    Logger.log('GET request received', 'AppService');
    return 'Hello World!';
  }
}
