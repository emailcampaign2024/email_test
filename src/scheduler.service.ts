// scheduler.service.ts
import { Injectable } from '@nestjs/common';
import { MailerService } from './mailer/mailer.service';
import * as schedule from 'node-schedule';

@Injectable()
export class SchedulerService {
  constructor(private readonly mailerService: MailerService) {}

  scheduleEmail() {
    const scheduledDate = new Date(); // Set the desired date and time
    scheduledDate.setSeconds(scheduledDate.getSeconds() + 10); // Example: 10 seconds from now

    schedule.scheduleJob(scheduledDate, async () => {
      // Task to be executed at the scheduled time
      try {
        await this.mailerService.sendMail('arundaviddev@gmail.com', 'Scheduled Email', 'Hello, this is a scheduled email!');
        console.log('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    });
  }
}
