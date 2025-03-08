"use client";
import React, { useState } from "react";
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
function PriceFilterClothingMobile({
  action,
}: {
  action: (number: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const SIDES = "left";
  const handleSheet = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        onClick={() => {
          setIsOpen(true);
        }}
      >
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
        <PriceFilterClothing handleAction={handleSheet} action={action} />
      </SheetContent>
    </Sheet>
  );
}

export default PriceFilterClothingMobile;
