import { Dot, MapPin, MessagesSquare, Phone, Send, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const ActiveBooking = () => {
  return (
    <div className="p-6 my-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-md grid sm:grid-cols-2 gap-6">
      {/* Mechanic and Service Info */}
      <div className="flex flex-col gap-5">
        {/* Profile and Info */}
        <div className="flex items-center gap-4">
          <div className="bg-orange-500 rounded-full p-3 shadow">
            <img src="/mechanic.png" alt="Mechanic" className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900">Karan Shetty</h3>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <span>Engine Specialist</span>
              <Dot className="w-4 h-4 text-gray-400" />
              <Link to={'/'} className="text-orange-400 font-medium">Rockstar Guaraj</Link>
            </div>
          </div>
        </div>

        {/* Arrival Info */}
        <div className="flex flex-col gap-2 text-gray-800 text-sm font-medium">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-orange-600" />
            <span>Arriving in 8 Minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench size={18} className="text-orange-600" />
            <span>Oil Change and Inspection</span>
          </div>
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
            Mechanic En Route
          </span>
        </div>

        {[
          { icon: Phone, label: "Call Mechanic",link:'/' },
          { icon: MessagesSquare, label: "Chat",link:'/' },
          { icon: Send, label: "Track Location",link:'/' },
        ].map(({ icon: Icon, label,link }, i) => (
          <Link
          to={link}
            key={i}
            className="bg-white hover:bg-orange-50 p-3 w-full rounded-xl flex items-center justify-center gap-2 text-gray-800 font-medium shadow-sm transition"
          >
            <Icon size={18} className="text-orange-600" />
            <span className="text-sm">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ActiveBooking;
