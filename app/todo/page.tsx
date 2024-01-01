import CreateToDo from "@/components/CreateToDo";
import GetTodo from "@/components/GetTodo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { getTodo } from "@/lib/actions/todo.action";
const Todo = async () => {
  const ListTodo = await getTodo();

  return (
    <div className="flex min-h-screen flex-col items-center  p-10 border border-slate-900">
      <Button className="p-3 mb-5">
        <Link href="/">Back to Home</Link>
      </Button>
      <CreateToDo />

      <br />

      <GetTodo ListTodo={ListTodo.todo} />
    </div>
  );
};

export default Todo;
