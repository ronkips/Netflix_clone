import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

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

const Profile = () => {
  const { data: user } = useCurrentUser();
  const route = useRouter();

  return (
    <div className=" relative flex items-center h-full justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-3xl md:text-6xl text-center">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => {route.push("/")}}>
            <div className="group flex-row w-84 mx-auto">
              <div className="w-auto h-100 rounded-e-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <Image
                  src="/imgs/user.png"
                  alt="profile"
                  width={84}
                  height={84}
                />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
