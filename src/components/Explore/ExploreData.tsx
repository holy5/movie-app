import React, { FC } from "react";
import MovieItem from "../Items/MovieItem";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";
import { apiMethod } from "../../api/apiConfig";
import Error from "../UI/Error";
import { Link } from "react-router-dom";
import { resizeImage } from "../../Helpers/misc";
import { CategoryItemType } from "../../types";

interface props {
  params: string;
  configs: {
    [key: string]: any;
  };
  index: number;
}

const ExploreData: FC<props> = ({ params, configs, index }) => {
  const getKey = (_: number, previousPageData: CategoryItemType[] | null) => {
    if (previousPageData && previousPageData.length === 0) return null;

    return `explore-${index}-${JSON.stringify(configs)}-${
      previousPageData?.slice(-1)?.[0]?.sort || ""
    }`;
  };

  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key) =>
      apiMethod.advancedSearch(params, configs, key.split("-").slice(-1)[0]),
    { revalidateFirstPage: false }
  );

  if (error) return <Error />;

  return (
    <InfiniteScroll
      dataLength={data?.length || 0}
      next={() => setSize((size) => size + 1)}
      hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
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
      <div className="grid grid-cols-3 gap-3 mt-5 xl:grid-cols-8 xl:gap-x-6">
        {data
          ?.reduce((acc, cur) => [...acc, ...cur], [])
          .map((item: CategoryItemType) => {
            return (
              <Link
                to={
                  item.domainType === 0 ? `/movie/${item.id}` : `/tv/${item.id}`
                }
                key={item.id}
              >
                <MovieItem
                  imgURL={resizeImage(item.coverVerticalUrl, "200")}
                  title={item.name}
                />
              </Link>
            );
          })}
      </div>
    </InfiniteScroll>
  );
};

export default ExploreData;
