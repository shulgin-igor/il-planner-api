import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { HomeService } from './home.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  index(@Req() request) {
    return this.homeService.getComplexes(request.user.id);
  }
}
