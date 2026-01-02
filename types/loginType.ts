import { LoginSchema } from "@/schemas/loginSchema";
import { z } from "zod";

 export type LoginType = z.infer<typeof LoginSchema>;