import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  health(): string {
    return this.appService.health();
  }

  @Get('click/add')
  addClick() {
    this.appService.addClick();
  }

  @Get('clicks')
  async getTotal() {
    return await this.appService.getTotal();
  }
}
