import React from "react";
import { WrapText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function OrderSelect() {
  return (
    <div>
      <Select>
        <SelectTrigger className="[&_svg:last-child]:hidden lg:[&_svg:last-child]:block rounded-2xl lg:bg-white lg:py-5 lg:px-8 ">
          <WrapText className="lg:hidden" />
          <div className="hidden lg:block">
            <SelectValue placeholder="Orden Predeterminado" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Orden Predeterminado</SelectItem>
            <SelectItem value="apple">Ordenar por popularidad</SelectItem>
            <SelectItem value="banana">Ordenar por puntuación media</SelectItem>
            <SelectItem value="blueberry">Ordenar por los últimos</SelectItem>
            <SelectItem value="grapes">Ordenar por</SelectItem>
            <SelectItem value="pineapple">
              Ordenar por precio: Bajo a alto
            </SelectItem>
            <SelectItem value="pineapple">
              Ordenar por precio: alto a bajo
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default OrderSelect;
