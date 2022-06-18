import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USER_SERVICE_NAME } from './constants/services';

@Injectable()
export class AppService {
  constructor(
    @Inject(USER_SERVICE_NAME)
    private readonly userService: ClientProxy,
  ) {}
}
