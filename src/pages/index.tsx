import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";
import useMoviesList from "@/hooks/useMovies";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { Layout } from "@/layout";
import useFavourites from "@/hooks/useFavourites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    };
  }
  return {
    props: {}
  };
}

export default function Home() {
  const { data: movies = [] } = useMoviesList();
  const { data: favourites = [] } = useFavourites();
  const { isOpen, closeModal } = useInfoModal();
  return (
    <div>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40 ">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favourites} />
      </div>
    </div>
  );
}
