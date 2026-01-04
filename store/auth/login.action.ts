"use server";

import { LoginType } from "@/types/loginType";

export async function loginAction(data: LoginType) {
  // validar credenciales
  // crear sesión / token
  // throw error si falla
  console.log("loginData",data);
}
