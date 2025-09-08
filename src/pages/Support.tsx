import ContactForm from "../components/support/ContactForm";
import GetInTouch from "../components/support/GetInTouch";

const Support = () =>{
    return (
        <div>
             <div className="text-center my-10 space-y-6">

            <h1 className="text-5xl font-bold">How Can We Help</h1>
            <p className="text-lg font-medium text-gray-700">Get the support you need, when you need it. Our team is here to help 24/7.</p>

            </div>

            <GetInTouch/>
            <ContactForm/>
        </div>
    )
}

export default Support;