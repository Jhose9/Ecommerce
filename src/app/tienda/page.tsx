"use client";
import React, { useEffect, useState } from "react";
import ProductCards from "@/components/productCards";
import BreadcrumbComponent from "@/components/breadcrumbComponent";
import PriceFilterClothing from "@/components/priceFilterClothing";
import PriceFilterClothingMobile from "@/components/priceFilterClothingMobile";
import OrderSelect from "@/components/orderSelect";
import { Action, IProducts } from "@/types/productsTypes";
import { useProducts } from "@/hooks/use-Products";
import StoreSkeleton from "@/components/storeSkeleton";

function Page() {
  const { data, isPending, isSuccess } = useProducts();
  const [products, setProducts] = useState<IProducts[]>([]);
  const [dataFilter, setDataFilter] = useState<IProducts[]>([]);

  useEffect(() => {
    if (isSuccess && data) {
      setProducts(data);
      setDataFilter(data);
    }
  }, [isSuccess, data]);

  const actions = (number: number) => {
    const newData = products.filter((product) => product.price < number);
    const sortData = newData.sort((a, b) => b.price - a.price);
    setDataFilter(sortData);
  };

  if (isPending) {
    return <StoreSkeleton />;
  }

  return (
    <div className="lg:grid lg:grid-cols-[20%_80%] 2xl:grid-cols-[25%_75%]">
      {/* <--------------- busqueda de produtos en lg responsive-------------> */}
      <PriceFilterClothing action={actions} className="hidden" />
      {/* <--------------- busqueda de produtos en lg responsive-------------> */}

      <div className="px-5">
        <BreadcrumbComponent title="Tienda" className="flex lg:hidden" />
        <div className="w-full border mb-4 lg:hidden"></div>
        {/* <----------------- ver columnas y filtrado y despues navegacion-------------> */}
        <div className="flex justify-between items-center mb-6 lg:mt-7">
          <div className="flex gap-2 lg:hidden">
            <PriceFilterClothingMobile action={actions} />
          </div>
          <BreadcrumbComponent title="Tienda" className="hidden lg:flex" />
          <OrderSelect />
        </div>
        {/* <----------------- ver columnas y filtrado y despues navegacion-------------> */}

        {/* <----------------Los productos----------------------> */}
        <div className="grid grid-cols-2 gap-3 mb-16 md:grid-cols-3 lg:grid-cols-4 ">
          {dataFilter &&
            dataFilter.map(
              ({ description, img, name, price, id }: IProducts) => (
                <ProductCards
                  id={id}
                  action={Action.add}
                  key={id}
                  description={description}
                  img={img}
                  name={name}
                  price={price}
                  colorHeart={"text-white"}
                />
              )
            )}
        </div>
        {/* <----------------Los productos----------------------> */}
      </div>
    </div>
  );
}

export default Page;
