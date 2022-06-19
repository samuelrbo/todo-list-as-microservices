import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
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
}
