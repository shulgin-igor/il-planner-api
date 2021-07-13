import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepository: Repository<Payment>,
  ) {}

  getUserPayments(apartmentId: number): Promise<Payment[]> {
    return this.paymentsRepository.find({
      where: {
        apartment: { id: apartmentId },
      },
    });
  }
}
