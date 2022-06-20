import { IsEmail, IsString } from 'class-validator';

export class UserCredentialRequestDto {
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}
