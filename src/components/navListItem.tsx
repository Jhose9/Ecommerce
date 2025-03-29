import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { IMenuLink } from "@/types/navbarTypes";
import { Minus } from "lucide-react";

function NavListItem({ name, content, className }: IMenuLink) {
  return (
    <div className="relative">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={cn(className)}>
              {name}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute z-50">
              <div className="grid grid-rows-3 w-[14rem] p-5 gap-3">
                {content.map(({ id, name, router }) => (
                  <div
                    className="flex justify-between opacity-55 hover:opacity-100"
                    key={id}
                  >
                    <a
                      className="text-[0.9rem] hover:opacity-100"
                      href={router}
                    >
                      {name}
                    </a>
                    <Minus className="opacity-40" color="black" />
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavListItem;
