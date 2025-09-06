import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ReparoLogo from "../logo/Logo";

const Footer = () => {
  type options = {
    name: string;
    link: string;
  };

  const services: options[] = [
    { name: "Emergency Repairs", link: "/emergency" },
    { name: "Scheduled Maintenance", link: "/emergency" },
    { name: "Tire Service", link: "/emergency" },
    { name: "Battery Replacement", link: "/emergency" },
    { name: "Oil Change", link: "/emergency" },
  ];

  const support: options[] = [
    { name: "Help Center", link: "/emergency" },
    { name: "Contact Us", link: "/emergency" },
    { name: "Terms of Service", link: "/emergency" },
    { name: "Privacy Policy", link: "/emergency" },
    { name: "Join as Mechanic", link: "/emergency" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 relative">
      {/* Top border glow */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" /> */}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* About */}
        <div className="flex flex-col gap-4">
          <ReparoLogo colour={"white"} />
          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted partner for on-demand vehicle repair services. Quality
            mechanics, anytime, anywhere.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Services</h2>
          <div className="flex flex-col gap-2">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="text-sm hover:text-orange-400 transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Support</h2>
          <div className="flex flex-col gap-2">
            {support.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="text-sm hover:text-orange-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Contact</h2>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-orange-400" />
              <p>1-800-REPARO</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-orange-400" />
              <p>support@reparo.com</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-400" />
              <p>Available Nationwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-100">
        © {new Date().getFullYear()} Reparo. All rights reserved. Your trusted vehicle repair partner.
      </div>
    </footer>
  );
};

export default Footer;
