import React from "react";
import { Skeleton } from "./ui/skeleton";

function StoreSkeleton() {
  return (
    <div className="px-4 mt-4">
      <Skeleton className="w-48 h-8" />
      <div className="mt-5 grid grid-cols-2 gap-3 mb-16 md:grid-cols-3 lg:grid-cols-4 ">
        <Skeleton className="h-56" />
        <Skeleton className="h-56" />

        <Skeleton className="h-56" />
        <Skeleton className="h-56" />

        <Skeleton className="h-56" />
        <Skeleton className="h-56" />
      </div>
    </div>
  );
}

export default StoreSkeleton;
