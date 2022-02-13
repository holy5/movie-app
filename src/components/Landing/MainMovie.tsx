import { FcCalendar } from "react-icons/fc";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Genre from "../Items/Genre";
import useSWR from "swr";
import { apiMethod } from "../../api/apiConfig";
import { resizeImage } from "../../Helpers/misc";

import { Link } from "react-router-dom";
import { mockData } from "../../store/index";
import Skeleton from "react-loading-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MainMovie() {
  const randomIndex = Math.floor(Math.random() * (mockData.length + 1));

  const { data: TvData } = useSWR("get-tv-details", () =>
    apiMethod.getTvDetails(mockData[randomIndex].id, 0)
  );
  const { data: MovieData } = useSWR("get-movie-details", () =>
    apiMethod.getMovieDetails(mockData[randomIndex].id)
  );

  const data = TvData || MovieData;

  return (
    <>
      {
        <div className="h-[100vh] relative mb-7 md:mb-12">
          <div className=" after:absolute after:inset-0 h-[100vh] after:shadow-vignette ">
            {data && (
              <LazyLoadImage
                // src={resizeImage(data?.data.coverHorizontalUrl, "200")}
                src={data?.data.coverHorizontalUrl}
                alt=""
                className="-z-[1] !w-full !h-full object-cover brightness-50"
                effect="blur"
                wrapperClassName="lazy-img-full"
              />
            )}
          </div>
          <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center px-4 mb-20 text-text gap-y-3 md:items-start md:gap-y-5 md:px-8 md:mb-16 lg:gap-y-3 lg:mb-10 xl:mb-20 xl:max-w-lg">
            {data?.data.name ? (
              <h1 className="text-5xl font-bold md:text-6xl xl:text-4xl lg:text-4xl">
                {data?.data.name}
              </h1>
            ) : (
              <Skeleton count={1} className="!w-[448px] !h-8 xl:max-w-lg" />
            )}
            <div className="flex flex-row flex-wrap gap-2 text-xl md:text-2xl xl:text-sm lg:text-base ">
              {!data && (
                <>
                  <Skeleton className="!w-20 !h-6" />
                  <Skeleton className="!w-20 !h-6" />
                  <Skeleton className="!w-20 !h-6" />
                  <Skeleton className="!w-20 !h-6" />
                  <Skeleton className="!w-20 !h-6" />
                </>
              )}

              {data?.data.tagList.map((item: any, index: number) => {
                return (
                  <Link key={index} to={`/category/${item.id}`}>
                    <Genre title={item.name} />
                  </Link>
                );
              })}
            </div>
            {data ? (
              <span className="flex items-center gap-x-3 md:gap-x-5">
                <span className="flex items-center px-2 rounded-lg gap-x-[2px] md:gap-x-2 bg-stone-600 md:px-3 md:py-1 lg:px-2 lg:py-0 lg:gap-x-0">
                  <span className="md:text-2xl lg:text-base">
                    {data?.data.score.toFixed(1)}
                  </span>
                  <AiFillStar className="text-xl text-yellow md:text-3xl lg:text-xl" />
                </span>
                <span className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-1">
                  <FcCalendar className="text-xl md:text-3xl lg:text-xl" />
                  <span className="md:text-2xl lg:text-base">
                    {data?.data.year}
                  </span>
                </span>
                <span className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-1">
                  <MdOutlineWatchLater className="text-xl md:text-3xl lg:text-xl" />
                  <span className="md:text-2xl lg:text-base">
                    {data?.data.episodeCount}
                  </span>
                </span>
              </span>
            ) : (
              <div className="flex items-center gap-x-3 md:gap-x-5">
                <Skeleton className="!w-16 !h-7" />
                <Skeleton className="!w-16 !h-7" />
                <Skeleton className="!w-16 !h-7" />
              </div>
            )}
            <div className="flex flex-col items-center justify-center gap-y-2 md:items-start md:gap-y-3 lg:gap-y-1">
              {data ? (
                <div className="md:text-xl md:max-w-lg md:text-justify lg:text-base text-ellipsis line-clamp-4">
                  {data?.data.introduction}
                </div>
              ) : (
                <Skeleton
                  className="!w-[448px] !lg:text-base !md:text-xl"
                  count={3}
                />
              )}
              <div className="flex flex-row w-full">
                {data ? (
                  <Link
                    to={`/tv/${data?.data.id}`}
                    className="px-3 py-2 mt-5 text-xl  md:px-7 md:py-4 text-[#161616] bg-blue-400 rounded-md md:text-2xl xl:px-4 xl:py-2 xl:text-base lg:px-5 lg:py-2 lg:text-lg flex-1 text-center font-bold"
                  >
                    Watch Now
                  </Link>
                ) : (
                  <Skeleton className="!w-[448px] !h-10" />
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default MainMovie;
