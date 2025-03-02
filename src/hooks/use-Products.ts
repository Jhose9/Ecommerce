import { useQuery } from "@tanstack/react-query";

const fetchProduct = async () => {
  const valor = await fetch("/api/products");
  const json = await valor.json();
  return json;
};

export const useProducts = () => {
  return useQuery({ queryKey: ["Todos"], queryFn: fetchProduct });
};
