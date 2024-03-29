import { MovieInterface } from "@/types";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/router";

interface MovieCardProps {
  data: Record<string, any>;
}
const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt="thumbnail"
        draggable={false}
        className="rounded-md object-cover cursor-pointer transition duration delay-300  group-hover:opacity-90 sm:group-hover:opacity-0 shadow-xl w-full h-[12vw]"
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          src={data.thumbnailUrl}
          alt="tumbnail"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 "
              onClick={() => router.push(`/watch/${data.id}`)}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavouriteButton movieId={data?.id} />
            <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              {FiChevronDown}
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2024</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
