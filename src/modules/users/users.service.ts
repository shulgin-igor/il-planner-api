import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findByPhone(phoneNumber: string): Promise<User> {
    return this.userRepository.findOne({ phoneNumber });
  }

  async create(phoneNumber: string) {
    const user = this.userRepository.create({ phoneNumber });
    return this.userRepository.save(user);
  }
}
