import useMoviesList from "@/hooks/useMovies";
import { MovieInterface } from "@/types";
import Image from "next/image";
import React from "react";

interface MovieCardProps {
  data: MovieInterface[];
}
const MovieCard: React.FC<MovieCardProps> = ({data}) => {

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      {/* <Image
        src={data?.thumbnailUrl}
        alt="Movies"
        draggable={false}
        width={150}
        height={100}
      /> */}
      <p>hello</p>
    </div>
  );
};

export default MovieCard;
