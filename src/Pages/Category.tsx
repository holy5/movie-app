import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import { searchConfig } from "../api/apiConfig";
import CategoryData from "../components/Category/CategoryData";
import Navbar from "../components/Landing/Navbar";
import Error from "../components/UI/Error";

const Category = () => {
  const { id } = useParams() as { id: string };
  const { data, error } = useSWR(`search-config`, () => searchConfig());

  let categoryType;

  if (data) {
    categoryType = data[0].screeningItems
      .find((item) => item.name === "All Categories")
      ?.items.find((item) => item.params === id);
  }

  if (error) return <Error />;

  return (
    <>
      <Navbar absolute={false} />
      <div className="px-8 py-8 text-text">
        {categoryType && (
          <h1 className="text-2xl font-bold">
            Category: Search results for {categoryType.name}
          </h1>
        )}
        {categoryType && (
          <CategoryData id={id} categoryType={categoryType.name} />
        )}
      </div>
    </>
  );
};

export default Category;
