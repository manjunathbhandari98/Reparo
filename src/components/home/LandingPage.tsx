import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-16 bg-white">
      
      {/* Left Section */}
      <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
        <h1 className="text-3xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 font-poppins">
          Book a Mechanic <br /> Anytime, Anywhere
        </h1>

        <p className="text-zinc-700 text-lg leading-relaxed">
          Get your vehicle fixed by <span className="font-semibold text-orange-600">certified mechanics</span> in minutes.  
          Emergency repairs, scheduled maintenance, and everything in between — we’ve got you covered.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start [&>*]:cursor-pointer">
          <div className="bg-orange-500 hover:bg-orange-700 flex gap-3 items-center justify-center transition-colors duration-300 rounded-xl
           font-semibold text-lg text-white px-6 py-3 shadow-md shadow-orange-200">
            <h2>Book Now</h2>
            <ArrowRight/>
          </div>
          <button className="border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-300 rounded-xl font-semibold text-lg px-6 py-3">
            Register as Mechanic
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="mt-10 lg:mt-0">
        <img
          src="/car-ill.jpg"
          alt="car illustration"
          className="w-80 lg:w-[420px]"
        />
      </div>
    </div>
  );
};

export default LandingPage;
