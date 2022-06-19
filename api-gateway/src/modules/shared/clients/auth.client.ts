import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import {
  AUTH_SERVICE_HOST,
  AUTH_SERVICE_NAME,
  AUTH_SERVICE_PORT,
} from '@constants/auth-service.constants';

export const AuthClient: ClientProviderOptions = {
  name: AUTH_SERVICE_NAME,
  transport: Transport.TCP,
  options: {
    host: AUTH_SERVICE_HOST,
    port: AUTH_SERVICE_PORT,
  },
};
