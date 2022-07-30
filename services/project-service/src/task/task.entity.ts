import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Project } from './../project/project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ default: false })
  done!: boolean;

  @CreateDateColumn({
    type: 'datetime',
    default: () => 'NOW()',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'NOW()',
    onUpdate: 'NOW()',
  })
  updatedAt!: Date;

  @ManyToOne(() => Project, (project) => project.tasks)
  project!: Project;
}
