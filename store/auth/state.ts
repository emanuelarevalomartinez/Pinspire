export type AuthState = {
  status: "idle" | "loading" | "authenticated" | "error";
  error?: string;
};

export const initialAuthState: AuthState = {
  status: "idle",
};
