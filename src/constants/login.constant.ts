import { z } from "zod";

export const LOGIN_FORM_SCHEMA = z.object({
  email: z
    .string()
    .email({ message: "Please provide a valid email address" })
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
