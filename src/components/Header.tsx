
import { useSession, signIn, signOut} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";



type SideBar = {
    setcur: (val:boolean) => void
    cur: boolean
}

const Header = ({setcur,cur}: SideBar) => {
    const {data: session} = useSession();
return (
    <div className="w-full h-1/6 flex flex-row">
    <div>
    <Link href="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Image className="fill-current h-8 w-8 mr-2" src="/Logo.svg" alt="logo" width={50} height={50}/>
            <span className="font-semibold text-xl tracking-tight">The Wild File </span>    
        </div>
    </Link>
    {(session) ?
        <ul className="flex">
          <li>
              <Link href="/create" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <span className="ml-3"> Create Trip </span>
              </Link>
          </li>
          <li>
              <Link href="/Statistics" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <span className="ml-3">Your Trip Statistics </span>
              </Link>
          </li>
            <li>
                <Link className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                href={`/profile/${session.user?.id}`}>
                   
                        <div className="ml-3">Welcome {session.user?.name}</div>
                  
                </Link>
            </li>
        </ul>
    : <div>Loading...</div>}
    <button className= "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=> signOut()}>
        Sign out
    </button>
    </div>
    </div>
)

}

export default Header;
