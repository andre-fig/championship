import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { Championship } from './entities/championship.entity';

@Injectable()
export class ChampionshipsService {
  constructor(
    @InjectRepository(Championship)
    private championshipsRepository: Repository<Championship>,
  ) {}

  async create(createChampionshipDto: CreateChampionshipDto) {
    return await this.championshipsRepository.save(createChampionshipDto);
  }

  async findAll() {
    return await this.championshipsRepository.find();
  }

  async findOne(id: number) {
    return await this.championshipsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateChampionshipDto: UpdateChampionshipDto) {
    return await this.championshipsRepository.update(id, updateChampionshipDto);
  }

  async remove(id: number) {
    return await this.championshipsRepository.delete(id);
  }
}
