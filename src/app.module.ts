import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CampaignModule } from './email_campaign1/campaign.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
    MongooseModule.forRoot(process.env.DB_URI),
    CampaignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
