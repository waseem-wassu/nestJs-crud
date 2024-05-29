import { Get, Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './Schema/task.scheme';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Task", schema: TaskSchema }])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}

