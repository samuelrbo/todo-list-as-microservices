import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() body): Promise<any> {
    return this.userService.register(body);
  }
}
