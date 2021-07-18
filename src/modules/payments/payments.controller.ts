import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get(':apartmentId')
  @UseGuards(JwtAuthGuard)
  async index(@Param('apartmentId') apartmentId: number) {
    const payments = await this.paymentsService.getUserPayments(apartmentId);
    const installmentPlan = await this.paymentsService.getInstallmentPlan(
      apartmentId,
    );

    return { payments, installmentPlan };
  }
}
