import { z } from "zod";

export const SIGN_UP_FORM_SCHEMA = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address" })
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  phone: z
    .string()
    .regex(/^\+?\d{10,15}$/, {
      message: "Phone number must be a valid number between 10 to 15 digits",
    })
    .trim(),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" })
    .trim(),
});
