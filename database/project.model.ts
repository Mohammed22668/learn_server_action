import { randomUUID } from "crypto";
import { Schema, models, model, Document } from "mongoose";

export interface IProject extends Document {
  projectId: string;
  name: string;
  projectType: string;
  price: number;
  clientName: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}

const ProjectSchema = new Schema({
  projectId: { type: String, required: true, default: randomUUID },
  name: { type: String, required: true },
  projectType: { type: String, required: true },
  price: { type: Number, required: true },
  clientName: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
