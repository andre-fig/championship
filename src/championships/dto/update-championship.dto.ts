import { PartialType } from '@nestjs/mapped-types';
import { CreateChampionshipDto } from './create-championship.dto';

export class UpdateChampionshipDto extends PartialType(CreateChampionshipDto) {
  name: string;
  promotionStart: Date;
  registrationStart: Date;
  registrationEnd: Date;
  status: string;
}
