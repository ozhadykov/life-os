import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MY_APP_NAME } from '@life-os/models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
