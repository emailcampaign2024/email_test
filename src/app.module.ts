import { Module } from '@nestjs/common';
import { MailerService } from './mailer/mailer.service';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './scheduler.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [MailerService, SchedulerService],
})
export class AppModule {}
