import { z } from "zod";

export const ADD_BIKE_FORM_SCHEMA = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  brand: z.string().min(2, "Brand is required"),
  model: z.string().min(2, "Model is required"),
  cc: z.coerce.number().min(50, "Engine size must be at least 50cc"),
  year: z.coerce
    .number()
    .min(2000, "Year must be after 2000")
    .max(new Date().getFullYear()),
  pricePerHour: z.coerce.number().min(1, "Price must be at least $1"),
  image: z.string().url("Please enter a valid URL"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});
