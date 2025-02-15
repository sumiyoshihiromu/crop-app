import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScrapingController } from './scraping.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController, ScrapingController],
  providers: [AppService],
})
export class AppModule {}
