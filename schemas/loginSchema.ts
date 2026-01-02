import { z } from "zod";

  export const LoginSchema = z.object({

    email: 
     z
    .string()
    .trim()
    .toLowerCase()
    .min(5, "Correo demasiado corto")
    .max(254, "Correo demasiado largo")
    .email("Correo inválido"),

    password: 
     z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .max(128, "Demasiado larga")
    .regex(/[A-Z]/, "Debe tener una mayúscula")
    .regex(/[a-z]/, "Debe tener una minúscula")
    .regex(/[0-9]/, "Debe tener un número")
    .regex(/[^A-Za-z0-9]/, "Debe tener un símbolo"),

  });