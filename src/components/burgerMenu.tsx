"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";
import { IMenuLink } from "@/types/navbarTypes";
import NavbarSearchMobile from "./navbarSearchMobile";
function BurgerMenu({ items }: { items: IMenuLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectProduct = () => {
    setIsOpen(false);
  };
  const SIDES = "left";
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen} key={SIDES}>
        <SheetTrigger
          onClick={() => {
            setIsOpen(true);
          }}
          asChild
        >
          <Menu />
        </SheetTrigger>
        <SheetContent className="p-0 py-10 px-3" side={SIDES}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <NavbarSearchMobile funcion={handleSelectProduct} />
          <div>
            <Accordion type="single" collapsible className="w-full">
              {items.map(({ id, name, content, className }) => (
                <AccordionItem key={id} value={`${name}`}>
                  <AccordionTrigger className={cn(className)}>
                    {name}
                  </AccordionTrigger>
                  {content.map(({ id, name, router }) => (
                    <AccordionContent key={id}>
                      <a className="hover:cursor-pointer" href={router}>
                        {name}
                      </a>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BurgerMenu;
