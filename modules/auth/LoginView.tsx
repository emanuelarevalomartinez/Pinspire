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
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginType } from "@/types/loginType";
import { LoginSchema } from "@/schemas/loginSchema";
import { useApp } from "@/store/ContextProvider";
import { useEffect, useState } from "react";

export function LoginView() {

  // TODO
  // hacer peticiones a la api de unpash y mostrarlo en una image de next
  // alñadir responsive


   const [dialogOpen, setDialogOpen] = useState(false);

  const { state, login } = useApp();

  useEffect(() => {
    if (state.status === "authenticated" && state.view === "login") {
      toast.success("Sesión iniciada con éxito");
      setDialogOpen(false);
      form.reset();
    }
  
    if (state.status === "error") {
      toast.error(state.error);
    }
  }, [state.status]);
  

  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginType) {
    login(values);
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
            className="text-white rounded-xl"
            variant="destructive"
            size="lg"
          >
            Iniciar Sesión
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex items-center">
            <DialogTitle>Bienvenido a Pinspire</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    <FormDescription className="cursor-pointer underline-offset-4 hover:underline text-blue-600">
                      ¿Olvidaste tu contraseña?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

<div className="w-full grid gap-4">
                  <div className="flex flex-col font-medium text-[12px] text-center space-y-2">
                    <p className="text-black font-semibold cursor-pointer">
                    ¿Aún no estás en Pinspire? Regístrate
                    </p>
                    <p className="text-gray-500">
                      Si continúas, aceptas los Términos del servicio de Pinspire y confirmas que has leído nuestra Política de privacidad. Aviso de recopilación de datos.
                    </p>
                  </div>
                </div>

              <DialogFooter>
                <Button className="w-full bg-red-600 text-white" type="submit">
                  Iniciar Sesión
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
