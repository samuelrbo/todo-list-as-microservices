import { Body, Controller, Get, Inject } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(
    @Inject(ProjectService)
    private readonly projectService: ProjectService,
  ) {}

  @Get()
  async register(@Body() body): Promise<any> {
    return this.projectService.create(body);
  }
}
