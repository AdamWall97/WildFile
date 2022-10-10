
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
    <div>
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
            </>
        </Link>
    : 
        <div>Loading...</div>}
   
    <button className= "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=> signOut()}>
        Sign out
    </button>
    </div>
    <button onClick={() => setcur(!cur)}>
    Show Sidebar
    </button>

    </div>
)

}

export default Header;
