import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Complex } from './complex.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComplexesService {
  constructor(
    @InjectRepository(Complex)
    private readonly complexRepository: Repository<Complex>,
  ) {}
  getById(id: number) {
    return this.complexRepository.findOne(id, {
      relations: [
        'specs',
        'specs.spec',
        'gallery',
        'gallery.items',
        'developers',
        'stages',
      ],
    });
  }
}
