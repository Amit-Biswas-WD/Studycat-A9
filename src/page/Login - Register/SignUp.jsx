import { useContext, useState } from "react";
import { FaEyeSlash, FaGithub } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { AuthContext } from "../../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate()
  const { createUser, createGoogleAccount, createGithubAccount } =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Dear user your signUp successfully.")
        navigate("/")
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const handleGoogleLogin = () => {
    createGoogleAccount()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const handleGithubLogin = () => {
    createGithubAccount()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="flex justify-center text-center items-center">
          <h2 className="text-2xl font-semibold mt-6">Register your account</h2>
        </div>
        <hr className="mt-[30px] w-[80%] mx-auto h-2 text-black" />
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          {/* {error.name && (
            <label className="label text-red-500 text-xs">{error.name}</label>
          )} */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Email</span>
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
              className="btn btn-xs absolute top-14 right-4"
            >
              {showPass ? <FaEyeSlash /> : <IoIosEye />}
            </p>
          </div>

          <label className="flex items-center space-x-2 mt-3">
            <input
              type="checkbox"
              name="check"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span>Accept Term & Conditions</span>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <Link className="text-end mr-4 mb-5 text-green-500 font-semibold" to={`/login`}>
          Go to login page
        </Link>
        <div className="flex px-8 justify-between mb-4">
          <div
            onClick={handleGoogleLogin}
            className="flex gap-4 items-center btn"
          >
            <FcGoogle className="w-6 h-auto" /> Google
          </div>
          <div
            onClick={handleGithubLogin}
            className="flex gap-4 items-center btn"
          >
            <FaGithub className="w-6 h-auto" /> Github
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
