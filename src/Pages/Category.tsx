import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { searchConfig } from "../api/apiConfig";

const Category = () => {
  const { id } = useParams() as { id: string };

  const { data, error } = useSWR(`search-config`, () => searchConfig());
  return <div>Category</div>;
};

export default Category;
