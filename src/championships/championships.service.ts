import { Injectable } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';

@Injectable()
export class ChampionshipsService {
  create(createChampionshipDto: CreateChampionshipDto) {
    return 'This action adds a new championship';
  }

  findAll() {
    return `This action returns all championships`;
  }

  findOne(id: number) {
    return `This action returns a #${id} championship`;
  }

  update(id: number, updateChampionshipDto: UpdateChampionshipDto) {
    return `This action updates a #${id} championship`;
  }

  remove(id: number) {
    return `This action removes a #${id} championship`;
  }
}
