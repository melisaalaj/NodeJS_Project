import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TaskRepository } from './repository/task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async getTask(): Promise<Task[]> {
    return await this.taskRepository.getTask();
  }

  async createTask(taskDto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.saveTask(taskDto);
  }

  async updateTask(uuid: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.taskRepository.updateTask(uuid, updateTaskDto);
  }

  async removeTask(taskId: string): Promise<void> {
    return await this.taskRepository.removeTask(taskId);
  }
}
