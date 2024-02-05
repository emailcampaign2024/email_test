// // scheduler.service.ts
// import { Injectable } from '@nestjs/common';
// import { MailerService } from './mailer/mailer.service';
// import * as schedule from 'node-schedule';

// @Injectable()
// export class SchedulerService {
//   constructor(private readonly mailerService: MailerService) {}

//   scheduleEmail() {
//     const scheduledDate = new Date(); // Set the desired date and time
//     scheduledDate.setSeconds(scheduledDate.getSeconds() + 10); // Example: 10 seconds from now

//     schedule.scheduleJob(scheduledDate, async () => {
//       // Task to be executed at the scheduled time
//       try {
//         await this.mailerService.sendMail('arundaviddev@gmail.com', 'Scheduled Email', 'Hello, this is a scheduled email!');
//         console.log('Email sent successfully!');
//       } catch (error) {
//         console.error('Error sending email:', error);
//       }
//     });
//   }
// }

// scheduler.service.ts
import { Injectable } from '@nestjs/common';
import { MailerService } from './email_campaign1/mailer.service';
import * as schedule from 'node-schedule';

@Injectable()
export class SchedulerService {
  constructor(private readonly mailerService: MailerService) {}

  scheduleEmail() {
    // Set the desired date and time for today at 3:35 PM
    const scheduledDate = new Date();
    scheduledDate.setHours(22, 48, 0, 0); // 3:35 PM

    schedule.scheduleJob(scheduledDate, async () => {
      // Task to be executed at the scheduled time
      try {
        await this.mailerService.sendMail('rajakumarandevloper@gmail.com', 'Scheduled Email', 'Hello, this is a scheduled email! new');
        console.log('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    });
  }
}


// import { Injectable } from '@nestjs/common';
// import { MailerService } from './mailer/mailer.service';
// import * as schedule from 'node-schedule';

// @Injectable()
// export class SchedulerService {
//   constructor(private readonly mailerService: MailerService) {}

//   scheduleDailyEmail() {
//     // Create a rule to schedule the task daily at 5:30 PM
//     const rule = new schedule.RecurrenceRule();
//     rule.hour = 17; // 5 PM in 24-hour format
//     rule.minute = 30;

//     // Schedule the task to be executed daily at 5:30 PM
//     schedule.scheduleJob(rule, async () => {
//       // Task to be executed at the scheduled time
//       try {
//         await this.mailerService.sendMail('arundaviddev@gmail.com', 'Scheduled Email', 'Hello, this is a scheduled email! new');
//         console.log('Email sent successfully!');
//       } catch (error) {
//         console.error('Error sending email:', error);
//       }
//     });
//   }
// }

