import useBillboard from "@/hooks/useBillboard";
import React from "react";

const Billboard = () => {
  const { data } = useBillboard();
  return (
    <div className=" relative h-[33.25vw]">
      <video
        className="w-full h-[33.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 ">
        <p className="text-white text-xl first-letter md:text-5xl h-full w-[90] lg:text-5xl font-bold">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[60%] drop-shadow-2xl">
          {data?.description}
              </p>
              <p className=""></p>
      </div>
    </div>
  );
};

export default Billboard;
