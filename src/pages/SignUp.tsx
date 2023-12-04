import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const SignUp = () => { 
  return (
    <div>
      <form className="form">
        <h1 className="text-center mb-4 font-bold text-black text-[32px]">
          Sign Up
        </h1>
        <label className="mt-2 font-bold text-black" htmlFor="username">
          User Name
        </label>
        <input
          className="px-2 py-2 mb-1 rounded-lg text-black"
          placeholder="Enter your name"
          type="text"
          id="username"
        />
        <label className="mt-2 font-bold text-black" htmlFor="email">
          Email
        </label>
        <input
          className="px-2 py-2 mb-1 rounded-lg text-black"
          placeholder="Enter your email"
          type="text"
          id="email"
        />
        <label className="mt-2 font-bold text-black" htmlFor="user-password">
          Password
        </label>
        <input
          className="px-2 py-2 mb-1 rounded-lg text-black"
          placeholder="Enter your password"
          type="password"
          id="user-password"
        />
        <Link to={"/"} className="text-center">
          <CustomButton  title="Sign Up" designs="bg-blue-500 mt-2 " />
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
