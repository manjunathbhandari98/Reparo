import { Star } from "lucide-react";
import { mechanics } from "../../data/mechanics";

const NearbyMechanics = () =>{
    return(
        <div className="grid sm:grid-cols-3 gap-5 bg-gray-100/40 p-4">
           
        {mechanics.map((mechanic, index:number) =>(
            <div key={index} className="bg-white rounded-xl p-4">
                <div className="flex gap-2 items-center">
                    <img src="/mechanic.png" alt="" className="w-8 h-8 rounded-full bg-orange-400" />
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">{mechanic.name}</h2>
                        <div className="flex gap-2 items-center text-sm">
                            <Star size={18} fill="yellow" color="yellow"/>
                            <h3 className="font-medium text-gray-700">{mechanic.rating}</h3>
                            <p className="font-medium text-gray-700/80">(249 Jobs)</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 my-4">
                    <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium text-gray-700">Distance: </h4>
                        <h4 className="text-sm font-medium text-gray-900">{mechanic.distance} </h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium text-gray-700">Price Range: </h4>
                        <h4 className="text-sm font-medium text-gray-900">{mechanic.priceRange} </h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium text-gray-700">Response Time: </h4>
                        <h4 className="text-sm font-medium text-gray-900">{mechanic.responseTime} </h4>
                    </div>
                  
                   
                </div>
                  <div className="flex gap-2">
                         {mechanic.services.map((service, index) =>(

                    <div key={index} className="text-orange-800 bg-orange-50 rounded font-medium p-2 text-xs">{service}</div>
                    ))}
                    </div>

                    <button className="w-full p-1.5 my-3 cursor-pointer text-center font-medium bg-orange-600 hover:bg-orange-500 text-white rounded-lg">Book Now</button>
            </div>
        ))}
    </div>
    )
    
}

export default NearbyMechanics;