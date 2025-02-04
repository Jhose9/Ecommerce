import { Heart, ShoppingCart, Store, UserRound } from "lucide-react";
import React from "react";
import { LucideIcon } from "lucide-react";
const Items = ({
  name,
  Icon,
  router,
}: {
  name: string;
  Icon: LucideIcon;
  router: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Icon />
      <p className="text-sm w-16 truncate text-center">{name}</p>
    </div>
  );
};
function BottomNavigationBar() {
  const items: {
    id: number;
    name: string;
    Icon: LucideIcon;
    router: string;
  }[] = [
    {
      id: 1,
      name: "tienda",
      Icon: Store,
      router: "/",
    },
    {
      id: 2,
      name: "Lista de deseos",
      Icon: Heart,
      router: "/",
    },
    {
      id: 3,
      name: "Carrito",
      Icon: ShoppingCart,
      router: "/",
    },
    {
      id: 4,
      name: "Mi cuenta",
      Icon: UserRound,
      router: "/",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full h-[2.9rem] bg-white flex items-center justify-center sm:gap-[6rem] gap-[5vw] py-7 lg:hidden">
      {items.map(({ id, name, Icon, router }) => (
        <Items key={id} Icon={Icon} name={name} router={router} />
      ))}
    </div>
  );
}

export default BottomNavigationBar;
