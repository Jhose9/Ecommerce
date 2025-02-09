import Image from "next/image";
import React from "react";
import SocialMediaIcons from "./socialMediaIcons";
const categorias = [
  {
    id: 1,
    nombre: "Colección BLV",
    items: [
      "Camiseta BLV Team Judas",
      "Camiseta BLV Team JEN",
      "Sudadera BLV Podcast Black",
      "Sudadera BLV Podcast White",
    ],
  },
  {
    id: 2,
    nombre: "Colección JEN",
    items: ["Bidón JEN", "Camiseta logo JEN", "Libro Billionaire"],
  },
  {
    id: 3,
    nombre: "Síguenos",
    items: ["Facebook", "Instagram", "Youtube", "Tiktok"],
  },
  {
    id: 4,
    nombre: "Legal",
    items: [
      "Política de privacidad",
      "Política de cookies",
      "Aviso legal",
      "Condiciones generales de venta",
    ],
  },
];
function FooterElements({
  title,
  elements,
}: {
  id?: number;
  title: string;
  elements: string[];
}) {
  return (
    <div className="py-6 space-y-4">
      <h2 className="text-white font-bold">{title}</h2>
      {elements.map((dato, index) => (
        <p
          key={index}
          className="text-white opacity-55 md:pr-4 hover:cursor-pointer hover:opacity-75"
        >
          {dato}
        </p>
      ))}
    </div>
  );
}
function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="xl:grid xl:grid-cols-[30%_70%] py-11">
        <div className="w-full flex-col py-10 gap-4 flex items-center justify-center">
          <Image height={250} width={250} alt="logo" src="/logo3white.png" />
          <div className="bg-white h-0.5 w-5/6 md:w-4/6"></div>
        </div>
        <div className="pl-10 md:grid md:grid-cols-4">
          {categorias.map(({ nombre, items, id }) => (
            <FooterElements key={id} id={id} title={nombre} elements={items} />
          ))}
        </div>
      </div>
      <div className="mb-[3.6rem] lg:mb-0 text-white pl-5 font-bold sm:flex sm:justify-between sm:items-center px-8">
        Creado por Jose Blanco
        <div className="py-5">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
}

export default Footer;
