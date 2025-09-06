import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import type { navs } from "../../types";
import ReparoLogo from "../logo/Logo";

const Header = () =>{
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

    const navOptions: navs[] = [
        {id:1, name: 'Home', link:'/'},
        {id:2, name: 'Dashboard', link:'/dashboard'},
        {id:3, name: 'How it works', link:'/how-it-works'},
        {id:4, name: 'Support', link:'/support'},

    ]

    const toggleSignup = () =>{
      setIsLoginOpen(false);
      setIsSignup(true);
    }

    const toggleLogin = () =>{
      setIsSignup(false);
      setIsLoginOpen(true);
    }

    return(
       <div className="hidden sm:flex p-5 justify-between items-center mx-5 bg-white shadow">
  <ReparoLogo />
  <div className="flex gap-10 text-gray-700 font-semibold">
    {navOptions.map((item: navs) => (
      <Link to={item.link} key={item.id} className="hover:text-orange-500 cursor-pointer">
        {item.name}
      </Link>
    ))}
  </div>
  <div className="flex gap-4">
    <button
    onClick={toggleLogin}
    className="text-gray-700 hover:text-orange-500 cursor-pointer 
      px-6 py-1.5 rounded font-semibold">Login</button>
    <button
    onClick={toggleSignup}
    className="bg-orange-500 hover:bg-orange-600 text-gray-100 px-6 
      py-1.5 cursor-pointer rounded font-semibold">Sign up</button>
  </div>

  {isLoginOpen && (
    <Login onClose={() => setIsLoginOpen(false)} onSignup={toggleSignup} />
  )}

  {isSignup && (
    <Signup onClose={() => setIsSignup(false)} onLogin={toggleLogin}/>
  )}

  </div>
    )
}

export default Header;