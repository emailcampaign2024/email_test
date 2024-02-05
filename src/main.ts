import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SchedulerService } from './/email_campaign1/scheduler.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstarp');
  const app = await NestFactory.create(AppModule);
  // const schedulerService = app.get(SchedulerService);

  // schedulerService.scheduleEmail();
  const port = 3003;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
  // await app.listen(3003);
}
bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { SchedulerService } from './scheduler.service';

// async function bootstrap() {
//   const appContext = await NestFactory.createApplicationContext(AppModule);
//   const schedulerService = appContext.get(SchedulerService);

//   schedulerService.scheduleEmail(); // Schedule the email task

//   await appContext.close(); // Close the application context

//   console.log('Application started and task scheduled.');
// }
// bootstrap();