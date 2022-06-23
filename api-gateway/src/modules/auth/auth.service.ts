import { AuthCommand } from '@modules/commands/auth-command.enum';
import { AUTH_SERVICE_NAME } from '@modules/shared/constants/auth-service.constants';
import { Inject, Injectable, HttpException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { MsAuthLoginResponseDto } from './dto/ms-auth-response.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(AUTH_SERVICE_NAME)
    private readonly msAuth: ClientProxy,
  ) {}

  public async login(data) {
    const startTs = Date.now();
    return this.msAuth.send({ cmd: AuthCommand.LOGIN }, data).pipe(
      map((authResponse: MsAuthLoginResponseDto) => {
        if (authResponse.error) {
          throw new HttpException(authResponse.error, authResponse.status);
        }

        return { message: authResponse, duration: Date.now() - startTs };
      }),
    );
  }
}
