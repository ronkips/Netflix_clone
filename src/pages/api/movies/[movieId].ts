import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

const isValidMovieId = (movieId: string): boolean => {
  // Implement your validation logic here
  // Return true if valid, false otherwise
  return typeof movieId === "string" && movieId.length > 0;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await serverAuth(req);

    const { movieId } = req.query;

    // Validate movieId
    if (typeof movieId !== "string" || !isValidMovieId(movieId)) {
      return res.status(404).json({ error: "Invalid movie id" });
    }

    const movies = await prismadb.movie.findUnique({
      where: {
        id: movieId
      }
    });

    if (!movies) {
      return res.status(404).json({ error: "Movie not found" });
    }

    return res.status(200).json(movies);
  } catch (error) {
    console.error({ error });
    return res.status(500).end();
  }
}
