import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LoginView } from "../auth/LoginView";
import { RegisterView } from "../auth/RegisterView";
import Link from "next/link";

export function DashBoardView() {
  // TODO me quede terminando de estilizar el register y el login
  // comenzar a aplicar las validaciones a dichos formularios con zod
  // añadir un nuevo formulario mucho mas extenso y dedicado a otra cosa

  return (
    <header className="flex w-full z-50 backdrop-blur border-b">
      <div className="flex text-2xl w-full items-center gap-4 px-6 py-3">
        <Link href={"/"}>
          <div className="flex items-center font-bold text-xl cursor-pointer">
            <Avatar>
              <AvatarImage src="/icons/pinspire-icon.png" alt="pinspire" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <p className="text-red-500">Pinspire</p>
          </div>
        </Link>

        <div>
          <Link href={"/explore"}>
            <Button
              className="text-black hover:bg-gray-300 rounded-2xl cursor-pointer"
              variant="ghost"
              size="lg"
            >
              Explorar
            </Button>
          </Link>
        </div>

        <div className="flex flex-1">
          <Input
            type="search"
            placeholder="Encuentra ideas sobre cenas fáciles, moda, etc."
          />
        </div>

        <div className="flex gap-2">
          <Link href={"/info"}>
            <Button className="text-blue-600 cursor-pointer" variant="link" size="lg">
              Info
            </Button>
          </Link>
          <Link href={"/companies"}>
            <Button className="text-blue-600 cursor-pointer" variant="link" size="lg">
              Empresas
            </Button>
          </Link>
          <Link href={"/create"}>
            <Button className="text-blue-600 cursor-pointer" variant="link" size="lg">
              Crear
            </Button>
          </Link>
          <Link href={"/news"}>
            <Button className="text-blue-600 cursor-pointer" variant="link" size="lg">
              Noticias
            </Button>
          </Link>

          <LoginView />

          <RegisterView />
        </div>
      </div>
    </header>
  );
}
