import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { UserApartmentGuard } from '../apartments/user-apartment.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get(':id')
  @UseGuards(JwtAuthGuard, UserApartmentGuard)
  async index(@Param('id', ParseIntPipe) apartmentId: number) {
    const payments = await this.paymentsService.getUserPayments(apartmentId);
    const installmentPlan = await this.paymentsService.getInstallmentPlan(
      apartmentId,
    );
    const price =
      (await this.paymentsService.getActualPrice(apartmentId)) || null;

    return { payments, installmentPlan, price };
  }
}
