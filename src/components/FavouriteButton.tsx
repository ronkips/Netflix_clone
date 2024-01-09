import axios from "axios";
import React, { useCallback, useMemo } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavourites from "@/hooks/useFavourites";
import { AiOutlinePlus } from "react-icons/ai";

interface FavouriteButtonProps {
  movieId: string;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ movieId }) => {
  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <AiOutlinePlus className="text-white size={30}" />
      {/* <button
        className="bg-white
        text-white
          bg-opacity-30 
          rounded-md 
          py-1 md:py-2 
          px-2 md:px-4
          w-auto 
          text-xs lg:text-lg 
          font-semibold
          flex
          flex-row
          items-center
          hover:bg-opacity-20
          transition"
      >
        <AiOutlinePlus />
        More Info
      </button> */}
    </div>
  );
};

export default FavouriteButton;
