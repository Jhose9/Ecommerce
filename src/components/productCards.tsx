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
import { cn } from "@/lib/utils";

function ProductCards({
  name,
  description,
  price,
  img,
  colorHeart,
}: IProducts) {
  return (
    <div className="w-full xl:w-[88%] 2xl:w-[75%] bg-white rounded-b-lg ">
      <div className="relative">
        <Image
          height={600}
          width={600}
          alt="product image"
          src={img}
          className="w-full h-52 md:h-60 2xl:h-96 rounded-t-lg object-cover object-top "
        />
        <HoverCard closeDelay={55} openDelay={40}>
          <HoverCardTrigger asChild>
            <Heart
              className={cn(
                "hover:cursor-pointer absolute top-2 right-2 w-4 h-4 lg:w-5 lg:h-5",
                colorHeart
              )}
            />
          </HoverCardTrigger>
          <HoverCardContent className="min-w-10 bg-black">
            <div>
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
