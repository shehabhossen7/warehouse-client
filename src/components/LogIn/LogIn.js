import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className=" border-2 w-96 mx-auto rounded-xl p-8">
      <h1 className="text-2xl text-emerald-500 font-semibold">Please logIn</h1>

      <div className="flex items-center my-5">
        <div className="m-2">
          <hr className="w-20 bg-slate-400  rounded-md" />
        </div>
        <div>
          <span className="text-sm text-slate-400">login with Email</span>
        </div>
        <div className="m-2">
          <hr className="w-20 bg-slate-400  rounded-md" />
        </div>
      </div>

      <form className="my-5">
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="email">Email*</label>
          <br />
          <input
            className="border-2 rounded-full w-60"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="password">Password*</label>
          <input
            className="border-2 rounded-full w-60"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="flex items-center justify-between m-3">
          <div>
            <input type="checkbox" name="confirm" id="confirm" />
            <span className="mx-2">Rember me</span>
          </div>
          <div>
            <span className="text-sky-500 font-semibold">Forgot Password</span>
          </div>
        </div>

        <div className="rounded-full py-2 my-3 bg-lime-600 w-52 mx-auto text-white">
          <input type="submit" value="LogIn" />
        </div>
      </form>
      <div>
        <p>
          Not registered yet?
          <Link className="mx-1 text-sky-500 font-semibold" to="/signup">
            Create a new account
          </Link>
        </p>
      </div>
      <div className="flex items-center my-5">
        <div className="m-2">
          <hr className="w-20 bg-slate-400  rounded-md" />
        </div>
        <div>
          <span className="text-sm text-slate-400">login with Google</span>
        </div>
        <div className="m-2">
          <hr className="w-20 bg-slate-400  rounded-md" />
        </div>
      </div>

      <div>
        <p>Google</p>
      </div>
    </div>
  );
};

export default LogIn;
