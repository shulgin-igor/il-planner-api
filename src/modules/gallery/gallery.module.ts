import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gallery } from './gallery.entity';
import { GalleryItem } from './gallery_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery, GalleryItem])],
})
export class GalleryModule {}
