import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum StatusEnum {
    OPEN = "open",
    PENDING = "pending",
    COMPLETE = "complete"
}

@Schema({
    timestamps: true
})

export class Task {
    @Prop()
    name: string

    @Prop()
    status: StatusEnum
}

export const TaskSchema = SchemaFactory.createForClass(Task)