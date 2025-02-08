import React from "react";
import ProductCards from "../productCards";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { IProducts } from "@/types/productsTypes";

function Collections({
  collectionsName,
  products,
}: {
  collectionsName: string;
  products: IProducts[];
}) {
  return (
    <div className="mt-[4rem] p-4 lg:w-[95%] 2xl:w-[93%] lg:mx-auto">
      <div className="space-y-4 mb-6 md:flex md:items-end justify-between">
        <h2 className="font-bold text-[1.3rem]">{collectionsName}</h2>
        <Button className="rounded-3xl py-5 flex items-center justify-center">
          Ver Todos Los Productos
          <MoveRight size={7} />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-7 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        {products.map(function ({ id, name, description, price }) {
          return (
            <ProductCards
              name={name}
              description={description}
              price={price}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Collections;
