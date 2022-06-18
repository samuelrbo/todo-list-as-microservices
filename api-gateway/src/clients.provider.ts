import { ClientsModuleOptions } from '@nestjs/microservices';
import { UserClient } from './clients/user.client';

export const ServicesProviders: ClientsModuleOptions = [UserClient];
