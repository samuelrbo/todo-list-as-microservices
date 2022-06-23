import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const USER_SERVICE_NAME = 'USER_SERVICE';

export const UserClient: ClientProviderOptions = {
  name: USER_SERVICE_NAME,
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 50002,
  },
};
