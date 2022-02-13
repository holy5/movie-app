import React, { FC } from "react";
import MovieItem from "../Items/MovieItem";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";
import { apiMethod } from "../../api/apiConfig";
import Error from "../UI/Error";
import { Link } from "react-router-dom";
import { resizeImage } from "../../Helpers/misc";

interface props {
  params: string;
  configs: {
    [key: string]: any;
  };
  index: number;
}

const ExploreData: FC<props> = ({ params, configs, index }) => {
  const getKey = (_: any, previousPageData: any) => {
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

  console.log(data);
  if (error) return <Error />;

  // console.log({ id: data.id, category: data.category });

  return (
    <InfiniteScroll
      dataLength={data?.length || 0}
      next={() => setSize((size) => size + 1)}
      hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
      loader={<h4>Loading...</h4>}
      endMessage={
        <div className="py-5 text-3xl font-bold text-center text-text text-md">
          Nothing more to see
        </div>
      }
    >
      <div className="grid grid-cols-8 mt-5 gap-x-6">
        {data
          ?.reduce((acc, cur) => [...acc, ...cur], [])
          .map((item: any) => {
            return (
              <Link
                to={
                  item.domainType === 0 ? `/movie/${item.id}` : `/tv/${item.id}`
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
  );
};

export default ExploreData;
