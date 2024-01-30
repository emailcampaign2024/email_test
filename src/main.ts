// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   // const schedulerService = app.get(SchedulerService);
//   const schedulerService = app.get('SchedulerService');
//   schedulerService.scheduleEmail();
//   await app.listen(3000);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SchedulerService } from './scheduler.service';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const schedulerService = appContext.get(SchedulerService);

  schedulerService.scheduleEmail(); // Schedule the email task

  await appContext.close(); // Close the application context

  console.log('Application started and task scheduled.');
}
bootstrap();