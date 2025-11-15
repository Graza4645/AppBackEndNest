import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();
const isProduction = process.env.NODE_ENV === 'production';

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

if (isProduction) {
  createNestServer(server)
    .then(() => {
      console.log('🚀 Nest Ready for Production');
      console.log('🟢 Using SUPABASE DATABASE in production');
    })
    .catch(err => console.error('Nest broken', err));
} else {
  // Local development
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
    }));
    
    app.setGlobalPrefix('api/v1');
    app.enableCors();
    
    console.log('=== DATABASE CONNECTION INFO ===');
    if (process.env.USE_SUPABASE === 'true') {
      console.log('🟢 Connected to SUPABASE DATABASE');
      console.log('URL:', process.env.SUPABASE_URL);
      console.log('Database URL:', process.env.SUPABASE_DATABASE_URL?.substring(0, 50) + '...');
    } else {
      console.log('🔵 Connected to LOCAL POSTGRESQL');
      console.log('Host:', process.env.DB_HOST);
      console.log('Database:', process.env.DB_NAME);
    }
    console.log('================================');
    
    await app.listen(3000);
    console.log('Application running on: http://localhost:3000/api/v1');
  }
  
  bootstrap();
}

export default server;
