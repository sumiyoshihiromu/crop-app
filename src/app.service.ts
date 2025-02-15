import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  // @Cron(CronExpression.EVERY_10_SECONDS)
  async scrapeWebsite() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
    });
    const page = await browser.newPage();

    try {
      await page.goto('https://www.google.co.jp/'); // スクレイピング対象のURL

      const data = await page.evaluate(() => {
        // スクレイピングロジックをここに記述
        const elements = document.querySelectorAll('div.gb_Z:nth-child(1) > a'); // 適切なセレクタを使用
        return Array.from(elements).map((element) => element.textContent);
      });

      console.log('Scraped data:', data);
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
