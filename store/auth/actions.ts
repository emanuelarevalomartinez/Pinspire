export type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: boolean }
  | { type: "LOGIN_ERROR"; payload: string }
  | { type: "LOGOUT" };
