export type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: { status: string; view: string } }
  | { type: "LOGIN_ERROR"; payload: string }
  | { type: "REGISTER_START" }
  | { type: "REGISTER_SUCCESS"; payload: { status: string; view: string } }
  | { type: "REGISTER_ERROR"; payload: string }
  | { type: "LOGOUT" };
