"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { deleteTodo } from "@/lib/actions/todo.action";

const GetTodo = async ({ ListTodo }: any) => {
  async function handleDeleteTodo(_id: any) {
    await deleteTodo(_id);

    // notifications for deleted task
    toast.success("Task deleted successfully..", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent Todo</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>

            <TableHead className="text-right">Amount</TableHead>

            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ListTodo.map((todo: any) => (
            <TableRow key={todo._id}>
              <TableCell className="font-medium">{todo.title}</TableCell>

              <TableCell className="text-right">{todo.description}</TableCell>

              <TableCell className="text-right">
                <Button onClick={() => handleDeleteTodo(todo._id)}>Del</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer />
    </div>
  );
};

export default GetTodo;
