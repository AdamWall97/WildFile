import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import Header from '../components/Header';
import { GetStaticProps } from 'next'




type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};
//Server Side Render
const Login: NextPage = () => {
 
 
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Wild File</title>
        <meta name="description" content="Wild File App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1>
          Welcome to the Wild File -- the management system for tool to enjoy the wild
        </h1>
        <button onClick={() => signIn("google",{
        callbackUrl: `${window.location.origin}/`})}>
          Sign in with Google
        </button>
      </main>
    </>
  );
};
//go to dashboard if logged in
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext)  => {
  //return user info
  const session = await getSession(context);

  if (!session) {
    return {
      props:{}
    }
  }
  return {
    redirect: {destination:"/",permanent: false},
  };
}



export default Login;
