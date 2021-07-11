import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}
  @Get(':apartmentId')
  @UseGuards(JwtAuthGuard)
  index(@Req() request, @Param('apartmentId') apartmentId: number) {
    return this.paymentsService.getUserPayments(request.user.id, apartmentId);
  }
}
