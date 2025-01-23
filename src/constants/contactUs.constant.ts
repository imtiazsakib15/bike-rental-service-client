import { z } from "zod";

export const CONTACT_US_FORM_SCHEMA = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address" })
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(500, { message: "Message must be less than 500 characters" }),
});
