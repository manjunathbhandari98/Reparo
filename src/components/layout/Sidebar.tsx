import { Menu, X } from "lucide-react";
import { useState } from "react";
import ReparoLogo from "../logo/Logo";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Header with Logo + Menu/X */}
      <div className="sm:hidden p-4 flex justify-between items-center relative z-50 bg-white ">
        <ReparoLogo />
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

      {/* Slide-down Panel (below header) */}
      <div
        className={`fixed top-[64px] left-0 w-full h-2/3 bg-white transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          <a href="/" className="text-lg font-medium hover:text-orange-600">
            Home
          </a>
          <a href="/services" className="text-lg font-medium hover:text-orange-600">
            Services
          </a>
          <a href="/about" className="text-lg font-medium hover:text-orange-600">
            About
          </a>
          <a href="/contact" className="text-lg font-medium hover:text-orange-600">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
