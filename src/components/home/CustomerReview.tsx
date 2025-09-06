import { Star } from "lucide-react";
import type { reviews } from "../../types";

const CustomerReview = () => {
  const customerReviews: reviews[] = [
    {
      id: 1,
      ratings: 5,
      comment:
        "Reparo saved my day! My car broke down on the highway and they had a mechanic there in 20 minutes. Professional, fast, and reasonably priced.",
      user: { profile: "https://www.shutterstock.com/image-photo/happy-handsome-young-indian-man-260nw-2315729087.jpg", name: "Ravi Gupta", city: "Bhatkal" },
    },
    {
      id: 2,
      ratings: 4.5,
      comment:
        "The app is incredibly easy to use. I can track the mechanic in real-time and the pricing is transparent. Highly recommend!",
      user: { profile: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379005.jpg&fm=jpg", name: "Kiran Sharma", city: "Noida" },
    },
    {
      id: 3,
      ratings: 5,
      comment:
        "As a busy mom, Reparo is a lifesaver. I can schedule repairs around my schedule and they even come to my workplace.",
      user: { profile: "https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80", name: "Mamita Rajesh", city: "Bengaluru" },
    },
  ];

  return (
    <div className="px-6 py-16 mt-10 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
        What Our Customers Say
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-medium">
        Don’t just take our word for it
      </p>

      {/* Reviews Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-3 max-w-6xl mx-auto">
        {customerReviews.map((review: reviews) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl border-gray-700/16 border p-6 flex flex-col items-start text-left "
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-orange-500 mb-3">
              {Array.from({ length: Math.floor(review.ratings) }).map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
              {review.ratings % 1 !== 0 && (
                <Star size={20} className="opacity-50" fill="currentColor" />
              )}
            </div>

            {/* Comment */}
            <p className="text-gray-700 italic leading-relaxed">
              “{review.comment}”
            </p>

            {/* User Info */}
            <div className="mt-4 flex items-center gap-3">
              <img
                src={review.user.profile}
                alt={review.user.name}
                className="w-10 h-10 rounded-full object-cover bg-gray-200"
              />
              <div>
                <p className="font-semibold text-gray-900">{review.user.name}</p>
                <p className="text-sm text-gray-500">{review.user.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
