import React from "react";
import { cn } from "@/lib/utils";
import { IiconNavLinks } from "@/types/navbarTypes";
function IconNavLinks({ Icons, name, router, size, className }: IiconNavLinks) {
  return (
    <div className="flex gap-2 hover:opacity-45 hover:cursor-pointer transition">
      <Icons size={size} />
      <p className={cn(className)}>{name}</p>
    </div>
  );
}

export default IconNavLinks;
