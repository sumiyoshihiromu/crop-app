import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('scraping')
export class ScrapingController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async executeScraping() {
    const scrapingData = await this.appService.scrapeWebsite();

    if (scrapingData) {
      return 'スクレイピング結果:' + scrapingData;
    } else {
      return 'スクレイピング失敗';
    }
  }
}
