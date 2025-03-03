import React from "react";
import { Skeleton } from "./ui/skeleton";

function CollectionSkeleton() {
  return (
    <div className="xl:mt-[2rem] p-4 2xl:w-[85%] md:w-[90%] mx-auto">
      <div className="space-y-4 mb-6 md:flex md:items-end justify-between">
        <Skeleton className="h-8 w-56" />
        <Skeleton className="h-10 w-44 rounded-full" />
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:gap-6 ">
        <Skeleton className="h-52" />
        <Skeleton className="h-52" />
        <Skeleton className="h-52" />
        <Skeleton className="h-52" />
      </div>
    </div>
  );
}

export default CollectionSkeleton;
