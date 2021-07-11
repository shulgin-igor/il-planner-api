import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Esputnik } from '../../lib/esputnik/Esputnik';
import { Otp } from './otp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Otp]),
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SALT,
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    {
      provide: Esputnik,
      useFactory: () => new Esputnik(process.env.ESPUTNIK_API_KEY),
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
