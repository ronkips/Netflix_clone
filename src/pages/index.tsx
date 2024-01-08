import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";
import useMoviesList from "@/hooks/useMovies";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { Layout } from "@/layout";

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
  console.log("movies**", movies);
  return (
    <Layout
      title="Netflix clone"
      description="This is an awesome Netflix clone built with Next.js and Tailwind CSS."
      navbar={<Navbar />}
    >
      <Billboard />
      <div className="pb-40 ">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </Layout>
  );
}
