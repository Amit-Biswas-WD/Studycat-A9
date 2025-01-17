import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="flex justify-center text-center items-center">
          <h2 className="text-2xl font-semibold mt-6">Login your account</h2>
        </div>
        <hr className="mt-[30px] w-[80%] mx-auto h-2 text-black" />
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
              type={showPass ? "password" : "text"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <p
              onClick={() => setShowPass(!showPass)}
              className="absolute btn btn-xs top-14 right-4"
            >
              {showPass ? <FaEyeSlash /> : <IoIosEye />}
            </p>
          </div>
          {/* {error.login && (
            <label className="flex items-center space-x-2 mt-3 text-red-500 font-medium">
              {error.login}
            </label>
          )} */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mb-6">
          Don,t Have An Account ?
          <Link to={""} className="text-red-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
