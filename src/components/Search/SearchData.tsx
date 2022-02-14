import React, { FC } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { apiMethod } from "../../api/apiConfig";
import { resizeImage } from "../../Helpers/misc";
import MovieItem from "../Items/MovieItem";

interface SearchDataProps {
  keyword: string;
}

const SearchData: FC<SearchDataProps> = ({ keyword }) => {
  const { data, error } = useSWR(`search-for-${keyword}`, () =>
    apiMethod.searchWithKeyword(keyword)
  );

  if (data && data.length === 0)
    return (
      <div className="flex items-center justify-center w-full mt-10">
        <h1 className="text-3xl font-bold">No result found</h1>
      </div>
    );
  return (
    <div className="grid grid-cols-8 mt-5 gap-x-6">
      {data?.map((item: any, index: number) => {
        return (
          <Link
            to={item.domainType === 0 ? `/movie/${item.id}` : `/tv/${item.id}`}
            key={index}
          >
            <MovieItem
              imgURL={resizeImage(item.coverVerticalUrl, "250")}
              title={item.name}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchData;
