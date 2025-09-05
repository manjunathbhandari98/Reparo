import type { navs } from "../../types";
import ReparoLogo from "../logo/Logo";

const Header = () =>{
    const navOptions: navs[] = [
        {id:1, name: 'Home', link:'/'},
        {id:2, name: 'Dashboard', link:'/'},
        {id:3, name: 'How it works', link:'/'},
        {id:4, name: 'Support', link:'/'},

    ]
    return(
        <div className="p-5 flex justify-between mx-5">
            <ReparoLogo/>
        <div className="flex gap-10  text-gray-700 font-semibold">
            {navOptions.map((item:navs) =>(
                <div key={item.id} className="hover:text-orange-500 cursor-pointer">{item.name}</div>
            ))}
        </div>
        <div className="flex gap-4">
            <button className="text-gray-700 hover:text-orange-500 cursor-pointer 
            px-6 py-1.5 rounded font-semibold">Login</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-gray-100 px-6 
            py-1.5 cursor-pointer rounded font-semibold">Sign up</button>
        </div>
        </div>
    )
}

export default Header;