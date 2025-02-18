import { photos } from "@/photos";
import { IProducts } from "@/types/productsTypes";

export const products: IProducts[] = [
  {
    id: 1,
    name: "Laptop Gamer",
    price: 1299.99,
    description: "Laptop de alto rendimiento con tarjeta gráfica dedicada.",
    img: photos.modelo11,
  },
  {
    id: 2,
    name: "Smartphone Pro",
    price: 899.99,
    description: "Teléfono inteligente con cámara de 108MP y pantalla AMOLED.",
    img: photos.modelo9,
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos",
    price: 149.99,
    description:
      "Auriculares con cancelación de ruido y batería de larga duración.",
    img: photos.modelo3,
    colorHeart: "text-white",
  },
  {
    id: 4,
    name: "Monitor 4K",
    price: 399.99,
    description: "Monitor de 27 pulgadas con resolución 4K UHD y 144Hz.",
    img: photos.modelo4,
    colorHeart: "text-white",
  },
  {
    id: 5,
    name: "Teclado Mecánico",
    price: 99.99,
    description: "Teclado mecánico RGB con switches intercambiables.",
    img: photos.modelo5,
    colorHeart: "text-white",
  },
];

export const products2: IProducts[] = [
  {
    id: 1,
    name: "Laptop Gamer",
    price: 1299.99,
    description: "Laptop de alto rendimiento con tarjeta gráfica dedicada.",
    img: photos.modelo6,
    colorHeart: "text-white",
  },
  {
    id: 2,
    name: "Smartphone Pro",
    price: 899.99,
    description: "Teléfono inteligente con cámara de 108MP y pantalla AMOLED.",
    img: photos.modelo7,
    colorHeart: "text-white",
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos",
    price: 149.99,
    description:
      "Auriculares con cancelación de ruido y batería de larga duración.",
    img: photos.modelo8,
    colorHeart: "text-white",
  },
];
