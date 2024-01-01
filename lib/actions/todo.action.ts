"use server";
import Todo from "@/database/todo.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

interface CreateTodoParams {
  title: string;
  description: string;
}

export async function createTodo(params: CreateTodoParams) {
  try {
    // connect to database
    connectToDatabase();

    const { title, description } = params;
    const todo = await Todo.create({ title, description });

    revalidatePath("/todo");
  } catch (error) {
    console.log(error);
  }
}

export async function getTodo() {
  try {
    // connect to database
    connectToDatabase();
    const todo = await Todo.find().sort({ createdAt: -1 });

    return { todo };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Function for deleting Todo
interface DeleteTodoParams {
  _id: string;
}
export async function deleteTodo(params: any) {
  try {
    await connectToDatabase();
    const del = await Todo.findByIdAndDelete(params);
    revalidatePath("/todo");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
