import { Menu, Search } from "lucide-react";
import React from "react";
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

import { Input } from "@/components/ui/input";
import { IMenuLink } from "./navbar";
import { cn } from "@/lib/utils";
function BurgerMenu({ items }: { items: IMenuLink[] }) {
  const SIDES = "left";
  return (
    <div>
      <Sheet key={SIDES}>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent className="p-0 py-10 px-3" side={SIDES}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex gap-3 items-center p-0">
            <Input className="" placeholder="Buscar productos" />
            <Search size={30} />
          </div>
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
