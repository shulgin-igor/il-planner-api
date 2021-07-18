import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { Repository } from 'typeorm';
import { InstallmentPlan } from './installment_plan.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepository: Repository<Payment>,
    @InjectRepository(InstallmentPlan)
    private readonly installmentPlanRepository: Repository<InstallmentPlan>,
  ) {}

  getUserPayments(apartmentId: number): Promise<Payment[]> {
    return this.paymentsRepository.find({
      where: {
        apartment: { id: apartmentId },
      },
    });
  }

  getInstallmentPlan(apartmentId: number): Promise<InstallmentPlan> {
    return this.installmentPlanRepository.findOne({
      apartment: { id: apartmentId },
    });
  }
}
