import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserCredentialRequestDto } from './dto/user-credential-request.dto';
import { UserCredentialResponseDto } from './dto/user-credential-response.dto';
import { UserRegisterRequestDto } from './dto/user-register-request.dto';
import { UserRegisterResponseDto } from './dto/user-register-response.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @MessagePattern({ cmd: 'register' })
  public async register(
    payload: UserRegisterRequestDto,
  ): Promise<UserRegisterResponseDto> {
    return this.userService.register(payload);
  }

  @MessagePattern({ cmd: 'check_credentials' })
  public async checkCredentials(
    payload: UserCredentialRequestDto,
  ): Promise<UserCredentialResponseDto> {
    return this.userService.checkCredentials(payload);
  }
}
