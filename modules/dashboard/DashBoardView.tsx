'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LoginView } from "../auth/LoginView";
import { RegisterView } from "../auth/RegisterView";

export function DashBoardView() {
  return (
    <header className="flex w-full z-50 backdrop-blur border-b">
      <div className="flex text-2xl w-full items-center gap-4 px-6 py-3">
        <div className="flex items-center font-bold text-xl">
          <Avatar>
            <AvatarImage src="/icons/pinspire-icon.png" alt="pinspire" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          <p className="text-red-500">Pinspire</p>
        </div>

        <div>
          <Button
            className="text-black hover:bg-gray-300 rounded-2xl"
            variant="ghost"
            size="lg"
          >
            Explorar
          </Button>
        </div>

        <div className="flex flex-1">
          <Input
            type="search"
            placeholder="Encuentra ideas sobre cenas fáciles, moda, etc."
          />
        </div>

        <div className="flex gap-2">
          <Button className="text-blue-600" variant="link" size="lg">
            Info
          </Button>
          <Button className="text-blue-600" variant="link" size="lg">
            Empresas
          </Button>
          <Button className="text-blue-600" variant="link" size="lg">
            Crear
          </Button>
          <Button className="text-blue-600" variant="link" size="lg">
            Noticias
          </Button>

          <LoginView/>
          
          <RegisterView/>

        </div>
      </div>

      
    </header>
  );
}
