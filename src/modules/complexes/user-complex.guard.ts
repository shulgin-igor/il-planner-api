import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from '../apartments/apartment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserComplexGuard implements CanActivate {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { params, user } = context.switchToHttp().getRequest();
    const apartments = await this.apartmentRepository.find({
      where: { user: { id: user.id } },
      relations: ['planning'],
    });

    return (
      apartments.find(
        ({ planning }) => planning.complexId === Number(params.id),
      ) !== undefined
    );
  }
}
