
import { useSession, signIn, signOut} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";


const SideBar = () => {
   

return (
    <div className="w-64">
   sidebar
   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul className="space-y-2">
        <li>
            <Link href="/create" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3"> Create Trip </span>
            </Link>
        </li>
        <li>
            <Link href="/create" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3">Trip Statistics </span>
            </Link>
        </li>
        <li>
            <Link href="/create" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3"> Setttings </span>
            </Link>
        </li>
        <li>
            <Link href="/create" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3"> Examples </span>
            </Link>
        </li>
   </ul>
</div>
</div>
)

}

export default SideBar;
