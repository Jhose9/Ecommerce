import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { IProducts } from "@/types/productsTypes";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function ProductCards({ name, description, price }: IProducts) {
  return (
    <div className="w-full h-full bg-white rounded-b-lg">
      <div className="relative ">
        <Image
          height={50}
          width={50}
          alt="product image"
          src={"/foto.jpg"}
          className="h-1/2 w-full rounded-t-lg"
        />
        <HoverCard closeDelay={55} openDelay={40}>
          <HoverCardTrigger asChild>
            <Heart className="hover:cursor-pointer absolute top-2 right-2 w-4 h-4 lg:w-5 lg:h-5 opacity-45" />
          </HoverCardTrigger>
          <HoverCardContent className="min-w-10 bg-black">
            <div className="">
              <p className="text-white text-[0.8rem] ">Add to WishList</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="flex flex-col justify-start items-start pl-4 gap-3">
        <h3 className="font-bold text-sm pt-2">{name}</h3>
        <p className="text-[0.8rem] opacity-50 text-start min-h-14">
          {description}
        </p>
        <p className="font-bold">{price}€</p>
        <Button className="w-5/6 mx-auto rounded-2xl mb-3">
          <p className="truncate text-[0.8rem] ">Seleccionar opciones</p>
        </Button>
      </div>
    </div>
  );
}

export default ProductCards;
