/* eslint-disable prettier/prettier */
import { HttpException, UnprocessableEntityException } from '@nestjs/common';
import { BaseCustomRepository } from 'src/common/db/customBaseRepository/BaseCustomRepository';
import { CustomRepository } from 'src/common/db/decorators/CustomRepository.decorator';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from '../entities/task.entity';
import { ITaskRepository } from '../interfaces/task.interface';

@CustomRepository(Task)
export class TaskRepository
  extends BaseCustomRepository<Task>
  implements ITaskRepository
{
  async getTask(): Promise<Task[]> {
    return await this.find();
  }

  async saveTask(task: CreateTaskDto): Promise<Task> {
    const newTask = this.create(task);
    await this.save(newTask);
    return newTask;
  }

  async getTaskById(taskId: string): Promise<Task> {
    const task = await this.findOneBy({ uuid: taskId });
    if (!task) {
      throw new UnprocessableEntityException('This task does not exist!');
    }
    return task;
  }

  async updateTask(id: string, data: UpdateTaskDto): Promise<Task> {
    const task = this.getTaskById(id);

    if (!task) {
      throw new HttpException('Task does not exist', 404);
    }
    await this.update({ uuid: id }, data);
    const updated = this.getTaskById(id);

    return updated;
  }

  async removeTask(taskId: string): Promise<void> {
    const task = await this.findOneBy({ uuid: taskId });
    await this.delete(task.id);
  }
}
