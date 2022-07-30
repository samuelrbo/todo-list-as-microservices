import { ProjectCommand } from '@modules/commands/project-command.enum';
import { PROJECT_SERVICE_NAME } from '@modules/shared/constants/project-service.constants';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { MsProjectCreateResponseDto } from './dto/ms-project-create-response.dto';

@Injectable()
export class ProjectService {
  constructor(
    @Inject(PROJECT_SERVICE_NAME)
    private readonly msAuth: ClientProxy,
  ) {}

  public async create(data) {
    const startTs = Date.now();
    return this.msAuth.send({ cmd: ProjectCommand.USER_PROJECTS }, data).pipe(
      map((authResponse: MsProjectCreateResponseDto) => {
        if (authResponse.error) {
          throw new HttpException(authResponse.error, authResponse.status);
        }

        return { message: authResponse, duration: Date.now() - startTs };
      }),
    );
  }
}
