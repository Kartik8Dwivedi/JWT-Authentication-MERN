import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex h-screen w-screen justify-center pt-20">
      <div>
        <p className="text-white text-5xl text-center">Instagram</p>
        <p className="text-white text-2xl mt-20 text-center">
          Join Us Now{" "}
          <Link to={"/signup"} className="text-yellow-500 font-medium text-2xl cursor-pointer">
            SignUp
          </Link>
          /
          <Link to={"/signin"} className="text-yellow-500 font-medium text-2xl cursor-pointer">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
}

export default HomePage