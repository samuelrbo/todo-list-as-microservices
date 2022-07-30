import { Global, Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AuthClient } from '@clients/auth.client';
import { UserClient } from '@clients/user.client';
import { ProjectClient } from '@clients/project.client';

const clients = ClientsModule.register([AuthClient, UserClient, ProjectClient]);

@Global()
@Module({
  imports: [clients],
  exports: [clients],
})
export class SharedModule {}
