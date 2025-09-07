import { history } from "../../data/history";

const History = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Service History</h1>

      <div className="space-y-4">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Left side - Service details */}
            <div className="flex gap-4 items-center">
              <div className="bg-green-100 rounded-full flex items-center justify-center w-14 h-14">
                <img
                  src={`/${item.vehicle}.png`}
                  alt="vehicle"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h2 className="font-semibold text-gray-800">{item.service}</h2>
                <p className="text-sm text-gray-600">{item.provider}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>

            {/* Right side - Price & Status */}
            <div className="flex flex-col items-end gap-2">
              <h2 className="text-lg font-bold text-gray-800">
                ₹{item.price.toLocaleString("en-IN")}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : item.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
