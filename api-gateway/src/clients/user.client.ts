import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import {
  USER_SERVICE_HOST,
  USER_SERVICE_NAME,
  USER_SERVICE_PORT,
} from './../constants/services';

export const UserClient: ClientProviderOptions = {
  name: USER_SERVICE_NAME,
  transport: Transport.TCP,
  options: {
    host: USER_SERVICE_HOST,
    port: USER_SERVICE_PORT,
  },
};
