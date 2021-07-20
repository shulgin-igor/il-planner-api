import { IsNotEmpty, Matches } from 'class-validator';

export class RequestOtpDto {
  @IsNotEmpty()
  @Matches(/^\d{9}$/)
  phone: string;
}
