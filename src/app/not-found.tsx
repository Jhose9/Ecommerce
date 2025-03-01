import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center min-h-[30rem] gap-5">
      <div className="relative mt-7  w-full min-h-48 flex items-center justify-center">
        <h3 className="before:content-['404'] before:absolute before:text-[9rem] before:opacity-15 text-3xl font-bold">
          NO SE ENCUENTRA
        </h3>
      </div>
      <h1 className="font-semibold text-center px-3">
        This is somewhat embarrassing, isn’t it?
      </h1>
      <p className="text-center opacity-75 px-5 font-medium">
        Parece que nada se encuentra en esta ubicación. Tal vez intente una
        búsqueda?
      </p>
      <div className="w-[95%] md:w-1/2 lg:w-2/5 xl:w-[25%] flex items-center relative">
        <Input
          className=" rounded-2xl py-6 text-sm"
          placeholder="Search for posts"
        />
        <Search className="absolute transform right-4" />
      </div>
    </div>
  );
}
