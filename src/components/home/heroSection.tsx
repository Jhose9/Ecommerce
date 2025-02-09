import React from "react";
import { Button } from "@/components/ui/button";
import InfiniteTicker from "@/components/InfiniteTicker";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="relative w-11/12 mx-auto mt-6 xl:mt-10 mb-16 h-[27rem] md:h-[30rem]">
      {/* Background Image */}
      <Image
        src="/calidadmediafoto.jpg"
        alt="Background"
        fill
        className="absolute inset-0 object-cover z-0 rounded-t-xl"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-4 md:pl-10 w-3/4 md:w-2/4 gap-5">
        <h1 className="text-3xl text-white">La tienda oficial de J&B</h1>
        <p className="hidden opacity-60 w-2/3 text-white lg:block">
          El podcast dónde un empresario Forbes y un emprendedor charlan
          tranquilamente sobre emprendimiento, empresa, finanzas y otros muchos
          temas de la vida.
        </p>
        <Button className="rounded-3xl p-5">Ver Todos Los Productos</Button>
      </div>

      {/* News ticker */}
      <InfiniteTicker />
    </div>
  );
}

export default HeroSection;
