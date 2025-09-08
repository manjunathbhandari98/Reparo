import FaqPage from "../components/how-it-works/FAQPage";
import Step from "../components/how-it-works/Step";
import WhyChooseReparo from "../components/how-it-works/WhyChooseReparo";
import { howItWorksSteps } from "../data/howitworkssteps";
import type { ServiceStep } from "../types";

const HowItWorksPage = () =>{
    return(
        <div className="p-5">
            <div className="text-center my-10 space-y-6">

            <h1 className="text-5xl font-bold">How Reparo Works</h1>
            <p className="text-lg font-medium text-gray-700">Getting your vehicle fixed has never been easier. Three simple steps to get back on the road safely.</p>
            </div>

            {howItWorksSteps.map((step:ServiceStep, index:number) =>(
                <div key={step.id}>
                    <Step data={step} index={index}/>
                </div>
            ))}

            <WhyChooseReparo/>
            <FaqPage/>
        </div>
    )
}

export default HowItWorksPage;