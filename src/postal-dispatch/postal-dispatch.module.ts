// import { Module } from '@nestjs/common';
// import { PostalDispatchService } from './postal-dispatch.service';
// import { PostalDispatchController } from './postal-dispatch.controller';

// @Module({
//   controllers: [PostalDispatchController],
//   providers: [PostalDispatchService],
// })
// export class PostalDispatchModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostalDispatchService } from './postal-dispatch.service';
import { PostalDispatchController } from './postal-dispatch.controller';
import { PostalDispatch } from './entities/postal-dispatch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostalDispatch])],
  controllers: [PostalDispatchController],
  providers: [PostalDispatchService],
})
export class PostalDispatchModule {}
