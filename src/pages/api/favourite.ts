import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { currentUser } = await serverAuth(req);
    if (req.method === "POST") {
      const { movieId } = req.body;
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId
        }
      });

      if (!existingMovie) {
        throw new Error("Invalid movie id");
      }

      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || ""
        },
        data: {
          favouriteIds: {
            push: movieId
          }
        }
      });
      return res.status(200).json(user);
    }

    //   deleting

    if (req.method === "DELETE") {
      const { currentUser } = await serverAuth(req);
      const { movieId } = req.body;
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId
        }
      });

      if (!existingMovie) {
        throw new Error("Ivalid movie id");
      }

      const updateFavouriteIds = without(currentUser.favouriteIds, movieId);

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || ""
        },
        data: {
          favouriteIds: updateFavouriteIds
        }
      });
      return res.status(200).json(updatedUser);
    }
    return res.status(405).end();
  } catch (error) {
    console.log("noma , hapa hautoboi", error);
    return res.status(400).end();
  }
}
