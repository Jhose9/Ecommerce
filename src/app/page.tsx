import Navbar from "@/components/navbar";
import InfoBar from "@/components/infoBar";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/heroSection";
import BottomNavigationBar from "@/components/bottomNavigationBar";

export default function Home() {
  return (
    <div>
      <InfoBar />
      <Navbar />
      <HeroSection />
      <Button className="bg-red-700 mt-[4000px]">Click me</Button>
      <BottomNavigationBar />
    </div>
  );
}
