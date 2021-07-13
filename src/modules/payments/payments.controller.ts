import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}
  @Get(':apartmentId')
  @UseGuards(JwtAuthGuard)
  index(@Param('apartmentId') apartmentId: number) {
    return this.paymentsService.getUserPayments(apartmentId);
  }
}
