
import { useSession, signIn, signOut} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";



type SideBar = {
    setcur: (val:boolean) => void
    cur: boolean
}

const Header = ({setcur,cur}: SideBar) => {
    const {data: session, status} = useSession();

return (
    <div className="w-full h-1/6 flex flex-row">
    <button onClick={() => setcur(!cur)}>
    Show Sidebar
    </button>
    <Link href="/">
        <>
            <Image src="/Logo.svg" alt="logo" width={50} height={50}/>
            <h1>The Wild File </h1>    
        </>
    </Link>
    {(session) ?
        <Link href={`/profile/${session.user?.id}`}>
            <>
                <div>Welcome {session.user?.name}</div>
                <Image src={session.user?.image} alt="Picture of user" width={50} height={50}/>
            </>
        </Link>
    : 
        <div>Loading...</div>}
   
    <button onClick={()=> signOut()}>
        Log out
    </button>
    </div>
)

}

export default Header;
