import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: false,
    transform: true,
  }));
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  
  const port = process.env.PORT || 8000;
  await app.listen(port);
  console.log('Nest Ready');
  console.log(`🚀 Server running on port ${port}`);
}

bootstrap().catch(err => console.error('Nest broken', err));
