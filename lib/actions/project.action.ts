"use server";

import Project from "@/database/project.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

interface CreateProjectPramas {
  name: string;
  projectType: string;
  price: number;
  clientName: string;
  startDate: Date;
  endDate: Date;
}

// Create a new project
export async function createProject(params: CreateProjectPramas) {
  try {
    // Validate params object
    if (
      !params.name ||
      !params.projectType ||
      !params.price ||
      !params.clientName ||
      !params.startDate ||
      !params.endDate
    ) {
      throw new Error("Invalid params object");
    }

    // connect to database
    await connectToDatabase();
    const { name, projectType, price, clientName, startDate, endDate } = params;
    const project = await Project.create({
      name,
      projectType,
      price,
      clientName,
      startDate,
      endDate,
    });

    await revalidatePath("/project");
    return project;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get all projects
export async function getAllProjects() {
  try {
    // connect to database
    await connectToDatabase();
    const projects = await Project.find().sort({ createdAt: -1 });

    return { projects };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Delete project

export async function deleteProject(params: string) {
  try {
    await connectToDatabase();
    const deleteProject = await Project.findByIdAndDelete(params);
    revalidatePath("/project");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
