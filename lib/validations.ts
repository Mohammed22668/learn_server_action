import * as z from "zod";

export const TodoSchema = z.object({
  title: z.string().min(2, "task should be at least 2 characters"),
  description: z
    .string()
    .min(10, "description should be at least 10 characters"),
});

// Project Schema
export const ProjectSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  projectType: z
    .string()
    .min(5, { message: "projectType must be at least 2 characters." }),
  price: z.coerce.number().min(1, { message: "price must be bigger than 0." }),

  clientName: z.string().min(2, {
    message: "clientName must be at least 2 characters.",
  }),
  startDate: z.date({
    required_error: "A date of birth is required.",
  }),
  endDate: z.date({
    required_error: "A date of birth is required.",
  }),
});
