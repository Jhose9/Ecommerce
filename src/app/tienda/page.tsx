import React from "react";
import ProductCards from "@/components/productCards";
import BreadcrumbComponent from "@/components/breadcrumbComponent";
import PriceFilterClothing from "@/components/priceFilterClothing";
import { products } from "@/data/productsData";
import PriceFilterClothingMobile from "@/components/priceFilterClothingMobile";
import OrderSelect from "@/components/orderSelect";

function page() {
  return (
    <div className="lg:grid lg:grid-cols-[20%_80%] 2xl:grid-cols-[25%_75%]">
      {/* <--------------- busqueda de produtos en lg responsive-------------> */}
      <PriceFilterClothing className="hidden" />
      {/* <--------------- busqueda de produtos en lg responsive-------------> */}

      <div className="px-5">
        <BreadcrumbComponent className="flex lg:hidden" />
        <div className="w-full border mb-4 lg:hidden"></div>
        {/* <----------------- ver columnas y filtrado y despues navegacion-------------> */}
        <div className="flex justify-between items-center mb-6 lg:mt-7">
          <div className="flex gap-2 lg:hidden">
            <PriceFilterClothingMobile />
          </div>
          <BreadcrumbComponent className="hidden lg:flex" />
          <OrderSelect />
        </div>
        {/* <----------------- ver columnas y filtrado y despues navegacion-------------> */}

        {/* <----------------Los productos----------------------> */}
        <div className="grid grid-cols-2 gap-3 mb-16 md:grid-cols-3 lg:grid-cols-4 ">
          {products.map(({ description, img, name, price, colorHeart, id }) => (
            <ProductCards
              key={id}
              description={description}
              img={img}
              name={name}
              price={price}
              colorHeart={colorHeart}
            />
          ))}
        </div>
        {/* <----------------Los productos----------------------> */}
      </div>
    </div>
  );
}

export default page;
