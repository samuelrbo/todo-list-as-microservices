import { IUser } from '../interface/user.interface';

export class ClientResponseDto {
  status?: number;
  error?: string;
  user?: IUser;
}
