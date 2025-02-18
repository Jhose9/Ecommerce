"use client";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Colecction } from "@/data/clothesCollectionData";

function PriceFilterClothing({ className }: { className?: string }) {
  const [price, setPrice] = useState(40);
  return (
    <div
      className={cn("lg:mt-[7.2rem] lg:pl-5 2xl:relative lg:block", className)}
    >
      <div className="w-full min-h-[23rem] rounded-2xl bg-white pt-5 2xl:w-[70%] 2xl:absolute 2xl:right-4  ">
        <div className="pl-4 ">
          <h2 className="font-bold">Categoria</h2>
          <Accordion type="single" collapsible>
            {Colecction.map(({ content, id, name }) => (
              <AccordionItem
                className="border-b-0 w-[85%]"
                key={id}
                value={`${id}`}
              >
                <AccordionTrigger className="py-2 text-base opacity-60">
                  {name}
                </AccordionTrigger>
                {content.map(({ id, name }) => (
                  <AccordionContent className="pl-3" key={id}>
                    {name}
                  </AccordionContent>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="w-5/6 mx-auto border my-4"></div>

        <div className="pl-4 space-y-4">
          <h2>Filtrar por precio</h2>
          <Slider
            className="pr-4"
            defaultValue={[33]}
            max={100}
            step={1}
            onValueChange={(value) => setPrice(value[0] * 5)}
          />
          <h2>Precio: {price}€</h2>
          <Button className="rounded-2xl">Filtrar</Button>
        </div>
      </div>
    </div>
  );
}

export default PriceFilterClothing;
