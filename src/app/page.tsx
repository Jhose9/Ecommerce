import Navbar from "@/components/navbar";
import InfoBar from "@/components/infoBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <InfoBar />
      <Navbar />
      <Button className="bg-red-700 mt-[4000px]">Click me</Button>
    </div>
  );
}
