import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginAuthService } from './login-auth.service';
import { LoginAuthController } from './login-auth.controller';
import { LoginAuth } from './entities/login-auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoginAuth])],
  controllers: [LoginAuthController],
  providers: [LoginAuthService],
})
export class LoginAuthModule {}
