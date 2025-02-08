import Navbar from "@/components/navbar";
import InfoBar from "@/components/infoBar";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/home/heroSection";
import BottomNavigationBar from "@/components/bottomNavigationBar";
import Collections from "@/components/home/collections";
import { IProducts } from "@/types/productsTypes";
const products: IProducts[] = [
  {
    id: 1,
    name: "Laptop Gamer",
    price: 1299.99,
    description: "Laptop de alto rendimiento con tarjeta gráfica dedicada.",
  },
  {
    id: 2,
    name: "Smartphone Pro",
    price: 899.99,
    description: "Teléfono inteligente con cámara de 108MP y pantalla AMOLED.",
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos",
    price: 149.99,
    description:
      "Auriculares con cancelación de ruido y batería de larga duración.",
  },
  {
    id: 4,
    name: "Monitor 4K",
    price: 399.99,
    description: "Monitor de 27 pulgadas con resolución 4K UHD y 144Hz.",
  },
  {
    id: 5,
    name: "Teclado Mecánico",
    price: 99.99,
    description: "Teclado mecánico RGB con switches intercambiables.",
  },
];

const products2: IProducts[] = [
  {
    id: 1,
    name: "Laptop Gamer",
    price: 1299.99,
    description: "Laptop de alto rendimiento con tarjeta gráfica dedicada.",
  },
  {
    id: 2,
    name: "Smartphone Pro",
    price: 899.99,
    description: "Teléfono inteligente con cámara de 108MP y pantalla AMOLED.",
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos",
    price: 149.99,
    description:
      "Auriculares con cancelación de ruido y batería de larga duración.",
  },
];

export default function Home() {
  return (
    <div>
      <InfoBar />
      <Navbar />
      <HeroSection />
      <Collections
        collectionsName="Colección BLV Podcast"
        products={products}
      />
      <Collections collectionsName="Colección J&B" products={products2} />
      <Button className="bg-red-700 mt-[4000px]">Click me</Button>
      <BottomNavigationBar />
    </div>
  );
}
