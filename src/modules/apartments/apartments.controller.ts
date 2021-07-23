import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ApartmentsService } from './apartments.service';
import { UserApartmentGuard } from './user-apartment.guard';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get('')
  @UseGuards(JwtAuthGuard)
  list(@Req() request) {
    return this.apartmentsService.getUserApartments(request.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, UserApartmentGuard)
  view(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentsService.getApartment(id);
  }
}
