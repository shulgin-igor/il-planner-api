import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'planner',
      entities: ['dist/**/*.entity{ .ts,.js}'],
      synchronize: true,
      logging: process.env.DB_LOG ? ['query'] : false,
    }),
  ],
})
export class DatabaseModule {}
