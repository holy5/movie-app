import React from "react";
import useQueryParams from "../hooks/useQueryParams";
import SearchData from "../components/Search/SearchData";
import Navbar from "../components/Landing/Navbar";

function Search() {
  const qp = useQueryParams();
  const q = qp.get("q");

  return (
    <div>
      <Navbar absolute={false} />
      <div className="px-8 py-8 text-text">
        <h1 className="text-2xl font-bold ">Search results for {q}</h1>
        {q && <SearchData keyword={q} />}
      </div>
    </div>
  );
}

export default Search;
