import React from "react";

function Summary() {
  return (
    <div className="flex flex-col px-3 py-5 text-text gap-y-3 md:px-8 md:py-10 md:gap-y-6 lg:px-8 lg:py-12">
      <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Summaries</h1>
      <p className="font-medium text-justify md:text-2xl ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
        blanditiis iste maiores explicabo mollitia, debitis, quae minus error
        eius porro assumenda, doloribus veniam! Porro aliquid harum corrupti
        temporibus architecto eum.
      </p>
      <div className="flex flex-col md:gap-y-2">
        <h2 className="font-medium md:text-xl">
          Director: <span className="font-normal"> AHHLKFALFJL</span>
        </h2>
        <p className="font-medium md:text-xl">
          Stars:{" "}
          <span className="font-normal">
            lakdjlfja jdlaj;df kfjdalkjfldas lkdfajlksj fjlkdsaj
          </span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
