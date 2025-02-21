import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Slash } from "lucide-react";

function BreadcrumbComponent({
  className,
  title,
}: {
  className: string;
  title: string;
}) {
  return (
    <div className={cn("gap-5 items-center h-16", className)}>
      <h2 className="text-xl font-bold lg:text-2xl">{title}</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="md:text-lg lg:text-xl" href="/">
              Inicio
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="font-bold md:text-lg lg:text-xl"
              href={`/${title.toLowerCase()}`}
            >
              {title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbComponent;
