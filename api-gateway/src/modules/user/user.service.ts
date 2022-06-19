import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { USER_SERVICE_NAME } from '@constants/user-service.constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_SERVICE_NAME)
    private readonly msUser: ClientProxy,
  ) {}

  public async register(data) {
    const startTs = Date.now();
    return this.msUser
      .send({ cmd: 'register' }, data)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs })),
      );
  }
}
