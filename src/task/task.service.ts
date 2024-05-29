import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task-dto';
import { Task } from './Schema/task.scheme';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel('Task') private readonly taskModel: Model<Task>,
    ) { }

    async create(task: CreateTaskDto): Promise<Task> {
        const res = await this.taskModel.create(task);
        return res
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find()
    }

    async findById(id: string): Promise<Task> {
        const task = await this.taskModel.findById(id)
        if (!task) {
            throw new NotFoundException("Task not found")
        }
        return task
    }

    async updateById(id: string, task: UpdateTaskDto): Promise<Task> {
        return await this.taskModel.findByIdAndUpdate(id, task)
    }

    async deleteById(id: string): Promise<Task> {
        return await this.taskModel.findByIdAndDelete(id)
    }
}