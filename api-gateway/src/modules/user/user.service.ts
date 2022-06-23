import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { USER_SERVICE_NAME } from '@constants/user-service.constants';
import { UserCommand } from '@modules/commands/user-command.enum';
import { MsUserRegisterResponseDto } from './dto/ms-user-response.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_SERVICE_NAME)
    private readonly msUser: ClientProxy,
  ) {}

  public async register(data) {
    const startTs = Date.now();
    return this.msUser.send({ cmd: UserCommand.REGISTER }, data).pipe(
      map((msUserResponse: MsUserRegisterResponseDto) => {
        if (msUserResponse.error) {
          throw new HttpException(msUserResponse.error, msUserResponse.status);
        }

        return { message: msUserResponse, duration: Date.now() - startTs };
      }),
    );
  }
}
