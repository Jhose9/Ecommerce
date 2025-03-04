"use client";
import React, { useState } from "react";
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
import { useProductsByName } from "@/hooks/use-Products";
import { Spinner } from "./ui/spinner";
import { IProducts } from "@/types/productsTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
function NavbarSearch() {
  const router = useRouter();
  const [word, setWord] = useState("");
  const { data, isPending } = useProductsByName(word);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectProduct = (id: number) => {
    setIsOpen(false);
    router.push(`/tienda/${id}`);
  };
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger
        onClick={() => {
          setIsOpen(true);
        }}
        className="flex gap-2 hover:cursor-pointer hover:opacity-45 transition"
      >
        <Search />
        Búsqueda
      </DrawerTrigger>
      <DrawerContent className="h-[85%]">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
          <div>
            <Input
              className="h-32 text-center font-bold placeholder:text-5xl placeholder:font-bold placeholder:text-center outline-none focus:outline-none focus:ring-0"
              style={{ fontSize: "3rem" }}
              placeholder="Buscar Productos"
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />
          </div>
          <h1 className="text-center opacity-75 font-medium mt-2">
            Comience a escribir para ver los productos que está buscando.
          </h1>
          {isPending ? (
            <div className="mx-auto">
              <Spinner size="large" />
            </div>
          ) : (
            <div className="grid grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto gap-7 mt-5">
              {data.map(({ name, id, img, price }: IProducts) => (
                <div
                  onClick={() => {
                    handleSelectProduct(id);
                  }}
                  key={id}
                  className="hover:cursor-pointer"
                >
                  <Image
                    height={600}
                    width={600}
                    alt="product image"
                    src={img}
                    className="h-[12rem] rounded-2xl object-cover object-top "
                  />
                  <h1 className="font-semibold">{name}</h1>
                  <p className="font-bold">{price}</p>
                </div>
              ))}
            </div>
          )}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

export default NavbarSearch;
