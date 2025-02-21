"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Heart, X, Check } from "lucide-react";
import { Action, IProducts } from "@/types/productsTypes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useWishList } from "@/context/AppContext";

const Add = {
  BoleanAction: true,
  description: "Add to WishList",
};

const Delete = {
  BoleanAction: false,
  description: "delete to WishList",
};

function ProductCards({
  name,
  description,
  price,
  img,
  colorHeart,
  action,
}: IProducts) {
  const { addProduct, deteleProduct } = useWishList();
  const [isChecked, setIsChecked] = useState(false);

  const [actionState] = useState<{
    BoleanAction: boolean;
    description: string;
  }>(action == Action.add ? Add : Delete);

  const valor: IProducts = {
    description: description,
    img: img,
    name: name,
    price: price,
    colorHeart: colorHeart,
  };

  function actionFunction() {
    if (action == Action.add) {
      addProduct(valor);
      setIsChecked(true);
    } else {
      deteleProduct(name);
    }
  }
  return (
    <div className="w-full bg-white rounded-b-lg shadow-md">
      <div className="relative">
        <Image
          height={600}
          width={600}
          alt="product image"
          src={img}
          className="w-full h-52 md:h-60 2xl:h-96 rounded-t-lg object-cover object-top "
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => {
                  actionFunction();
                }}
                className="absolute top-2 right-2 bg-transparent border-none p-0"
              >
                {actionState.BoleanAction ? (
                  <>
                    <Heart
                      className={cn(
                        "hover:cursor-pointer w-4 h-4 lg:w-5 lg:h-5",
                        isChecked ? "hidden" : "block",
                        colorHeart
                      )}
                    />
                    <Check
                      className={cn(
                        "w-4 h-4 lg:w-5 lg:h-5 hidden",
                        isChecked ? "block" : "hidden",
                        colorHeart
                      )}
                    />
                  </>
                ) : (
                  <X
                    className={cn(
                      "hover:cursor-pointer w-4 h-4 lg:w-5 lg:h-5",
                      colorHeart
                    )}
                  />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-black">
              <p className="text-white text-[0.8rem]">
                {actionState.description}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
