import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import { Field } from './entities/field.entity';

@Injectable()
export class FieldsService {
  constructor(
    @InjectRepository(Field)
    private fieldsRepository: Repository<Field>,
  ) {}

  async create(createFieldDto: CreateFieldDto) {
    return await this.fieldsRepository.save(createFieldDto);
  }

  async findAll() {
    return await this.fieldsRepository.find();
  }

  async findOne(id: number) {
    return await this.fieldsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateFieldDto: UpdateFieldDto) {
    return await this.fieldsRepository.update(id, updateFieldDto);
  }

  async remove(id: number) {
    return await this.fieldsRepository.delete(id);
  }
}
