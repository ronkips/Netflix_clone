import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

// if (process.env.NODE_ENV === "development") = client;

export default client;
