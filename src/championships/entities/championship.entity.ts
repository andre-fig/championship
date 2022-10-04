import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Championship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'date' })
  promotionStart: Date;

  @Column({ type: 'date' })
  registrationStart: Date;

  @Column({ type: 'date' })
  registrationEnd: Date;

  @Column({ type: 'varchar', length: 255 })
  status: string;

  @Column()
  unity: number;
}
