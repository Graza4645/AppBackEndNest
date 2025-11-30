import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrontOfficeSetUpService } from './front-office-set-up.service';
import { FrontOfficeSetUpController } from './front-office-set-up.controller';
import { FrontOfficePurpose } from './entities/front-office-purpose.entity';
import { FrontOfficeComplainType } from './entities/front-office-complain-type.entity';
import { FrontOfficeSource } from './entities/front-office-source.entity';
import { FrontOfficeReference } from './entities/front-office-reference.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    FrontOfficePurpose,
    FrontOfficeComplainType,
    FrontOfficeSource,
    FrontOfficeReference
  ])],
  controllers: [FrontOfficeSetUpController],
  providers: [FrontOfficeSetUpService],
})
export class FrontOfficeSetUpModule {}
