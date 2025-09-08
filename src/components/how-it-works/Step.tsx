// Step.tsx
import { CircleCheckBig, MapPin, Search, Wrench } from "lucide-react";
import type { ServiceStep } from "../../types";

interface StepProps {
  data: ServiceStep;
  index: number;
}

const iconMap: Record<number, React.ElementType> = {
  1: Search,
  2: MapPin,
  3: Wrench,
};

const Step = ({ data, index }: StepProps) => {
  // Check if step is even or odd
  const isEven = index % 2 !== 0;
 const Icon = iconMap[data.id];
  return (
    <div className="grid sm:grid-cols-2 gap-10 items-center p-10">
      {/* Content */}
      <div className={`flex flex-col gap-8 ${isEven ? "sm:order-2" : "sm:order-1"}`}>
        <div className="flex gap-3 items-center">
          <div className="rounded-full bg-orange-500 text-white font-bold text-3xl w-14 h-14 flex items-center justify-center">
            {data.id}
          </div>
          <h2 className="text-3xl text-black/90 font-bold">{data.title}</h2>
        </div>
        <p className="text-xl font-[400] text-gray-600">{data.description}</p>

        <div className="flex flex-col gap-4">
          {data.points.map((point, idx) => (
            <div key={idx} className="flex gap-3 items-center">
              <CircleCheckBig size={20} className="text-green-500" />
              <h4 className="text-gray-800">{point}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Placeholder for image/illustration */}
      <div className={`${isEven ? "sm:order-1" : "sm:order-2"} flex flex-col gap-10 justify-center bg-orange-200/60 rounded-xl p-5 h-full items-center`}>
        <Icon className='w-20 h-20 text-orange-500'/>
        <div className="bg-orange-50 w-[80%] text-center p-5 rounded-xl">
            <h2 className="text-lg font-medium">Step {data.id}</h2>
            <p className="text-gray-700">{data.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;
