const NotificationPage = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-lg font-semibold text-gray-800">Notifications</h1>
        <button className="text-sm text-orange-500 font-medium hover:underline">
          Mark all as Read
        </button>
      </div>

      {/* Notifications */}
      <div className=" flex flex-col gap-4">
        <div className="p-7 bg-gray-50 rounded-lg text-sm text-gray-700 shadow-sm">
          🚗 Mechanic <span className="font-semibold">Amit Sharma</span> is on the way!
        </div>
        <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700 shadow-sm">
          🛠️ Your last service has been marked{" "}
          <span className="font-semibold text-green-600">Completed</span>.
        </div>
        <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700 shadow-sm">
          💳 Payment of <span className="font-semibold">₹2300</span> was successful.
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
