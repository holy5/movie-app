import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { searchConfig } from "../api/apiConfig";
import MovieItem from "../components/Items/MovieItem";
import Navbar from "../components/Landing/Navbar";

const Category = () => {
  const { id } = useParams() as { id: string };

  const { data, error } = useSWR(`search-config`, () => searchConfig());
  console.log(data);
  return (
    <>
      <Navbar absolute={false} />
      <div className="px-8 py-8 text-text">
        <h1 className="text-2xl font-bold">
          Category: Search results for Haiten
        </h1>
        <div className="grid grid-cols-8 mt-5 gap-x-6"></div>
      </div>
    </>
  );
};

export default Category;
