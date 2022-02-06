import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CustomCircularProgressBar } from "../../Custom/CustomCircularProgressBar";
import Feature from "./Feature";
import Summary from "./Summary";
import { BiArrowBack, BiSearch } from "react-icons/bi";
import Footer from "../Landing/Footer";
import Genre from "../../Items/Genre";
import Navbar from "../Landing/Navbar";
import RoundedSquareBtn from "../../Custom/RoundedSquareBtn";

function MainDetails() {
  return (
    <div className="h-[100vh]">
      <div className="relative h-[50%] lg:h-[80%] xl:h-full">
        <img
          src="https://i.pinimg.com/originals/8d/40/bb/8d40bb2805669085a7ac3c43f4f81766.jpg"
          alt=""
          className="object-cover h-full brightness-50 xl:w-full "
        />
        <div className="absolute inset-0 backdrop-blur-md xl:backdrop-blur-sm "></div>
        <Navbar />
        <div className="absolute top-0 left-0 flex justify-between w-full px-4 py-5 text-3xl text-text md:px-8 md:py-10 md:text-4xl lg:px-12 xl:hidden">
          <BiArrowBack />
          <BiSearch />
        </div>
        <div className="absolute bottom-0 left-0 px-3 text-text md:px-8 lg:px-8 lg:w-full">
          <div className="flex gap-x-3 md:gap-x-8">
            <img
              src="https://wallpaperaccess.com/full/1914240.jpg"
              alt=""
              className="rounded-lg w-36 aspect-[10/16] md:w-60 lg:w-64"
            />
            <div className="flex flex-col justify-between">
              <h1 className="text-2xl font-bold md:text-4xl xl:text-3xl">
                Rikka is love, Rikka is life
              </h1>
              <div className="text-lg font-medium text-slate-400 md:text-3xl xl:text-lg">
                2020
              </div>
              <div className="flex gap-x-2 md:text-2xl md:gap-x-5 xl:text-lg">
                <Genre />
                <Genre />
              </div>
              <div className="flex items-center">
                <MdOutlineWatchLater className="text-lg md:text-2xl xl:text-xl" />
                <p className="inline-block px-1 font-medium rounded-md md:text-2xl xl:text-xl">
                  1h42m
                </p>
              </div>
              <Feature desktopHidden={false} />
              <div className="font-medium md:text-3xl xl:text-2xl">
                User Score
              </div>
              <div className="w-12 h-12 md:w-24 md:h-24">
                <CircularProgressbar
                  value={69}
                  text="69%"
                  styles={CustomCircularProgressBar}
                  strokeWidth={11}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between my-5 text-lg gap-x-3 md:gap-x-6 md:text-3xl lg:my-8">
            <RoundedSquareBtn hasBorder={true} btnContent="Watch Trailer" />
            <RoundedSquareBtn
              hasBorder={false}
              btnContent="Watch Now"
              backgroundColor="bg-blue-400"
            />
          </div>
        </div>
      </div>
      <Feature desktopHidden={true} />
      <Summary />
      <Footer />
    </div>
  );
}

export default MainDetails;
