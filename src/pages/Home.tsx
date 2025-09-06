import CustomerReview from "../components/home/CustomerReview";
import EmergencyBreakdown from "../components/home/EmergencyBreakdown";
import HowItWorks from "../components/home/HowItWorks";
import LandingPage from "../components/home/LandingPage";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () =>{
    return(
        <div className="p-2 space-y-5">
            <LandingPage/>
            <HowItWorks/>
            <WhyChooseUs/>
            <CustomerReview/>
            <EmergencyBreakdown/>
        </div>
    )
}

export default Home;