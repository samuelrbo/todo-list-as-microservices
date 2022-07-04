import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCredentialRequestDto } from './dto/user-credential-request.dto';
import { UserCredentialResponseDto } from './dto/user-credential-response.dto';
import { UserRegisterRequestDto } from './dto/user-register-request.dto';
import { UserRegisterResponseDto } from './dto/user-register-response.dto';
import { EncryptHelper } from './helpers/encrypt.helper';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async register({
    name,
    email,
    password,
  }: UserRegisterRequestDto): Promise<UserRegisterResponseDto> {
    let user: User = await this.findByEmail(email);

    if (user) {
      return { status: HttpStatus.CONFLICT, error: 'User already exists!' };
    }

    user = new User();
    user.name = name;
    user.email = email;
    user.password = EncryptHelper.encrypt(password);

    await this.userRepository.save(user);

    return { status: HttpStatus.CREATED };
  }

  public async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }

  public async checkCredentials({
    email,
    password,
  }: UserCredentialRequestDto): Promise<UserCredentialResponseDto> {
    const user: User = await this.findByEmail(email);

    if (!user || !EncryptHelper.isValid(password, user.password)) {
      return { status: HttpStatus.UNAUTHORIZED, error: 'Unauthorized' };
    }

    user.password = null;

    return { status: HttpStatus.OK, user };
  }
}
