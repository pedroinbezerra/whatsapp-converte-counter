import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import ChangelogDto from './dto/changelog.dto';

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

  @Post('changelog')
  changelog(@Body() data: ChangelogDto) {
    this.appService.newChangelog(data);
  }

  @Get('changelog/latest')
  async getLastestChangelog(): Promise<ChangelogDto> {
    return await this.appService.getLastestChangelog();
  }
}
