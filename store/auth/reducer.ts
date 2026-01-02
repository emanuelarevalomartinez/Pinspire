import { AuthAction } from "./actions";
import { AuthState, initialAuthState } from "./state";

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  
  switch (action.type) {
    case "LOGIN_START":
      return { status: "loading" };

    case "LOGIN_SUCCESS":
      return { status: "authenticated" };

    case "LOGIN_ERROR":
      return { status: "error", error: action.payload };

    case "LOGOUT":
      return initialAuthState;

    default:
      return state;
  }
}
