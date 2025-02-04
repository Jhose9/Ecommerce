import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { IMenuLink } from "@/types/navbarTypes";

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
              <div className="grid grid-rows-3 w-[250px] p-5">
                {content.map(({ id, name, router }) => (
                  <a
                    key={id}
                    className="text-sm opacity-55 hover:opacity-100"
                    href={router}
                  >
                    {name}
                  </a>
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
