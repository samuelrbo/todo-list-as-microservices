import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { CreateTastkRequestDto } from '../task/dto/create-taks-request.dto';
import { CreateProjectRequestDto } from './dto/create-project-request.dto';
import { TaskService } from './../task/task.service';
import { FilterProjectDto } from './dto/filter-project.dto';
import { Project } from './project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @Inject(TaskService)
    private readonly taskService: TaskService,
  ) {}

  public async find(filter: FilterProjectDto): Promise<Project[]> {
    const { uid, title } = filter;
    let where = { uid };

    if (title) {
      where = Object.assign(where, { title: ILike(`%${title}%`) });
    }

    return await this.projectRepository.find({ where });
  }

  public async findByUserAndId(uid: number, id: number): Promise<Project> {
    return await this.projectRepository.findOne({ where: { id } });
  }

  public async findByUid(uid: number): Promise<Project[]> {
    return await this.projectRepository.find({ where: { uid } });
  }

  public async create(
    createProject: CreateProjectRequestDto,
  ): Promise<Project> {
    return await this.projectRepository.save(createProject);
  }

  public async remove(id: number): Promise<boolean> {
    const action: DeleteResult = await this.projectRepository.delete(id);
    return action.affected > 0;
  }

  public async addTask(createTaskDto: CreateTastkRequestDto): Promise<Project> {
    const project = await this.findByUserAndId(
      createTaskDto.uid,
      createTaskDto.projectId,
    );

    if (!project) {
      throw new Error('Project not exists for user');
    }

    const task = await this.taskService.create(createTaskDto);

    project.tasks.push(task);

    return await this.projectRepository.save(project);
  }
}
