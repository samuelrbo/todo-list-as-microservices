import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USER_SERVICE_NAME } from '../user.client';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_SERVICE_NAME)
    private readonly userService: ClientProxy,
  ) {}
}
