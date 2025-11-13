import { Module } from '@nestjs/common';
import { PostalReceiveService } from './postal-receive.service';
import { PostalReceiveController } from './postal-receive.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostalReceive } from './entities/postal-receive.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PostalReceive])],
  controllers: [PostalReceiveController],
  providers: [PostalReceiveService],
})
export class PostalReceiveModule {}
