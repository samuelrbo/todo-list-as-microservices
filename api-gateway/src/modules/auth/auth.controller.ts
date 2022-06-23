import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() body): Promise<any> {
    return this.authService.login(body);
  }
}
