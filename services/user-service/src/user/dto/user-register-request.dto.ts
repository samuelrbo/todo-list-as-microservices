import { IsEmail, IsString } from 'class-validator';

export class UserRegisterRequestDto {
  @IsString()
  public readonly name: string;

  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}
