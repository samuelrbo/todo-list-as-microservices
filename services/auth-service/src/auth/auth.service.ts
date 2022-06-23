import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { USER_SERVICE_NAME } from '../user.client';
import { AuthRequestDto } from './dto/AuthRequestDto';
import { AuthResponseDto } from './dto/AuthResponseDto';
import { UserCommand } from './command/user-command.enum';
import { ClientResponseDto } from './dto/ClientResponseDto';
import { firstValueFrom } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_SERVICE_NAME)
    private readonly userService: ClientProxy,
    @Inject(JwtService)
    private readonly jwtService: JwtService,
    @Inject(ConfigService)
    private readonly configService: ConfigService,
  ) {}

  public async login(authRequest: AuthRequestDto): Promise<AuthResponseDto> {
    const { status, user, error }: ClientResponseDto = await firstValueFrom(
      this.userService
        .send({ cmd: UserCommand.CHECK_CREDENTIALS }, authRequest)
        .pipe<ClientResponseDto>(map((response) => response)),
    );

    if (!user) {
      return { status, error };
    }

    const payload = {
      username: user.email,
      sub: user.id,
    };

    const token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('jwt.secret'),
    });

    return { status: HttpStatus.OK, token };
  }
}
