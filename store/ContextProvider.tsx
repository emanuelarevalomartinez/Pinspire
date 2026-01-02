"use client";

import { createContext, useReducer, useContext } from "react";
import { authReducer } from "./auth/reducer";
import { AuthState, initialAuthState } from "./auth/state";
import { LoginType } from "@/types/loginType";
import { loginAction } from "./auth/login.action";
import { AuthAction } from "./auth/actions";

interface AuthContextType {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
    login: (data: LoginType) => Promise<void>;
}


const AppContext = createContext<AuthContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(authReducer, initialAuthState);


  async function login(data: LoginType): Promise<void> {
    
    dispatch({ type: "LOGIN_START" });
  
    try {
      await loginAction(data);
      dispatch({ type: "LOGIN_SUCCESS", payload: true });
    } catch {
      dispatch({
        type: "LOGIN_ERROR",
        payload: "Credenciales inválidas",
      });
    }
  }
  

  return (
    <AppContext.Provider 
        value={{ 
          state, 
          dispatch, 
          login 
        }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
    const context = useContext(AppContext);
  
    if (!context) {
      throw new Error("useApp must be used within an AppProvider");
    }
  
    return context;
  }