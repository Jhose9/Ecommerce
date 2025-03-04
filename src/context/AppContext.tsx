"use client";
import { IProducts, IwishList } from "@/types/productsTypes";
import { createContext, useContext, useState } from "react";

const WishListContext = createContext<{
  wishList: IwishList;
  deteleProduct: (id: number) => void;
  addProduct: (newProduct: IProducts) => void;
  updateWishList: (newProduct: IProducts[], total: number) => void;
}>({
  wishList: { total: 0, products: [] },
  deteleProduct: () => {},
  addProduct: () => {},
  updateWishList: () => {},
});

export function WishListProvider({ children }: { children: React.ReactNode }) {
  const [wishList, setWishList] = useState<IwishList>({
    total: 0,
    products: [],
  });

  function updateWishList(newProduct: IProducts[], total: number) {
    setWishList({
      total: total,
      products: newProduct,
    });
  }
  function deteleProduct(id: number) {
    const productosGuardados = localStorage.getItem("products");
    if (productosGuardados) {
      const productosGuardadosJSON = JSON.parse(productosGuardados).products;
      const total = JSON.parse(productosGuardados).total;
      const newProducts = productosGuardadosJSON.filter(
        (producto: IProducts) => producto.id !== id
      );
      setWishList({ total: wishList.total - 1, products: newProducts });
      localStorage.setItem(
        "products",
        JSON.stringify({ total: total - 1, products: newProducts })
      );
    }
  }

  function exists(id: number) {
    const productosGuardados = localStorage.getItem("products");
    let Exist = null;
    if (productosGuardados) {
      const productosGuardadosJSON = JSON.parse(productosGuardados).products;
      Exist = productosGuardadosJSON.some(
        (product: IProducts) => product.id == id
      );
    }

    if (Exist) {
      return true;
    } else {
      return false;
    }
  }
  function addProduct(newProduct: IProducts) {
    if (!exists(newProduct.id)) {
      setWishList((prev) => ({
        ...prev,
        products: [...prev.products, newProduct],
        total: prev.products.length + 1,
      }));
      const data = {
        total: wishList.total + 1,
        products: [...wishList.products, newProduct],
      };
      const JsonData = JSON.stringify(data);
      localStorage.setItem("products", JsonData);
    }
  }

  return (
    <WishListContext.Provider
      value={{ wishList, addProduct, updateWishList, deteleProduct }}
    >
      {children}
    </WishListContext.Provider>
  );
}

// 3️⃣ Custom Hook para acceder al contexto
export function useWishList() {
  return useContext(WishListContext);
}
