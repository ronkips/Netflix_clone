import axios from "axios";
import React, { useCallback, useMemo } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavourites from "@/hooks/useFavourites";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

interface FavouriteButtonProps {
  movieId: string;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavourites } = useFavourites();
  const { data: currentUser, mutate } = useCurrentUser();

  // checking if a movie is already in the user's favourites
  const isFavourite = useMemo(() => {
    const list = currentUser?.favouriteIds || [];
    return list.includes(movieId);
  }, [currentUser, movieId]);

  const togglefavourites = useCallback(async () => {
    let response;
    if (isFavourite) {
      // remove from favourites
      response = await axios.delete("/api/favourite", { data: { movieId } });
    } else {
      // add to favourites
      response = await axios.post("/api/favourite", { movieId });
    }
    const updatedFavouriteIds = response?.data?.favouriteIds;
    mutate({
      ...currentUser,
      favouriteIds: updatedFavouriteIds
    });
    mutateFavourites();
  }, [currentUser, isFavourite, movieId, mutate, mutateFavourites]);

  const Icon = isFavourite ? AiOutlineCheck : AiOutlinePlus;
  return (
    <div
      onClick={togglefavourites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white size={30}" />
    </div>
  );
};

export default FavouriteButton;
