import { z } from 'zod'

 
 
 export const RegisterSchema = z.object({

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

    birthDate:
    z
    .date()
    .nullable()
    .refine((date) => date !== null, {
      message: "Debes seleccionar tu fecha de nacimiento",
    })
    .refine((date) => {
      if (!date) return true;
      return date < new Date();
    }, {
      message: "La fecha no puede ser futura",
    }),

  });