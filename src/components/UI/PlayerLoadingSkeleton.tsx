import React from "react";
import Skeleton from "react-loading-skeleton";
import VerticalLoadingSkeleton from "./VerticalLoadingSkeleton";

const PlayerLoadingSkeleton = () => {
  return (
    <div className="min-h-[100vh] xl:px-16 xl:py-12">
      <div className="flex gap-x-5">
        <div className="flex flex-col items-start gap-y-3">
          <Skeleton className="!relative !w-[70vw] !h-0 !pb-[56.25%]" />
          <Skeleton className="!mt-3 !w-[500px] !h-[35px]" count={1} />
          <div className="flex flex-row flex-wrap gap-3">
            <Skeleton className="!h-[25px] !w-[100px]" />
            <Skeleton className="!h-[25px] !w-[100px]" />
            <Skeleton className="!h-[25px] !w-[100px]" />
          </div>
          <div className="flex flex-col gap-y-2">
            <Skeleton className="!w-[100px] !h-[25px]" />
            <Skeleton count={3} className="!h-[25px] !w-[800px]" />
          </div>
        </div>
        <div className=" flex flex-col w-full text-text h-[600px] overflow-auto ">
          <Skeleton className="!h-[25px] !w-[100px]" />
          <div className="flex flex-col mt-3 gap-y-2">
            <VerticalLoadingSkeleton />
            <VerticalLoadingSkeleton />
            <VerticalLoadingSkeleton />
            <VerticalLoadingSkeleton />
            <VerticalLoadingSkeleton />
            <VerticalLoadingSkeleton />
            <VerticalLoadingSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerLoadingSkeleton;
