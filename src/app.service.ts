import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  // @Cron(CronExpression.EVERY_10_SECONDS)
  async scrapeWebsite() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--lang=ja'],
    });
    const page = await browser.newPage();

    try {
      await page.setDefaultNavigationTimeout(0);
      await page.goto('https://race.netkeiba.com/top/?rf=navi'); // スクレイピング対象のURL

      const data = await page.evaluate(() => {
        // スクレイピングロジックをここに記述
        const elements = document.querySelectorAll('p.Sprint'); // 適切なセレクタを使用
        return Array.from(elements).map((element) => element.textContent);
      });

      console.log('取得したデータ:', data);
      return data;
    } catch (error) {
      console.error('Scraping failed:', error);
    } finally {
      await browser.close();
    }
  }
  getHello(): string {
    return 'Hello World!!!';
  }
}
