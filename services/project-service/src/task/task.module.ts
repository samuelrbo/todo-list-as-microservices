import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { Task } from './task.entity';
import { TaskService } from './task.service';

import { ProjectModule } from './../project/project.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), forwardRef(() => ProjectModule)],
  controllers: [TaskController],
  providers: [TaskService, Task],
  exports: [TaskService, TypeOrmModule],
})
export class TaskModule {}
