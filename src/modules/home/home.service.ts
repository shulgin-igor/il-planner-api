import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from '../apartments/apartment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}
  getComplexes(userId: number): Promise<any> {
    return this.apartmentRepository.find({
      where: { user: { id: userId } },
      relations: ['planning', 'planning.complex', 'payments'],
    });
  }
}
