import HeroSection from "@/components/home/heroSection";
import Collections from "@/components/home/collections";
import VideoSection from "@/components/videoSection";
import { products, products2 } from "@/data/productsData";

export default function Home() {
  
  return (
    <div>
      <HeroSection />
      <Collections
        collectionsName="Colección BLV Podcast"
        products={products}
      />
      <Collections collectionsName="Colección J&B" products={products2} />
      <VideoSection />
    </div>
  );
}
