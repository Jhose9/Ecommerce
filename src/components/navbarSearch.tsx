import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
function NavbarSearch() {
  return (
    <Drawer>
      <DrawerTrigger className="flex gap-2 hover:cursor-pointer hover:opacity-45 transition">
        <Search />
        Búsqueda
      </DrawerTrigger>
      <DrawerContent className="h-[50rem]">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
          <div>
            <Input
              className="h-32 text-center font-bold placeholder:text-5xl placeholder:font-bold placeholder:text-center outline-none focus:outline-none focus:ring-0"
              style={{ fontSize: "3rem" }}
              placeholder="Buscar Productos"
            />
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

export default NavbarSearch;
