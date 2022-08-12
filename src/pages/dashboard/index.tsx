import type { NextPage } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const Dashboard: NextPage = () => {

  return (
    <>
         <h1>
         Dashboard display
        </h1>
    </>
  );
};
export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}

export default Dashboard;
