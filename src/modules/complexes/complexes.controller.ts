import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ComplexesService } from './complexes.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { UserComplexGuard } from './user-complex.guard';

@Controller('complexes')
export class ComplexesController {
  constructor(private readonly complexesService: ComplexesService) {}

  @Get(':id')
  @UseGuards(JwtAuthGuard, UserComplexGuard)
  complex(@Param('id', ParseIntPipe) complexId: number) {
    return this.complexesService.getById(complexId);
  }
}
