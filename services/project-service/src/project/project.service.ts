import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTastkDto } from './../task/dto/create-taks.dto';
import { Task } from './../task/task.entity';
import { TaskService } from './../task/task.service';
import { Project } from './project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @Inject(TaskService)
    private readonly taskService: TaskService,
  ) {}

  public async findById(id: number): Promise<Project> {
    return await this.projectRepository.findOne({ where: { id } });
  }

  public async remove(id: number): Promise<boolean> {
    const action: DeleteResult = await this.projectRepository.delete(id);
    return action.affected > 0;
  }

  public async addTask(createTaskDto: CreateTastkDto): Promise<Project> {
    const task: Task = await this.taskService.create(createTaskDto);

    const project: Project = await this.findById(createTaskDto.projectId);
    project.tasks.push(task);

    return await this.projectRepository.save(project);
  }
}
