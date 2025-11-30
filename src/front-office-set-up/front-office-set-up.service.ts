import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFrontOfficePurposeDto } from './dto/create-front-office-purpose.dto';
import { CreateFrontOfficeComplainTypeDto } from './dto/create-front-office-complain-type.dto';
import { CreateFrontOfficeSourceDto } from './dto/create-front-office-source.dto';
import { CreateFrontOfficeReferenceDto } from './dto/create-front-office-reference.dto';
import { UpdateFrontOfficePurposeDto } from './dto/update-front-office-purpose.dto';
import { UpdateFrontOfficeComplainTypeDto } from './dto/update-front-office-complain-type.dto';
import { UpdateFrontOfficeSourceDto } from './dto/update-front-office-source.dto';
import { UpdateFrontOfficeReferenceDto } from './dto/update-front-office-reference.dto';
import { FrontOfficePurpose } from './entities/front-office-purpose.entity';
import { FrontOfficeComplainType } from './entities/front-office-complain-type.entity';
import { FrontOfficeSource } from './entities/front-office-source.entity';
import { FrontOfficeReference } from './entities/front-office-reference.entity';

@Injectable()
export class FrontOfficeSetUpService {
  constructor(
    @InjectRepository(FrontOfficePurpose)
    private purposeRepository: Repository<FrontOfficePurpose>,
    @InjectRepository(FrontOfficeComplainType)
    private complainRepository: Repository<FrontOfficeComplainType>,
    @InjectRepository(FrontOfficeSource)
    private sourceRepository: Repository<FrontOfficeSource>,
    @InjectRepository(FrontOfficeReference)
    private referenceRepository: Repository<FrontOfficeReference>,
  ) {}

  // PURPOSE CRUD
  async createPurpose(createDto: CreateFrontOfficePurposeDto): Promise<FrontOfficePurpose> {
    const purpose = this.purposeRepository.create(createDto);
    return await this.purposeRepository.save(purpose);
  }

  async findAllPurpose(): Promise<FrontOfficePurpose[]> {
    return await this.purposeRepository.find();
  }

  async findOnePurpose(id: number): Promise<FrontOfficePurpose> {
    const purpose = await this.purposeRepository.findOne({ where: { id } });
    if (!purpose) {
      throw new NotFoundException(`Purpose with ID ${id} not found`);
    }
    return purpose;
  }

  async updatePurpose(id: number, updateDto: UpdateFrontOfficePurposeDto): Promise<FrontOfficePurpose> {
    const purpose = await this.findOnePurpose(id);
    Object.assign(purpose, updateDto);
    return await this.purposeRepository.save(purpose);
  }

  async removePurpose(id: number): Promise<void> {
    const purpose = await this.findOnePurpose(id);
    await this.purposeRepository.remove(purpose);
  }

  // COMPLAINT CRUD
  async createComplaint(createDto: CreateFrontOfficeComplainTypeDto): Promise<FrontOfficeComplainType> {
    const complaint = this.complainRepository.create(createDto);
    return await this.complainRepository.save(complaint);
  }

  async findAllComplaint(): Promise<FrontOfficeComplainType[]> {
    return await this.complainRepository.find();
  }

  async findOneComplaint(id: number): Promise<FrontOfficeComplainType> {
    const complaint = await this.complainRepository.findOne({ where: { id } });
    if (!complaint) {
      throw new NotFoundException(`Complaint with ID ${id} not found`);
    }
    return complaint;
  }

  async updateComplaint(id: number, updateDto: UpdateFrontOfficeComplainTypeDto): Promise<FrontOfficeComplainType> {
    const complaint = await this.findOneComplaint(id);
    Object.assign(complaint, updateDto);
    return await this.complainRepository.save(complaint);
  }

  async removeComplaint(id: number): Promise<void> {
    const complaint = await this.findOneComplaint(id);
    await this.complainRepository.remove(complaint);
  }

  // SOURCE CRUD
  async createSource(createDto: CreateFrontOfficeSourceDto): Promise<FrontOfficeSource> {
    const source = this.sourceRepository.create(createDto);
    return await this.sourceRepository.save(source);
  }

  async findAllSource(): Promise<FrontOfficeSource[]> {
    return await this.sourceRepository.find();
  }

  async findOneSource(id: number): Promise<FrontOfficeSource> {
    const source = await this.sourceRepository.findOne({ where: { id } });
    if (!source) {
      throw new NotFoundException(`Source with ID ${id} not found`);
    }
    return source;
  }

  async updateSource(id: number, updateDto: UpdateFrontOfficeSourceDto): Promise<FrontOfficeSource> {
    const source = await this.findOneSource(id);
    Object.assign(source, updateDto);
    return await this.sourceRepository.save(source);
  }

  async removeSource(id: number): Promise<void> {
    const source = await this.findOneSource(id);
    await this.sourceRepository.remove(source);
  }

  // REFERENCE CRUD
  async createReference(createDto: CreateFrontOfficeReferenceDto): Promise<FrontOfficeReference> {
    const reference = this.referenceRepository.create(createDto);
    return await this.referenceRepository.save(reference);
  }

  async findAllReference(): Promise<FrontOfficeReference[]> {
    return await this.referenceRepository.find();
  }

  async findOneReference(id: number): Promise<FrontOfficeReference> {
    const reference = await this.referenceRepository.findOne({ where: { id } });
    if (!reference) {
      throw new NotFoundException(`Reference with ID ${id} not found`);
    }
    return reference;
  }

  async updateReference(id: number, updateDto: UpdateFrontOfficeReferenceDto): Promise<FrontOfficeReference> {
    const reference = await this.findOneReference(id);
    Object.assign(reference, updateDto);
    return await this.referenceRepository.save(reference);
  }

  async removeReference(id: number): Promise<void> {
    const reference = await this.findOneReference(id);
    await this.referenceRepository.remove(reference);
  }
}
