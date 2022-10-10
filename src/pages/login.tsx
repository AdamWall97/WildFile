import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import Header from '../components/Header';
import { GetStaticProps } from 'next'


type Season = {

  color: string,
  pic:string,
  footer: Component
}

//Server Side Render
const Login: NextPage = () => {
  
  const router = useRouter();
  const [slider, setSlider] = useState(0);
  const seasonColors = ["text-green-400","text-yellow-300","text-orange-500","text-sky-300"];
  const seasonPics = ["text-green-400","text-yellow-300","text-orange-500","text-sky-300"];
  const seasonFooter = ["text-green-400","text-yellow-300","text-orange-500","text-sky-300"];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlider(slider + 1);
      if (slider > 2) {
        setSlider(0)
      }
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  
    
  }, [slider]);

  return (
    <>
      <Head>
        <title>Wild File</title>
        <meta name="description" content="Wild File App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4" >
        <h1 className={seasonColors[slider]}>
          Welcome to the Wild File -- the passion project to beat the wild
        </h1>
        
        <div>
          Spring Photo by <a href="https://unsplash.com/@magdaleny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Magdalena Smolnicka</a> on <a href="https://unsplash.com/s/photos/spring-forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
         Photo by <a href="https://unsplash.com/@pszajewski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Piotr Szajewski</a> on <a href="https://unsplash.com/s/photos/winter-forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

        Photo by <a href="https://unsplash.com/@jplenio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Johannes Plenio</a> on <a href="https://unsplash.com/s/photos/fall?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

        Photo by <a href="https://unsplash.com/@nanichkar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anastasiya Romanova</a> on <a href="https://unsplash.com/s/photos/summer-forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        <button 
        onClick={() => signIn("google",{
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
