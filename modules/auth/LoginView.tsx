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
import { Label } from "@/components/ui/label";

export function LoginView() {
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              className="text-white rounded-xl"
              variant="destructive"
              size="lg"
              onClick={() => {
                console.log("holaaa login");
              }}
            >
              Iniciar Sesión
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex items-center">
              <DialogTitle>Bienvenido a Pinspire</DialogTitle>
              <DialogDescription>
                
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
                  className="mr-auto inline-block text-sm underline-offset-4 hover:underline text-blue-600"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div className="flex flex-col font-medium text-[12px] text-center space-y-2">
                <p className="text-black cursor-pointer font-semibold">
                ¿Aún no estás en Pinspire? Regístrate
                </p>
                <p className="text-gray-500">
                Si continúas, aceptas los Términos del servicio de Pinspire y confirmas que has leído nuestra Política de privacidad. Aviso de recopilación de datos
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button className="w-full bg-red-600 text-white" type="submit">
                Iniciar Sesión
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
