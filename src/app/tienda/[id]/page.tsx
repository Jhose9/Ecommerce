"use client";
import { use, useState } from "react";
import BreadcrumbComponent from "@/components/breadcrumbComponent";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductReviews from "@/components/productReviews";
import SocialMediaIcons from "@/components/socialMediaIcons";
import AmountComponent from "@/components/amountComponent";
const product = [
  {
    id: 1,
    title: "Detalles",
    valor: [
      "Mangas ajustadas",
      "Cuello acanalado",
      "Cinta interior del mismo tejido en la parte trasera del cuello",
      "Pespuntes con doble aguja en puños y dobladillo",
    ],
  },
  {
    id: 2,
    title: "Composición",
    valor: [
      "Shell – Punto jersey sencillo de punto suelto",
      "100% Cotton – Organic Carded – 215 GSM",
      "Desgastado",
    ],
  },
  {
    id: 3,
    title: "Cuidado",
    valor: [
      "Lavar juntos colores similares, no planchar sobre la impresión, lavar y planchar del revés.",
    ],
  },
];
function Page({ params }: { params: Promise<{ id: number }> }) {
  const [count, setcount] = useState(1);
  const { id } = use(params); //id comment
  console.log(id);

  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <BreadcrumbComponent title="Productos" className="pl-5 mt-5 2xl:pl-36" />
      <div className="lg:grid-cols-2 lg:grid lg:items-center">
        <div className="w-[90%] h-[27rem] mx-auto bg-white rounded-2xl overflow-hidden flex items-center justify-center md:h-[45rem] md:w-[90%] 2xl:w-[80%] 2xl:ml-36 ">
          <Image
            height={900}
            width={900}
            alt="product image"
            src={"/foto-modelo-1.jpg"}
            className="h-[90%] w-[90%] md:w-[90%] 2xl:w-[80%]  object-cover rounded-2xl"
          />
        </div>

        <div className="bg-white w-[90%] md:w-[95%] lg:h-[45rem] rounded-2xl mx-auto my-7 xl:w-[80%] xl:mx-0 2xl:w-[70%]">
          <div className="w-[90%] md:w-[95%] lg:w-[80%] mx-auto pt-10 space-y-3">
            <h1 className="font-semibold text-2xl 2xl:text-3xl 2xl:pb-5">
              Camiseta BLV Podcast – Team JEN
            </h1>
            <div className="flex items-center 2xl:pb-2">
              <p className="font-bold text-xl 2xl:text-2xl">34.96</p>
              <span className="font-bold text-xl">€</span>
            </div>

            {product.map(({ title, valor, id }) => (
              <div key={id}>
                <h2 className="font-bold opacity-75">{title}</h2>
                {valor.map((value, index) => (
                  <p
                    key={index}
                    className="opacity-45 text-sm font-semibold my-1 xl:text-[0.9rem]"
                  >
                    {value}
                  </p>
                ))}
              </div>
            ))}

            <div className="flex gap-6 flex-col lg:pt-5">
              <div className="flex items-center gap-3">
                <h3 className="font-bold">Talla:</h3>
                <Select>
                  <SelectTrigger className="w-[60%] rounded-2xl opacity-70">
                    <SelectValue placeholder="Elige una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-[30%_70%] md:grid-cols-[20%_60%_20%]">
                <div className="flex">
                  <AmountComponent count={count} setcount={setcount} />
                </div>
                <Button className="rounded-3xl w-11/12 mx-auto">
                  Añadir al carrito
                </Button>
                <div className="md:grid md:grid-cols-2">
                  <Heart
                    onClick={() => {
                      setIsChecked(true);
                    }}
                    className={cn(
                      "hover:cursor-pointer w-6 h-6 mt-5 md:mx-auto md:my-auto",
                      isChecked ? "hidden" : "block"
                    )}
                  />
                  <Check
                    className={cn(
                      "w-6 h-6 mt-5 md:mx-auto md:my-auto hidden",
                      isChecked ? "block" : "hidden"
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center pt-1 pb-7 lg:pb-0 lg:pt-6">
              <p className="font-semibold">Compartir en :</p>
              <SocialMediaIcons className="text-black opacity-45" />
            </div>
          </div>
        </div>
      </div>

      <ProductReviews />
    </div>
  );
}

export default Page;
