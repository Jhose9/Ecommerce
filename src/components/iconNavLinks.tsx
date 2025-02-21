import React from "react";
import { cn } from "@/lib/utils";
import { IiconNavLinks } from "@/types/navbarTypes";
function IconNavLinks({
  Icons,
  value,
  router,
  size,
  className,
}: IiconNavLinks) {
  return (
    <a
      href={router}
      className="flex gap-2 hover:opacity-45 hover:cursor-pointer transition"
    >
      <Icons size={size} />
      <p className={cn(className)}>{value}</p>
    </a>
  );
}

export default IconNavLinks;
