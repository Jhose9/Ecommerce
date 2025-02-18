import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logs } from "lucide-react";
import PriceFilterClothing from "./priceFilterClothing";
function PriceFilterClothingMobile() {
  const SIDES = "left";
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex gap-3">
          <Logs />
          <p className="font-bold">Ver columna</p>
        </div>
      </SheetTrigger>
      <SheetContent className="p-1" side={SIDES}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <PriceFilterClothing />
      </SheetContent>
    </Sheet>
  );
}

export default PriceFilterClothingMobile;
