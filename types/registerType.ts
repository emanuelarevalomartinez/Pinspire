import { RegisterSchema } from "@/schemas/registerSchema";
import { z } from "zod";

export type RegisterType = z.infer<typeof RegisterSchema>;
