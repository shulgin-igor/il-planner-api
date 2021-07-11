import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
// import { ApartmentsModule } from '../apartments/apartments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from '../apartments/apartment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment])],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
