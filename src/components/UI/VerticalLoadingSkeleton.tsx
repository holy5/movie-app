import React from "react";
import Skeleton from "react-loading-skeleton";

const VerticalLoadingSkeleton = () => {
  return (
    <div className="flex gap-x-2">
      <Skeleton className="!w-[70px] !aspect-[10/16] " />
      <div className="flex flex-col gap-y-2">
        <Skeleton className="!w-[180px] !h-[30px]" />
        <Skeleton className="!w-[80px] !h-[20px]" />
        <Skeleton className="!w-[80px] !h-[20px]" />
      </div>
    </div>
  );
};

export default VerticalLoadingSkeleton;
