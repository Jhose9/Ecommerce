"use client";
import React from "react";
import ProductCards from "../productCards";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { Action, IProducts } from "@/types/productsTypes";
import { Collection, useProductsByCollection } from "@/hooks/use-Products";
import CollectionSkeleton from "../collectionSkeleton";
import { useRouter } from "next/navigation";

function Collections({
  collectionsName,
  collection,
}: {
  collectionsName: string;
  collection: Collection;
}) {
  const { data, isPending } = useProductsByCollection(collection);
  const router = useRouter();

  if (isPending) {
    return <CollectionSkeleton />;
  }

  if (data && Array.isArray(data)) {
    return (
      <div className="xl:mt-[2rem] p-4 2xl:w-[85%] md:w-[90%] mx-auto">
        <div className="space-y-4 mb-6 md:flex md:items-end justify-between">
          <h2 className="font-bold text-[1.3rem]">{collectionsName}</h2>
          <Button
            onClick={() => {
              router.push("/tienda");
            }}
            className="rounded-3xl py-5 flex items-center justify-center"
          >
            Ver Todos Los Productos
            <MoveRight size={7} />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:gap-6 ">
          {data?.map(function ({
            id,
            name,
            description,
            price,
            img,
            colorHeart,
          }: IProducts) {
            return (
              <ProductCards
                action={Action.add}
                colorHeart={colorHeart}
                img={img}
                name={name}
                description={description}
                price={price}
                key={id}
                id={id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collections;
