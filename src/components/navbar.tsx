import { Heart, ShoppingCart, UserRound } from "lucide-react";
import React from "react";
import NavListItem from "./navListItem";
import BurgerMenu from "@/components/burgerMenu";
import NavbarSearch from "@/components/navbarSearch";
import IconNavLinks from "./iconNavLinks";
import Image from "next/image";
import { IMenuLink } from "@/types/navbarTypes";

const componentStyles = "text-[0.95rem]";

function Navbar() {
  const menuLinks: IMenuLink[] = [
    {
      id: 1,
      name: "Colección J&B",
      content: [{ id: 1, name: "coleccion 1", router: "/" }],
      className: componentStyles,
    },
    {
      id: 2,
      name: "Colección A&B",
      content: [{ id: 1, name: "coleccion 2", router: "/" }],
      className: componentStyles,
    },
    {
      id: 3,
      name: "Rogue x J&B",
      content: [{ id: 1, name: "coleccion 3", router: "/" }],
      className: componentStyles,
    },
    {
      id: 4,
      name: "Mastery x J&B",
      content: [{ id: 1, name: "coleccion 4", router: "/" }],
      className: componentStyles,
    },
  ];
  return (
    <div className="min-h-20 bg-white grid grid-cols-[40%_20%_40%] sticky top-[0.1px] shadow-md z-40">
      {/* -------------------Navegación---------------------> */}
      <div className="flex items-center">
        <ul className="hidden lg:flex xl:pl-16 pl-3 flex-wrap">
          {menuLinks.map(({ id, name, content, className }) => (
            <NavListItem
              key={id}
              name={name}
              content={content}
              className={className}
            />
          ))}
        </ul>
        <div className="lg:hidden pl-6">
          <BurgerMenu items={menuLinks} />
        </div>
      </div>
      {/* --------------------Navegación--------------------> */}

      {/* -------------------LOGO---------------------> */}
      <div className="flex justify-center items-center">
        <Image
          src="/logoblack.png"
          alt="logo"
          width={100}
          height={100}
          priority
        />
      </div>

      {/* -------------------LOGO---------------------> */}

      {/* -------------------Buscar, Registrar y Botones de navegación---------------------> */}
      <div className="flex items-center justify-end pr-5 gap-5">
        <UserRound className="lg:hidden" size={20} />
        <div className="hidden lg:flex lg:gap-4 items-center">
          <div className="hover:opacity-45 hover:cursor-pointer transition   ">
            Login / register
          </div>
          <NavbarSearch />
          <IconNavLinks
            Icons={Heart}
            name="2"
            router="https://www.youtube.com/"
            size={20}
          />
        </div>
        <IconNavLinks
          className="hidden lg:flex"
          Icons={ShoppingCart}
          name="0/0.00€"
          router="https://www.youtube.com/"
          size={20}
        />
      </div>
      {/* -------------------Buscar, Registrar y Botones de navegación---------------------> */}
    </div>
  );
}

export default Navbar;
