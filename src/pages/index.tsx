import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

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
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">Welcome to Next.js!</h1>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}
