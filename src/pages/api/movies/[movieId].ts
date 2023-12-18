import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }
    await serverAuth(req);

    const movieId = req.query;

    if (typeof movieId !== "string") {
      throw new Error("Invalid movieId");
    }
    if (!movieId) {
      throw new Error("Missing Id");
    }
    const movies = await prismadb.movie.findMany({
      where: {
        id: movieId
      }
    });

    return res.status(200).json(movies);
  } catch (error) {
    console.log({ error });
    return res.status(500).end();
  }
}
