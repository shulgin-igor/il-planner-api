import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { InstallmentPlan } from './installment_plan.entity';
import { Price } from './price.entity';
import { Apartment } from '../apartments/apartment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment, InstallmentPlan, Price, Apartment]),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
