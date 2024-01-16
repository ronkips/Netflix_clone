import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/watch/${movieId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold  rounded-md flex flex-row items-center transition hover:bg-neutral-300 cursor-pointer"
    >
      <BsFillPlayFill className="text-black size={40} mr-1" /> Play
    </div>
  );
};
export default PlayButton;
