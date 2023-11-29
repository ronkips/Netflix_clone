import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

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
  return (
    <div className="flex items-center h-full justify-center ">
      <div className="flex flex-col">
        <h1 className="text-white text-3xl md:text-6xl text-center ">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10 ">
          <div onClick={() => {}}></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
