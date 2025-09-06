import { CheckCircle, Shield, Zap } from "lucide-react";
import type { ReactElement } from "react";

const WhyChooseUs = () =>{

type reasons = {
    id: number,
    icon: ReactElement,
    title: string,
    desc: string
}

const reasonsToChoose: reasons[] = [
    {id:1, icon: <Shield/>, title:'Certified&Insured', desc:'All our mechanics are certified professionals with comprehensive insurance coverage for your peace of mind.'},
    {id:2, icon: <Zap/>, title:'Fast Response', desc:'Emergency? No problem. Our mechanics are available 24/7 with average response time of just 15 minutes.'},
    {id:3, icon: <CheckCircle/>, title:'Quality Guarantee', desc:'We stand behind our work with a comprehensive warranty on all repairs and genuine parts.'},
]

    return (
        <div className="px-6 py-8 text-center">
  {/* Heading */}
  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
    Why Choose <span className="text-orange-500">Reparo</span>
  </h2>
  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-medium">
    We're not just another repair service. We're your trusted partner on the road.
  </p>

  {/* Booking Steps */}
  <div className="mt-12 grid gap-12 sm:grid-cols-3 max-w-6xl mx-auto">
    {reasonsToChoose.map((reason:reasons) =>(
        <div
        key={reason.id}
        className="flex flex-col gap-0.5 items-start text-start p-6 rounded-2xl hover:shadow-xl transition duration-300 bg-white"
      >
        {/* Icon */}
        <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
          {reason.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>

        {/* Description */}
        <p className="mt-2 text-gray-600 text-base">{reason.desc}</p>
      </div>
    ))}
  </div>
  </div>
    )
}

export default WhyChooseUs;