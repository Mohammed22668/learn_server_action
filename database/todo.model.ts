import { Schema, models, model, Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  createdAt: Date;
}

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;
