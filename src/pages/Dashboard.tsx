import { Car, History, MapPin, TriangleAlert } from "lucide-react";
import { useState, type ReactElement } from "react";
import ActiveBooking from "../components/dashboard/ActiveBookings";
import RepairHistory from "../components/dashboard/History";
import NearbyMechanics from "../components/dashboard/NearbyMechanics";

const Dashboard = () =>{
    const [selectedTab, setSelectedTab] = useState(1);

    type tab = {
        id: number, 
        name:string,
        icon:ReactElement
    }

    const tabsOptions: tab[]= [
        {id:1, name:'Nearby Mechanics', icon:<MapPin size={18}/>},
        {id:2, name:'Booking History', icon:<History size={18}/>},
    ]
    return(
        <div className="p-5 max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-2 my-4">

            <h1 className="text-3xl poppins-bold">Welcome Back John!</h1>
            <p className="font-medium text-gray-700">Manage your vehicle repairs and find trusted mechanics</p>
            </div>
            {/* Action Buttons */}
            <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-gradient-to-br from-red-400 to-red-500 text-white p-5 rounded-lg flex justify-between items-center">
                    <div className="flex flex-col gap-2 ">
                        <h1 className="text-xl font-bold text-white">Emergency Help Now</h1>
                        <p className="text-lg text-white">24/7 emergency roadside assistance</p>
                    </div>
                    <TriangleAlert size={40}/>
                </div>
                 <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-5 rounded-lg flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold">Emergency Help Now</h1>
                        <p className="text-lg ">24/7 emergency roadside assistance</p>
                    </div>
                    <Car size={40}/>
                </div>
            </div>
            {/* active bookings */}
            <h2 className="text-2xl poppins-bold mt-10">Active Bookings</h2>
            <ActiveBooking/>

            {/* Tabs */}
            <div className="bg-gray-200/40 my-10 p-1 w-full gap-2 rounded-xl cursor-pointer flex">
                {tabsOptions.map((tab:tab) =>(
                    <div key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`w-1/2 flex gap-2 rounded-xl justify-center items-center text-center
                    ${selectedTab == tab.id ? 'bg-white p-3 text-orange-500' : 'text-gray-700'}
                    `}>
                {tab.icon}
                <h2 className={` font-semibold`}>{tab.name}</h2> </div>
                ))}
                
            </div>

                <div className="my-10 p-5">
                     {selectedTab == 1 ? (
                <NearbyMechanics/>
            ): (
                <RepairHistory/>
            )}
                </div>
           
        </div>
    )
}

export default Dashboard;