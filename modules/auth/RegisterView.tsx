"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";

export function RegisterView() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              className="text-black rounded-xl"
              variant="outline"
              size="lg"
            >
              Registrarse
            </Button>
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader className="flex items-center">
              <DialogTitle>Bienvenido a Pinspire</DialogTitle>
              <DialogDescription>
                Encuentra nuevas ideas para probar
              </DialogDescription>
            </DialogHeader>
            <div className="w-full grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="email">Correo</Label>
                <Input id="email" name="email" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input id="password" type="password" required />
                <a
                  href="#"
                  className="mx-auto inline-block text-sm underline-offset-4 text-gray-500"
                >
                  Usa 8 o más letras, números y símbolos
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="date" className="px-1">
                  Fecha de nacimiento
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className="w-full justify-between font-normal"
                    >
                      {date ? date.toLocaleDateString() : "Selecciona la fecha"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-full overflow-hidden p-0"
                    align="end"
                  >
                    <Calendar
                    className="w-full"
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate(date);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col font-medium text-[12px] text-center space-y-2">
                
                <p className="text-gray-500">
                Si continúas, aceptas los Términos del servicio de Pinspire y confirmas que has leído nuestra Política de privacidad. Aviso de recopilación de datos.
                </p>
                <p className="text-black cursor-pointer">
                ¿Ya eres miembro? <span className="text-black font-semibold"> Iniciar sesión </span> 
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button className="w-full bg-red-600 text-white" type="submit">
                Continuar
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
