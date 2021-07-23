import { Module } from '@nestjs/common';
import { ComplexesController } from './complexes.controller';
import { ComplexesService } from './complexes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complex } from './complex.entity';
import { Apartment } from '../apartments/apartment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Complex, Apartment])],
  controllers: [ComplexesController],
  providers: [ComplexesService],
})
export class ComplexesModule {}
