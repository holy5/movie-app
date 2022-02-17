import React, { FC, useEffect, useState } from "react";
import { SearchConfig } from "../../types";
import Error from "../UI/Error";
import ExploreData from "./ExploreData";

interface AllMoviesProps {
  error: any;
  data: SearchConfig[];
}

const AllMovies: FC<AllMoviesProps> = ({ error, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [configs, setConfigs] = useState(
    data[activeIndex].screeningItems.reduce((acc: any, current: any) => {
      acc[current.items[0].screeningType] = current.items[0].params;
      return acc;
    }, {})
  );

  const handleConfigChange = (name: string, value: string) => {
    const clone = JSON.parse(JSON.stringify(data[activeIndex]));
    clone[name] = value;
    setConfigs(clone);
  };

  return (
    <>
      {error && <Error />}
      {!data && <p>Loading...</p>}
      <div className="relative xl:px-8 ">
        <div className="flex flex-row mt-5 font-medium xl:mt-10 text-text xl:gap-x-4 gap-x-3">
          {data?.map((item, index) => {
            return (
              <div
                className={`${
                  activeIndex === index
                    ? "border-b-[3px] border-blue-500 text-blue-500"
                    : ""
                }  cursor-pointer`}
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row flex-wrap gap-3 mt-6 gap-x-3">
          {data[activeIndex]?.screeningItems.map((item, index) => {
            return (
              <select
                key={index}
                name="category"
                className="px-3 py-2 border-0 rounded-md outline-none bg-neutral-700 text-text"
                onChange={(e) =>
                  handleConfigChange(
                    item.items[0].screeningType,
                    e.target.value
                  )
                }
              >
                {item.items.map((select, index) => {
                  return (
                    <option
                      value={select.params}
                      key={index}
                      className="bg-slate-700 max-h-5"
                    >
                      {select.name}
                    </option>
                  );
                })}
              </select>
            );
          })}
        </div>
        <ExploreData
          params={data[activeIndex].params}
          configs={configs}
          index={activeIndex}
        />
      </div>
    </>
  );
};

export default AllMovies;
