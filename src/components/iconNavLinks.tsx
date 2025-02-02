import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
function IconNavLinks({
  Icons,
  name,
  router,
  size,
  className,
}: {
  Icons: LucideIcon;
  name: string;
  router: string;
  size: number;
  className?: string;
}) {
  return (
    <div className="flex gap-2 hover:opacity-45 hover:cursor-pointer transition">
      <Icons size={size} />
      <p className={cn(className)}>{name}</p>
    </div>
  );
}

export default IconNavLinks;
