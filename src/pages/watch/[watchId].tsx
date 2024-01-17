import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useMoviesList from "@/hooks/useMovies";

const Watch = () => {
  const router = useRouter();
  const { watchId } = router.query;
  const { data } = useMoviesList(watchId as string);
  return (
    <div className="h-screen w-screen bg-black ">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70 ">
        <AiOutlineArrowLeft className="text-white size={40}" />
      </nav>
    </div>
  );
};
export default Watch;
