import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LoginView } from "../auth/LoginView";
import { RegisterView } from "../auth/RegisterView";
import Link from "next/link";
import { Search } from "@/shared/inputs/Search";

export function DashBoardView() {
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
          <Search />
        </div>

        <div className="flex gap-2">
          <Link href={"/info"}>
            <Button
              className="text-blue-600 cursor-pointer"
              variant="link"
              size="lg"
            >
              Info
            </Button>
          </Link>
          <Link href={"/companies"}>
            <Button
              className="text-blue-600 cursor-pointer"
              variant="link"
              size="lg"
            >
              Empresas
            </Button>
          </Link>
          <Link href={"/create"}>
            <Button
              className="text-blue-600 cursor-pointer"
              variant="link"
              size="lg"
            >
              Crear
            </Button>
          </Link>
          <Link href={"/news"}>
            <Button
              className="text-blue-600 cursor-pointer"
              variant="link"
              size="lg"
            >
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
