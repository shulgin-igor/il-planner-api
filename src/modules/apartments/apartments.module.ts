import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './apartment.entity';
import { Planning } from './planning.entity';
import { PlanningImage } from './planning_image.entity';
import { ApartmentsService } from './apartments.service';
import { ApartmentsController } from './apartments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment, Planning, PlanningImage])],
  providers: [ApartmentsService],
  controllers: [ApartmentsController],
})
export class ApartmentsModule {}
