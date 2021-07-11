import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { Esputnik } from '../../lib/esputnik/Esputnik';
import { AuthService } from './auth.service';
import { RequestOtpDto } from '../../dto/request-otp.dto';
import { SignInDto } from '../../dto/sign-in.dto';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly esputnik: Esputnik,
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}
  @Post('otp')
  async otp(@Body() data: RequestOtpDto) {
    try {
      const otp = this.authService.generateOTP();
      await this.authService.saveOTP(data.phone, otp);
      // await this.esputnik.sendSms('test', data.phone);
    } catch (e) {
      console.log(e);
    }
    return {};
  }

  @Post('verify')
  async signIn(@Body() data: SignInDto) {
    const isValid = await this.authService.validateOTP(data.phone, data.otp);
    if (!isValid) {
      throw new BadRequestException();
    }

    await this.authService.removeOtp(data.phone);

    let user = await this.usersService.findByPhone(data.phone);
    let isNewUser = false;

    if (!user) {
      user = await this.usersService.create(data.phone);
      isNewUser = true;
    }

    const token = this.authService.generateToken(user);

    return { token, isNewUser };
  }
}
