import { User } from '../user.entity';

export class UserCredentialResponseDto {
  status: number;
  error?: string;
  user?: User;
}
