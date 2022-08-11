import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";


type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
 
  const { data: session, status} = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push('dashboard')
  }
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
        <button onClick={() => signIn()}>
          Sign in
        </button>
      </main>
    </>
  );
};

export default Home;
