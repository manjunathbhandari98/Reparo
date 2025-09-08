import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { faqs } from "../../data/faqs";

const FaqPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="p-6 sm:p-12 max-w-4xl mx-auto">
      <div className="text-center mb-10 space-y-3">
        <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600">
          Got questions? We’ve got answers. Here’s everything you need to know about Reparo’s services.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-5"
          >
            {/* Question */}
            <button
              onClick={() => toggle(faq.id)}
              className="flex justify-between items-center w-full text-left border-0 outline-0"
            >
              <h2 className="text-lg font-medium text-gray-800">{faq.question}</h2>
              {openId === faq.id ? (
                <ChevronUp className="text-gray-500 w-5 h-5" />
              ) : (
                <ChevronDown className="text-gray-500 w-5 h-5" />
              )}
            </button>

            {/* Answer */}
            {openId === faq.id && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqPage;
