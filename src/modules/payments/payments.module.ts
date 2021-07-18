import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { InstallmentPlan } from './installment_plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, InstallmentPlan])],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
