import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './project.controller';
import { Project } from './project.entity';
import { ProjectService } from './project.service';
import { TaskService } from './../task/task.service';

import { TaskModule } from './../task/task.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), forwardRef(() => TaskModule)],
  controllers: [ProjectController],
  providers: [ProjectService, TaskService],
})
export class ProjectModule {}
