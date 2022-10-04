import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ChampionshipsModule } from './championships/championships.module';
import { Championship } from './championships/entities/championship.entity';
import { UnitsModule } from './units/units.module';
import { FieldsModule } from './fields/fields.module';
import { Unity } from './units/entities/unity.entity';
import { Field } from './fields/entities/field.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mydbinstance.cgqbygta7vsq.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'password',
      database: 'championship',
      entities: [User, Championship, Unity, Field],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ChampionshipsModule,
    UnitsModule,
    FieldsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
