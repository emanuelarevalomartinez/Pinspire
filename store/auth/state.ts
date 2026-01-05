export type AuthState = {
  status: "idle" | "loading" | "authenticated" | "error";
  view?: "login" | "register" | "none";
  error?: string;
};

export const initialAuthState: AuthState = {
  view: "none",
  status: "idle",
};
