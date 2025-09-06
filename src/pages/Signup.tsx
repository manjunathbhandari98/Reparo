import { Lock, Mail, User, X } from "lucide-react";

type AuthProps = {
  onClose: () => void;
  onLogin: () => void;
};

const Signup = ({ onClose, onLogin }: AuthProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      {/* Modal container */}
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-lg">
        {/* Close button - stays fixed at top-right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-gray-500 hover:text-gray-800"
        >
          <X />
        </button>

        {/* Scrollable content */}
        <div className="max-h-[90vh] overflow-y-auto p-6 scroll-hidden">
          {/* Title */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold">Welcome back</h2>
          </div>

          <div className="my-6 space-y-4">
            {/* Full Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1">
                <User className="text-gray-500/90" />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter your full name"
                  className="w-full border-0 py-2 outline-0"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1">
                <Mail className="text-gray-500/90" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border-0 py-2 outline-0"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1">
                <Lock className="text-gray-500/90" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border-0 py-2 outline-0"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                I am a
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1">
                <select
                  name="role"
                  id="role"
                  className="w-full border-0 py-2 outline-0"
                >
                  <option value="customer">Customer</option>
                  <option value="mechanic">Mechanic</option>
                </select>
              </div>
            </div>

            {/* Sign In Button */}
            <button className="w-full cursor-pointer rounded-lg bg-orange-500 p-3 font-semibold text-white hover:bg-orange-600">
              Sign In
            </button>

            {/* Switch to Login */}
            <div className="my-2 flex w-full items-center justify-center gap-1">
              <h4 className="text-gray-800">Don&apos;t have an account?</h4>
              <span
                onClick={onLogin}
                className="cursor-pointer text-md font-semibold text-orange-500"
              >
                Login
              </span>
            </div>

            {/* Divider */}
            <div className="my-4 flex w-full items-center gap-4">
              <div className="h-[1px] flex-grow bg-gray-300" />
              <h4 className="whitespace-nowrap text-sm font-medium text-gray-600">
                Or continue with
              </h4>
              <div className="h-[1px] flex-grow bg-gray-300" />
            </div>

            {/* Social Login */}
            <div className="flex flex-col gap-2">
              <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-500/40 p-3">
                <img src="/google.png" alt="Google" className="h-4 w-4" />
                <h2 className="font-semibold text-gray-700">
                  Continue with Google
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
