import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './news.entity';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  list(@Query('complexId') complexId: number): Promise<News[]> {
    return this.newsService.getComplexNews(complexId);
  }

  @Get(':postId')
  @UseGuards(JwtAuthGuard)
  post(@Param('postId') postId: number): Promise<News> {
    return this.newsService.getPost(postId);
  }
}
