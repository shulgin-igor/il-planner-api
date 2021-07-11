import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Otp } from './otp.entity';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { sign } from 'jsonwebtoken';
import { classToPlain } from 'class-transformer';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Otp) private readonly otpRepository: Repository<Otp>,
  ) {}
  async validateOTP(phone: string, otp: string) {
    return (await this.otpRepository.findOne({ phone, otp })) !== undefined;
  }
  async saveOTP(phone: string, otp: string) {
    let record = await this.otpRepository.findOne({ phone });
    if (!record) {
      record = this.otpRepository.create({ phone });
    }
    record.otp = otp;
    return this.otpRepository.save(record);
  }

  generateOTP() {
    return (Math.random() * 9999).toFixed().padStart(4, '0');
  }

  removeOtp(phone: string) {
    return this.otpRepository.delete({ phone });
  }

  generateToken(user: User): string {
    return sign(classToPlain(user), process.env.JWT_SALT, {
      expiresIn: '60 days',
    });
  }
}
