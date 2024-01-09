import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req);
      const { movieId } = req.body;
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId
        }
      });

      if (!existingMovie) {
        throw new Error("Movie does not exist");
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
        throw new Error("Movie does not exist");
      }

      const updateFavouriteIds = without(currentUser.favouriteIds, movieId);

      const updateUser = await prismadb.user.update({
        where: {
          email: currentUser.email || ""
        },
        data: {
          favouriteIds: updateFavouriteIds
        }
      });
      return res.status(200).json(updateUser);
    }
    return res.status(405).end();
  } catch (error) {
    console.log({ error });
    return res.status(400).end();
  }
}
