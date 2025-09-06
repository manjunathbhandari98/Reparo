import { Car, Clock, MapPin, Search, Users, Wrench } from "lucide-react"
import type { ReactElement } from "react"

const HowItWorks = () =>{

     type steps = {
        icon: ReactElement,
        id: number,
        title:string,
        desc: string
    }

    const reparoSteps:steps[] = [
     {id:1, icon:<Search className="text-orange-500" size={34}/> , title: 'Book', desc: "Tell us what's wrong with your vehicle and your location. We'll match you with the best mechanics nearby."},
     {id:2, icon:<MapPin className="text-orange-500" size={34}/> , title: 'Track', desc: "Watch your mechanic's arrival in real-time. Get updates via SMS and in-app notifications."},
     {id:3, icon:<Wrench className="text-orange-500" size={34}/> , title: 'Repair', desc: "Professional repair at your location. Pay securely through the app and get back on the road."}
    ]

    const achievements: steps[] = [
        {id:1, icon: <Users/>, title: '50K+', desc:'Satisfied Customers'},
        {id:2, icon: <Wrench/>, title: '2K+', desc:'Certified Mechanics'},
        {id:3, icon: <Car/>, title: '100K+', desc:'Repairs Completed'},
        {id:4, icon: <Clock/>, title: '15 Min', desc:'Average Response'},
    ]

    return(
       <div className="px-6 py-16 mt-10 text-center">
  {/* Heading */}
  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
    How <span className="text-orange-500">Reparo</span> Works
  </h2>
  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-medium">
    Getting your vehicle fixed has never been easier. Just follow these three simple steps.
  </p>

  {/* Booking Steps */}
  <div className="mt-8 grid gap-12 sm:grid-cols-3 max-w-5xl mx-auto">
    {reparoSteps.map((step) => (
      <div
        key={step.id}
        className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl transition duration-300 bg-white"
      >
        {/* Icon */}
        <div className=" h-20 w-20 flex items-center justify-center rounded-full shadow-md mb-6 hover:scale-110 transform transition">
          {step.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800">{step.id}. {step.title}</h3>

        {/* Description */}
        <p className="mt-2 text-gray-600 text-base">{step.desc}</p>
      </div>
    ))}
  </div>


  {/* Achievments */}
  <div className="mt-16 px-6 py-12 bg-gradient-to-b from-white to-orange-50">
  <div className="max-w-6xl mx-auto grid gap-10 grid-cols-2 lg:grid-cols-4">
    {achievements.map((step) => (
      <div
        key={step.id}
        className="flex flex-col items-center text-center p-8 rounded-2xl bg-white "
      >
        {/* Icon */}
        <div className="h-16 w-16 flex items-center justify-center rounded-full shadow-lg mb-6 bg-orange-500 text-white text-2xl hover:scale-110 transform transition">
          {step.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-extrabold text-gray-900">{step.title}</h3>

        {/* Description */}
        <p className="mt-3 text-gray-600 text-base leading-relaxed">
          {step.desc}
        </p>
      </div>
    ))}
  </div>
</div>

</div>

    )
}

export default HowItWorks;