import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUnityDto } from './dto/create-unity.dto';
import { UpdateUnityDto } from './dto/update-unity.dto';
import { Unity } from './entities/unity.entity';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Unity)
    private unitsRepository: Repository<Unity>,
  ) {}

  async create(createUnityDto: CreateUnityDto): Promise<Unity> {
    return await this.unitsRepository.save(createUnityDto);
  }

  async findAll(): Promise<Unity[]> {
    return await this.unitsRepository.find();
  }

  async findOne(id: number): Promise<Unity> {
    return await this.unitsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUnityDto: UpdateUnityDto): Promise<Unity> {
    await this.unitsRepository.update(id, updateUnityDto);
    return await this.unitsRepository.findOne({ where: { id: id } });
  }

  async remove(id: number) {
    return await this.unitsRepository.delete(id);
  }
}
