import * as Icons from "lucide-react";
import React from "react";
import { SupportOptions } from "../../data/supportOption";
import type { SupportOption } from "../../types";

const GetInTouch = () => {
  return (
    <div className="p-6 sm:p-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Need Help? We're Here for You
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {SupportOptions.map((option: SupportOption) => {
          const Icon = Icons[
            option.icon
          ] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

          const colorClasses: Record<
            SupportOption["colour"],
            string
          > = {
            green: "bg-green-100 text-green-600",
            blue: "bg-blue-100 text-blue-600",
            purple: "bg-purple-100 text-purple-600",
          };

          return (
            <div
              key={option.id}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${colorClasses[option.colour]}`}
              >
                <Icon className="w-8 h-8" />
              </div>

              <h2 className="text-xl font-semibold">{option.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{option.description}</p>
              <p className="mt-3 font-medium">{option.contact}</p>
              <div className="flex gap-2 items-center text-gray-500">
<Icons.Clock size={14}/>
              <p className=" text-sm">{option.availability}</p>
              </div>
              <button className="mt-4 px-4 py-2 border-0 outline-0 cursor-pointer bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                {option.cta}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetInTouch;
