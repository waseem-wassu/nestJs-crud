import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task-dto';
import { Task } from './Schema/task.scheme';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Post()
    async createTask(@Body() task: Task): Promise<Task> {
        try {
            return this.taskService.create(task)
        } catch (error) {
            console.log(error, "ooo");

        }
    }

    @Get()
    async getAllTasks(): Promise<Task[]> {
        return this.taskService.findAll()
    }

    @Get(":id")
    async getTask(@Param('id') id: string): Promise<Task> {
        return this.taskService.findById(id);
    }

    @Put(":id")
    async updateById(@Param('id') id:string, @Body() task:Task ):Promise<Task>{
        return this.taskService.updateById(id,task)
     }

    @Delete(":id")
    deleteTaskFunc(@Param('id') id: string) {
        return this.taskService.deleteById(id)
    }
}