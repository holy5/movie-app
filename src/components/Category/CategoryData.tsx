import React, { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";
import { apiMethod } from "../../api/apiConfig";
import { resizeImage } from "../../Helpers/misc";
import { CategoryItemType } from "../../types";
import MovieItem from "../Items/MovieItem";

interface CategoryDataProps {
  id: string;
  categoryType: string;
}

const CategoryData: FC<CategoryDataProps> = ({ id }) => {
  const getKey = (_: number, previousPageData: CategoryItemType[] | null) => {
    if (previousPageData && previousPageData.length === 0) return null;
    return `${id}-${previousPageData?.slice(-1)?.[0]?.sort || ""}`;
  };
  const {
    data: categoryData,
    error,
    setSize,
  } = useSWRInfinite(getKey, (lim) =>
    apiMethod.getCategoryItems(id, lim.split("-").slice(-1)[0])
  );

  return (
    <>
      {categoryData && (
        <InfiniteScroll
          dataLength={categoryData?.length || 0}
          next={() => setSize((size) => size + 1)}
          hasMore={!error && categoryData?.slice(-1)?.[0]?.length !== 0}
          loader={
            <div className="justify-center text-text">
              <h4 className="text-3xl font-bold">Loading...</h4>
            </div>
          }
          endMessage={
            <div className="py-5 text-3xl font-bold text-center text-text text-md">
              Nothing more to see
            </div>
          }
        >
          <div className="grid grid-cols-3 gap-2 mt-5 xl:grid-cols-8 xl:gap-x-6">
            {categoryData
              ?.reduce(
                (acc: CategoryItemType[], cur: CategoryItemType[]) => [
                  ...acc,
                  ...cur,
                ],
                []
              )
              .map((item: CategoryItemType) => {
                return (
                  <Link
                    to={
                      item.domainType === 0
                        ? `/movie/${item.id}`
                        : `/tv/${item.id}`
                    }
                    key={item.id}
                  >
                    <MovieItem
                      imgURL={resizeImage(item.coverVerticalUrl, "250")}
                      title={item.name}
                    />
                  </Link>
                );
              })}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default CategoryData;
