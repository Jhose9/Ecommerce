import React from "react";
import { Skeleton } from "./ui/skeleton";

function ProductSkeleton() {
  return (
    <div>
      <div className="lg:grid-cols-2 lg:grid lg:items-center mt-9">
        <Skeleton className="w-[90%] h-[27rem] mx-auto md:h-[45rem] md:w-[90%] 2xl:w-[80%] 2xl:ml-36" />
        <Skeleton className="w-[90%] md:w-[95%] lg:h-[45rem] mx-auto my-7 xl:w-[80%] xl:mx-0 2xl:w-[70%] h-[35rem] " />
      </div>
      <Skeleton className="w-[90%] mx-auto md:w-[95%] h-[39rem] mb-4" />
    </div>
  );
}

export default ProductSkeleton;
