/* eslint-disable prettier/prettier */
import { IBaseCustomRepository } from 'src/common/db/customBaseRepository/interfaces/BaseCustomRepository.interface';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from '../entities/task.entity';

export interface ITaskRepository extends IBaseCustomRepository<Task> {
  getTask(): Promise<Task[]>;
  saveTask(task: CreateTaskDto): Promise<Task>;
  getTaskById(taskId: string): Promise<Task>;
  updateTask(id: string, data: UpdateTaskDto): Promise<Task>;
  removeTask(TaskId: string): Promise<void>;
}
