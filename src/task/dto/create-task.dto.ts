import { StatusEnum } from "../Schema/task.scheme";

export class CreateTaskDto {
 readonly name: string;
  readonly status: StatusEnum
}