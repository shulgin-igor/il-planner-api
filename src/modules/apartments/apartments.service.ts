import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from './apartment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}
  getUserApartments(userId: number) {
    return this.apartmentRepository.find({
      where: { user: { id: userId } },
      relations: ['planning', 'planning.complex', 'payments', 'stage'],
    });
  }
}
