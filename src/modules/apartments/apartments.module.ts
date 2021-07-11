import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './apartment.entity';
import { Planning } from './planning.entity';
import { PlanningImage } from './planning_image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment, Planning, PlanningImage])],
})
export class ApartmentsModule {}
