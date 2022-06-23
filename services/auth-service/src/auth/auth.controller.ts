import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { AuthCommand } from './command/auth-command.enum';
import { AuthRequestDto } from './dto/AuthRequestDto';
import { AuthResponseDto } from './dto/AuthResponseDto';

@Controller()
export class AuthController {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  @MessagePattern({ cmd: AuthCommand.LOGIN })
  public async login(payload: AuthRequestDto): Promise<AuthResponseDto> {
    return this.authService.login(payload);
  }
}
