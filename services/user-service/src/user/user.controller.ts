import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserCommand } from './command/user-command.enum';
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

  @MessagePattern({ cmd: UserCommand.REGISTER })
  public async register(
    payload: UserRegisterRequestDto,
  ): Promise<UserRegisterResponseDto> {
    return this.userService.register(payload);
  }

  @MessagePattern({ cmd: UserCommand.CHECK_CREDENTIALS })
  public async checkCredentials(
    payload: UserCredentialRequestDto,
  ): Promise<UserCredentialResponseDto> {
    return this.userService.checkCredentials(payload);
  }
}
