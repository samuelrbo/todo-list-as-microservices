import {
  PROJECT_SERVICE_HOST,
  PROJECT_SERVICE_NAME,
  PROJECT_SERVICE_PORT,
} from '@constants/project-service.constants';
import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const ProjectClient: ClientProviderOptions = {
  name: PROJECT_SERVICE_NAME,
  transport: Transport.TCP,
  options: {
    host: PROJECT_SERVICE_HOST,
    port: PROJECT_SERVICE_PORT,
  },
};
