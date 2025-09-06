import { ArrowRight, Phone } from "lucide-react";

const EmergencyBreakdown = () => {
  return (
    <div className="mt-4 sm:mt-16 px-8 py-14 rounded-3xl text-white bg-orange-500 mx-auto max-w-5xl 
      relative flex flex-col gap-6 items-center">
      
        
        {/* Icon */}
          <Phone size={48} />

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-sm text-center">
          Emergency Breakdown?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl max-w-2xl text-center font-medium text-white/90">
          Don’t panic! Our emergency response team is available <span className="font-bold">24/7</span>.  
          Get help in <span className="underline">minutes</span>, not hours.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-6 justify-center">
          {/* CTA Button */}
          <button className="bg-white/90 text-rose-600 px-6 py-3 rounded-xl font-semibold text-lg 
            flex items-center gap-2 shadow-md hover:bg-white cursor-pointer">
            Emergency Help Now
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Call Button */}
          <button className="border border-white px-6 py-3 rounded-xl font-semibold text-lg 
            flex items-center gap-2 text-white/90 hover:bg-white hover:text-red-500 transition cursor-pointer">
            <Phone className="w-5 h-5" />
            CALL 180-REPARO
          </button>
        </div>
      </div>
  );
};

export default EmergencyBreakdown;
