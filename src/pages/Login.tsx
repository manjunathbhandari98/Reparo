import { Lock, Mail, X } from 'lucide-react';
type LoginProps = {
  onClose: () => void;
  onSignup: () => void;
};

const Login = ({ onClose, onSignup }: LoginProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <X />
        </button>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold">Welcome back</h2>
        </div>
        <div className="my-6 space-y-4">
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div
              className="flex gap-2 px-3 py-1 items-center border
                     border-gray-300 rounded-lg"
            >
              <Mail className="text-gray-500/90" />
              <input
                type="email"
                name="email"
                className="border-0 outline-0 w-full py-2"
                placeholder="Enter your email"
                value=""
              />
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div
              className="flex gap-2 px-3 py-1 items-center border
                     border-gray-300 rounded-lg"
            >
              <Lock className="text-gray-500/90" />
              <input
                type="password"
                name="password"
                className="border-0 outline-0 w-full py-2"
                placeholder="Enter your password"
                value=""
              />
            </div>
          </div>

{/* Sign In Button */}
          <button className="bg-orange-500 text-center w-full p-3 font-semibold text-white rounded-lg hover:bg-orange-600 cursor-pointer">
            Sign In
          </button>

{/* Sign Up link */}
          <div className="flex gap-1 my-2 justify-center items-center w-full">
            <h4 className=" text-gray-800">Don't have an account?</h4>
            <h2 onClick={onSignup} className=" font-semibold text-orange-500 cursor-pointer text-md">Sign Up</h2>
          </div>

{/* Or Continue with  */}
          <div className="flex items-center w-full my-4 gap-4">
            <div className="flex-grow h-[1px] bg-gray-300"></div>
            <h4 className="text-gray-600 text-sm font-medium whitespace-nowrap">
              Or continue with
            </h4>
            <div className="flex-grow h-[1px] bg-gray-300"></div>
          </div>

          {/* Login with Other methods */}
          <div className="flex flex-col gap-2">
            <div className="w-full cursor-pointer p-3 border border-gray-500/40 rounded-lg flex justify-center items-center gap-2">
                <img src="/google.png" alt="" className='w-4 h-4' />
                <h2 className="font-semibold text-gray-700">Continue with Google</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
