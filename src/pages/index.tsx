import type { GetServerSideProps, GetServerSidePropsContext, InferGetStaticPropsType, NextPage } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from '../components/Header';
import { GetStaticProps } from 'next'
import { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth/next"
import {authOptions} from './api/auth/[...nextauth]';
import SideBar from "../components/SideBar";
import { trpc } from "../utils/trpc";


//Auth
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext)  => {
  //return user info
  const session = await unstable_getServerSession(context.req,context.res,authOptions);
 
  if (!session) {
    return {
      redirect: {
        destination:"/login",
        permanent: false
      },
    }
  }
  return {props: {session}}
}

const Home: NextPage = () => {

  const [showSide, setshowSide] = useState(true);
  const {data: session, status} = useSession();
  if (session) {
    const Trips = trpc.useQuery(["user.getTrips", session.user?.id]);
  

    return (
      <>
           <Header cur={showSide} setcur={setshowSide}/>
           {(showSide) ? 
           <SideBar /> : 
           null
           }


      </>
    );
  }
return (
  <>
  loading...
  </>
)
};


export default Home;
