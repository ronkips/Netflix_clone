import { MovieInterface } from "@/types";
import React from "react";

interface MovieCardProps {
  data: Record<string, any>;
}
const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt="thumbnail"
        draggable={false}
        className="rounded-md object-cover cursor-pointer transition duration-200 ease-in-out transform group-hover:opacity-90 sm:group-hover:opacity-0 shadow-xl w-full h-[12vw]"
      />
    </div>
  );
};

export default MovieCard;
