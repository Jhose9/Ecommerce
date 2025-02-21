"use client";
import BreadcrumbComponent from "@/components/breadcrumbComponent";
import ProductCards from "@/components/productCards";
import { Button } from "@/components/ui/button";
import { useWishList } from "@/context/AppContext";
import { Action, IwishList } from "@/types/productsTypes";
import { Heart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
  const { wishList } = useWishList();
  const [WishList, setWishList] = useState<IwishList>({
    total: 0,
    products: [],
  });
  useEffect(() => {
    const localWishList = localStorage.getItem("products");
    if (localWishList != null) {
      setWishList(JSON.parse(localWishList));
    } else {
      setWishList({ total: 0, products: [] });
    }
  }, [wishList]);

  if (WishList.total == 0) {
    return (
      <div className="p-3">
        <BreadcrumbComponent
          title="Favoritos"
          className="flex-col gap-3 2xl:pl-24"
        />
        <div className=" flex flex-col justify-center items-center my-5 lg:my-14">
          <Heart className="opacity-15  mb-3" size={110} />
          <div className="flex flex-col gap-5 xl:gap-8">
            <h1 className="text-xl font-semibold text-center xl:text-4xl">
              This wishlist is empty.
            </h1>
            <p className="text-center opacity-55 md:w-[60%] md:mx-auto xl:text-lg">
              You dont have any products in the wishlist yet. You will find a
              lot of interesting products on our Shop page.
            </p>
            <Link className=" mx-auto" href="/">
              <Button className=" mx-auto rounded-3xl py-6 px-9">
                Return To Shop
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="p-3 2xl:pl-32">
      <BreadcrumbComponent title="Favoritos" className="flex-col gap-3" />
      <h2 className="text-xl mt-7 mb-3">Your products wishlist</h2>
      <div className="border mb-6"></div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {WishList.products.map(
          ({ description, img, name, price, id, colorHeart }, index) => (
            <ProductCards
              id={id}
              colorHeart={colorHeart}
              action={Action.delete}
              key={index}
              description={description}
              img={img}
              name={name}
              price={price}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Page;
