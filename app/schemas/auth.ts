import z from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be atleast 3 characters")
    .max(30, "Name is too long"),

  email: z
    .email("Please enter valid email address"),

  password: z
    .string()
    .min(8, "Password must be atleast 8 characters")
    .max(30, "Password too long")
    .regex(/[A-Z]/, "Password must contain a uppercase letter")
    .regex(/[0-9]/, "Password must contain a number")
}) ;