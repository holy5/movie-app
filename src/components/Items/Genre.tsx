import React from "react";
interface props {
  title: String;
}

function Genre(props: props) {
  const { title } = props;
  return (
    <div className="px-2 font-bold text-base border-[3px] border-red-500 rounded-md  md:py-1 xl:px-2 lg:py-0 xl:border-2 ">
      {title}
    </div>
  );
}

export default Genre;
