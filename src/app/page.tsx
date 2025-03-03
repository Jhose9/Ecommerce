import HeroSection from "@/components/home/heroSection";
import Collections from "@/components/home/collections";
import VideoSection from "@/components/videoSection";
import { Collection } from "@/hooks/use-Products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Collections
        collectionsName="Colección BLV Podcast"
        collection={Collection.DB}
      />
      <Collections collectionsName="Colección J&B" collection={Collection.JB} />
      <VideoSection />
    </div>
  );
}
