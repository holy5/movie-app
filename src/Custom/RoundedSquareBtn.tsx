import React from "react";
import { BtnProps } from "../types";

function RoundedSquareBtn(BtnProps: BtnProps) {
  const { hasBorder, btnContent, backgroundColor } = BtnProps;
  return (
    <button
      className={`flex-1 px-3 py-2 font-semibold ${backgroundColor} rounded-md md:py-3 ${
        hasBorder ? "border-2 rounded-md border-text md:border-[3px]" : ""
      }`}
    >
      {btnContent}
    </button>
  );
}

export default RoundedSquareBtn;
