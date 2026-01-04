"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { RegisterType } from "@/types/registerType";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas/registerSchema";
import { useApp } from "@/store/ContextProvider";

export function RegisterView() {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const { state, register } = useApp();

  useEffect(() => {
      if (state.status === "authenticated" && state.view === "register") {
        toast.success("Registro realizado con éxito");
        setDialogOpen(false);
        form.reset();
      }
    
      if (state.status === "error") {
        toast.error(state.error);
      }
    }, [state.status]);

  const form = useForm<RegisterType>({

    resolver: zodResolver(RegisterSchema),

    defaultValues: {
      email: "",
      password: "",
      birthDate: null,
    },
  });

  function onSubmit(values: RegisterType) {
    register(values);
  }

  return (
    <>
      <Dialog
      open={dialogOpen}
      onOpenChange={(value) => {
        setDialogOpen(value);
        if (!value) form.reset();
      }}
      >
          <DialogTrigger asChild>
            <Button
              className="text-black rounded-xl"
              variant="outline"
              size="lg"
            >
              Registrarse
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex items-center">
              <DialogTitle>Bienvenido a Pinspire</DialogTitle>
              <DialogDescription>
                Encuentra nuevas ideas para probar
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Correo Electrónico </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Correo Electrónico"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Contraseña"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-3">
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={ ({ field }) => (
                    <FormItem>
                       <FormLabel htmlFor="date" className="px-1">  Fecha de nacimiento </FormLabel>
                       <FormControl>
                       <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="w-full justify-between font-normal"
                      >
                        {field.value
                          ? field.value.toLocaleDateString()
                          : "Selecciona la fecha"}
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
                        selected={field.value ?? undefined}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          field.onChange(date ?? null);
                          setCalendarOpen(false);
                        }}
                        {...field}
                      />
                    </PopoverContent>
                  </Popover>
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>

                <div className="w-full grid gap-4">
                  <div className="flex flex-col font-medium text-[12px] text-center space-y-2">
                    <p className="text-gray-500">
                      Si continúas, aceptas los Términos del servicio de
                      Pinspire y confirmas que has leído nuestra Política de
                      privacidad. Aviso de recopilación de datos.
                    </p>
                    <p className="text-black">
                      ¿Ya eres miembro?
                      <span className="text-black font-semibold pl-1 cursor-pointer">
                        Iniciar sesión
                      </span>
                    </p>
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    className="w-full bg-red-600 text-white"
                    type="submit"
                  >
                    Continuar
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
      </Dialog>
    </>
  );
}
