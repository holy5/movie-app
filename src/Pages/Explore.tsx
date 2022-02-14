import React, { useEffect, useState } from "react";
import { FC } from "react";
import useSWR from "swr";
import { searchConfig } from "../api/apiConfig";
import AllMovies from "../components/Explore/AllMovies";
import Navbar from "../components/Landing/Navbar";

const Explore: FC = () => {
  const { data, error } = useSWR("search-config", () => searchConfig());

  return (
    <div>
      <Navbar absolute={false} />
      {data && <AllMovies data={data} error={error} />}
    </div>
  );
};

export default Explore;
