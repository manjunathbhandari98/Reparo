import { Clock, CreditCard, Shield, Star } from "lucide-react";
import type { ReasonsToChoose } from "../../types";

const WhyChooseReparo = () => {
  const reasons: ReasonsToChoose[] = [
    {
      id: 1,
      icon: <Clock className="w-7 h-7" />,
      title: "24/7 Availability",
      desc: "Emergency breakdown? Our mechanics are available around the clock to get you back on the road.",
    },
    {
      id: 2,
      icon: <Shield className="w-7 h-7" />,
      title: "Certified & Insured",
      desc: "All mechanics are certified professionals with comprehensive insurance for your peace of mind.",
    },
    {
      id: 3,
      icon: <Star className="w-7 h-7" />,
      title: "Quality Guarantee",
      desc: "We stand behind our work with warranties on all repairs and genuine replacement parts.",
    },
    {
      id: 4,
      icon: <CreditCard className="w-7 h-7" />,
      title: "Transparent Pricing",
      desc: "No hidden fees. Get upfront pricing estimates and pay securely through the app.",
    },
  ];

  return (
    <section className="p-5 sm:p-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Why Choose Reparo</h1>
        <p className="text-lg text-gray-600 mt-3">
          We're committed to providing the best vehicle repair experience with these key benefits.
        </p>
      </div>

      {/* Reason Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {reasons.map((reason: ReasonsToChoose) => (
          <div
            key={reason.id}
            className="bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 p-6 rounded-2xl flex flex-col gap-4 items-start"
          >
            {/* Icon wrapper */}
            <div className="bg-orange-100 text-orange-600 p-3 rounded-xl shadow-sm">
              {reason.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800">{reason.title}</h2>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseReparo;
