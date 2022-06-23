import { IsEmail, IsString } from 'class-validator';

export class AuthRequestDto {
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}
