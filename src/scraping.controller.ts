import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('scraping')
export class ScrapingController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async executeScraping() {
    await this.appService.scrapeWebsite();
    return 'スクレイピングを実行しました';
  }
}
