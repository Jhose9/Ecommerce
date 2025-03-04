import { useQuery } from "@tanstack/react-query";
export enum Collection {
  JB = "J&B",
  DB = "D&B",
}
const fetchProduct = async () => {
  const valor = await fetch("/api/products");
  const json = await valor.json();
  return json;
};

export const useProducts = () => {
  return useQuery({ queryKey: ["Todos"], queryFn: fetchProduct });
};

const fetchProductBy = async (id: number) => {
  const valor = await fetch(`/api/products/${id}`);
  const json = await valor.json();
  return json;
};

export const useProductsBy = (id: number) => {
  return useQuery({ queryKey: ["Todos"], queryFn: () => fetchProductBy(id) });
};

const fetchProductsByCollection = async (collection: Collection) => {
  const valor = await fetch(`/api/products/collection/${collection}`);
  const data = await valor.json();
  return data;
};

export const useProductsByCollection = (collection: Collection) => {
  return useQuery({
    queryKey: ["collection", collection],
    queryFn: () => fetchProductsByCollection(collection),
  });
};

const fetchProductsByName = async (name: string) => {
  const valor = await fetch("/api/products/search", {
    method: "POST",
    body: JSON.stringify({ name: name }),
  });
  const data = await valor.json();
  return data;
};

export const useProductsByName = (name: string) => {
  return useQuery({
    queryKey: ["name", name],
    queryFn: () => fetchProductsByName(name),
  });
};
