import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './news.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
  ) {}

  getComplexNews(complexId: number): Promise<News[]> {
    return this.newsRepository.find({
      where: { complex: { id: complexId } },
      select: ['id', 'title'],
    });
  }

  getPost(postId: number): Promise<News> {
    return this.newsRepository.findOne(postId);
  }
}
