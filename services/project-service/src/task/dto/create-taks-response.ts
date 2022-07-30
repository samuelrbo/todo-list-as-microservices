import { Task } from '../task.entity';

export class CreateTastkResponseDto {
  status: number;
  error?: string;
  task?: Task;
}
