import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ApartmentsService } from './apartments.service';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get('list')
  @UseGuards(JwtAuthGuard)
  list(@Req() request) {
    return this.apartmentsService.getUserApartments(request.user.id);
  }
}
