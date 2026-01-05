import { AuthAction } from "./actions";
import { AuthState, initialAuthState } from "./state";

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN_START":
      return { status: "loading", view: "login" };

    case "LOGIN_SUCCESS":
      return { status: "authenticated", view: "login" };

    case "LOGIN_ERROR":
      return { status: "error", error: action.payload };

    case "REGISTER_START":
      return { status: "loading", view: "register" };

    case "REGISTER_SUCCESS":
      return { status: "authenticated", view: "register" };

    case "REGISTER_ERROR":
      return { status: "error", error: action.payload };

    case "LOGOUT":
      return initialAuthState;

    default:
      return state;
  }
}
