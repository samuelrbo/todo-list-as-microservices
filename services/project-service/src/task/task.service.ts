import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTastkRequestDto } from './dto/create-taks-request.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  public async create(createTask: CreateTastkRequestDto): Promise<Task> {
    return await this.taskRepository.save(createTask);
  }
}
