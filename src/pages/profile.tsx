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
  return <h1 className="text-white text-4xl ">Profile</h1>;
};

export default Profile;
