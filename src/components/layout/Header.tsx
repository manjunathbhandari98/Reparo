import { Bell, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import type { navs } from "../../types";
import ReparoLogo from "../logo/Logo";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const navOptions: navs[] = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Dashboard", link: "/dashboard" },
    { id: 3, name: "How it works", link: "/how-it-works" },
    { id: 4, name: "Support", link: "/support" },
  ];

  const toggleSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const toggleLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <div className="hidden sm:flex p-5 justify-between items-center mx-5 bg-white shadow relative">
      <ReparoLogo />
      <div className="flex gap-10 text-gray-700 font-semibold">
        {navOptions.map((item: navs) => (
          <Link
            to={item.link}
            key={item.id}
            className="hover:text-orange-500 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {!isLoggedIn ? (
        <div className="flex gap-4">
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
        </div>
      ) : (
        <>
          <div className="flex gap-7 items-center relative">
            {/* Bell with badge */}
            <div className="relative inline-block">
              <Bell
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="w-6 h-6 text-gray-700 hover:text-orange-500 cursor-pointer"
              />
              <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                2
              </div>

              {/* Dropdown Notifications */}
              {isNotificationOpen && (
                <div className="absolute -left-10 mt-3 w-92 bg-white shadow-lg rounded-xl border border-gray-200 z-50">
                  <div className="flex justify-between items-center px-4 py-2 m-3">
                    <h3 className="text-sm font-semibold text-gray-700">Notifications</h3>
                    <button
                      onClick={() => setIsNotificationOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <div className="p-3 flex flex-col gap-3 max-h-60 overflow-y-auto">
                    <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                      🚗 Mechanic <span className="font-semibold">Amit Sharma</span> is on the way!
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                      🛠️ Your last service has been marked{" "}
                      <span className="font-semibold text-green-600">Completed</span>.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                      💳 Payment of <span className="font-semibold">₹2300</span> was successful.
                    </div>
                  </div>
                  <p className="text-orange-500 text-sm font-medium cursor-pointer my-5 text-center">Mark all as Read</p>
                </div>
              )}
            </div>

            <div className="flex gap-2 items-center">
              <img src="/user.png" alt="" className="rounded-full w-7 h-7" />
              <h2 className="text-lg font-medium text-gray-600">Ravi Gupta</h2>
            </div>
            <button className="px-6 py-1.5 cursor-pointer rounded font-semibold">
              Logout
            </button>
          </div>
        </>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <Login onClose={() => setIsLoginModalOpen(false)} onSignup={toggleSignup} />
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <Signup onClose={() => setIsSignupModalOpen(false)} onLogin={toggleLogin} />
      )}
    </div>
  );
};

export default Header;
