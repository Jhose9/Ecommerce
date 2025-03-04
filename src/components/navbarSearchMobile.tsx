"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useProductsByName } from "@/hooks/use-Products";
import { Spinner } from "./ui/spinner";
import { IProducts } from "@/types/productsTypes";
import Image from "next/image";

function NavbarSearchMobile({ funcion }: { funcion: () => void }) {
  const router = useRouter();
  const [word, setWord] = useState("");
  const { data, isPending } = useProductsByName(word);

  const handleSelectProduct = (id: number) => {
    router.push(`/tienda/${id}`);
    funcion();
  };

  return (
    <div className="flex-col gap-3 items-center p-0">
      <Input
        onChange={(e) => {
          setWord(e.target.value);
        }}
        className=""
        placeholder="Buscar productos"
      />
      <div>
        {isPending ? (
          <Spinner size="large" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-5">
            {data.map(({ id, name, price, img }: IProducts) => (
              <div
                onClick={() => {
                  handleSelectProduct(id);
                }}
                key={id}
                className="hover:cursor-pointer"
              >
                <Image
                  height={400}
                  width={400}
                  alt="product image"
                  src={img}
                  className="h-[10rem] rounded-xl object-cover object-top "
                />
                <h1 className="font-semibold text-[0.80rem]">{name}</h1>
                <p className="font-bold text-xs">{price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarSearchMobile;
