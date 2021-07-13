import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './modules/database/database.module';
import { ComplexesModule } from './modules/complexes/complexes.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { DevelopersModule } from './modules/developers/developers.module';
import { ApartmentsModule } from './modules/apartments/apartments.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    DatabaseModule,
    ComplexesModule,
    GalleryModule,
    DevelopersModule,
    ApartmentsModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
