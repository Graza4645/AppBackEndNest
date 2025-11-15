import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: false,
    transform: true,
  }));
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  
  return app.init();
};

createNestServer(server)
  .then(() => {
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log('Nest Ready');
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Nest broken', err));

export default server;
