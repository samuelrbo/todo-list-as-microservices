import { Global, Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AuthClient } from '@clients/auth.client';
import { UserClient } from '@clients/user.client';

const clients = ClientsModule.register([AuthClient, UserClient]);

@Global()
@Module({
  imports: [clients],
  exports: [clients],
})
export class SharedModule {}
