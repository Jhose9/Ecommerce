"use client";
import { Heart, ShoppingCart, UserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import NavListItem from "./navListItem";
import BurgerMenu from "@/components/burgerMenu";
import NavbarSearch from "@/components/navbarSearch";
import IconNavLinks from "./iconNavLinks";
import Image from "next/image";
import { IMenuLink } from "@/types/navbarTypes";
import { useWishList } from "@/context/AppContext";
import Link from "next/link";
import { useProducts } from "@/hooks/use-Products";
import { IProducts } from "@/types/productsTypes";

const componentStyles = "text-[0.95rem]";

function Navbar() {
  const { wishList, updateWishList } = useWishList();

  useEffect(() => {
    const localWishList = localStorage.getItem("products");
    if (localWishList != null) {
      const valor = JSON.parse(localWishList);
      updateWishList(valor.products, valor.total);
    }
  }, []);

  const menuLinks: IMenuLink[] = [
    {
      id: 1,
      name: "Colección J&B",
      content: [
        { id: 1, name: "Sudadera J&B", router: "/" },
        { id: 2, name: "Camiseta J&B", router: "/" },
        { id: 3, name: "Vestido J&B", router: "/" },
      ],
      className: componentStyles,
    },
    {
      id: 2,
      name: "Colección D&B",
      content: [
        { id: 1, name: "Sudadera D&B", router: "/" },
        { id: 2, name: "Camiseta D&B", router: "/" },
        { id: 3, name: "Vestido D&B", router: "/" },
      ],
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
        <Link href={"/"}>
          <Image
            className="hover:cursor-pointer"
            src="/logoblack.png"
            alt="logo"
            width={100}
            height={100}
            priority
          />
        </Link>
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
            value={wishList.total}
            router="/favoritos"
            size={20}
          />
        </div>
        <IconNavLinks
          className="hidden lg:flex"
          Icons={ShoppingCart}
          value={1000}
          router="https://www.youtube.com/"
          size={20}
        />
      </div>
      {/* -------------------Buscar, Registrar y Botones de navegación---------------------> */}
    </div>
  );
}

export default Navbar;
