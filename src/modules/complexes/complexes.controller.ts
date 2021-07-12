import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ComplexesService } from './complexes.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('complexes')
export class ComplexesController {
  constructor(private readonly complexesService: ComplexesService) {}

  @Get(':complexId')
  @UseGuards(JwtAuthGuard)
  complex(@Param('complexId') complexId) {
    return this.complexesService.getById(complexId);
  }
}
