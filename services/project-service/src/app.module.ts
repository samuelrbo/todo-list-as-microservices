import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/user.sqlite',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    ProjectModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
