"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpIcon, CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DashBoardView() {

  const isMobile = useIsMobile()

  return (
    <header className="flex w-full z-50 backdrop-blur border-b">
    <div className="flex w-full items-center gap-4 px-6 py-3">

      <div className="font-bold text-xl">Pinspire</div>

      <div>
      <Button className="text-black" variant="link" size="lg">Explorar</Button>
      </div>
  
      <div className="flex flex-1">
        <Input type="search" placeholder="Search ideas..." />
      </div>

      <div className="flex gap-2">
      <Button className="text-blue-600" variant="link" size="lg">Info</Button>
      <Button className="text-blue-600" variant="link" size="lg">Empresas</Button>
      <Button className="text-blue-600" variant="link" size="lg">Crear</Button>
      <Button className="text-blue-600" variant="link" size="lg">Noticias</Button>

      <Button className="text-white" variant="destructive" size="lg">Iniciar Sesión</Button>
      <Button className="text-blue-600" variant="outline" size="lg">Registrarse</Button>
      </div>
  
      
    </div>
  </header>
  
  )
}