import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Task } from './../task/task.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  uid!: number;

  @CreateDateColumn({
    type: 'datetime',
    default: () => 'NOW(6)',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'NOW()',
    onUpdate: 'NOW()',
  })
  updatedAt!: Date;

  @OneToMany(() => Task, (task) => task.project)
  tasks!: Task[];
}
