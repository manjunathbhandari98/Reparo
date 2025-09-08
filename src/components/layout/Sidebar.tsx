import { Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import type { navs } from "../../types";
import ReparoLogo from "../logo/Logo";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const navigate = useNavigate();
   const navOptions: navs[] = [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "Dashboard", link: "/dashboard" },
      { id: 3, name: "How it works", link: "/how-it-works" },
      { id: 4, name: "Support", link: "/support" },
    ];

    const handleNavigation = (link:string) =>{
      navigate(link);
      setSidebarOpen(false);
    }

     const toggleSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const toggleLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };
  

  return (
    <>
      {/* Header with Logo + Menu/X */}
      <div className="sm:hidden p-4 flex justify-between items-center relative z-50 bg-white ">
        <ReparoLogo />
        <div className="flex gap-8">
          {isLoggedIn && (
              <div className="relative inline-block">
                <Link to={'/notifications'}>
              <Bell
                className="w-6 h-6 text-gray-700 hover:text-orange-500 cursor-pointer"
              />
              <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                2
              </div>
                </Link>

            
            </div>
          )}
{sidebarOpen ? (
          <X
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer"
            size={28}
          />
        ) : (
          <Menu
            onClick={() => setSidebarOpen(true)}
            className="cursor-pointer"
            size={28}
          />
        )}
        </div>
        
      </div>

      {/* Slide-down Panel (below header) */}
      <div
        className={`fixed top-[64px] left-0 w-full h-2/3 bg-white transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
         {navOptions.map((nav:navs) =>(
          <button key={nav.id} onClick={() => handleNavigation(nav.link)} className="font-medium text-lg text-start">{nav.name}</button>
         ))}
        </div>
        {!isLoggedIn ? (
        <div className="flex flex-col mx-10 gap-4">
          <button
            onClick={toggleLogin}
            className="text-gray-700 hover:text-orange-500 cursor-pointer px-6 py-1.5 rounded font-semibold"
          >
            Login
          </button>
          <button
            onClick={toggleSignup}
            className="bg-orange-500 hover:bg-orange-600 text-gray-100 px-6 py-1.5 cursor-pointer rounded font-semibold"
          >
            Sign up
          </button>
        </div>): (
          <div className="flex justify-between p-5">
              <div className="flex gap-2 items-center">
              <img src="/user.png" alt="" className="rounded-full w-7 h-7" />
              <h2 className="text-lg font-medium text-gray-600">Ravi Gupta</h2>
            </div>
            <button onClick={() => setIsLoggedIn(false)} className="px-6 py-1.5 text-red-600 cursor-pointer rounded font-semibold">
              Logout
            </button>
          </div>
        )}
      </div>
       {/* Login Modal */}
      {isLoginModalOpen && (
        <Login onClose={() => setIsLoginModalOpen(false)} onSignup={toggleSignup} />
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <Signup onClose={() => setIsSignupModalOpen(false)} onLogin={toggleLogin} />
      )}
    </>
  );
};

export default Sidebar;
