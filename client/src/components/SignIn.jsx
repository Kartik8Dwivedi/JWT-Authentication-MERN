import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserFunc from './UserPage';

const SignIn = () => {

    const [form, setForm] = useState({});
    const [userPage, setUserPage] = useState(false)
    const [jsonnData, setJsonnData] = useState({});

    const handleForm = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const data = await fetch("http://localhost:5001/api/auth/signin", {
          method: "POST",
          body: JSON.stringify(form),
          credentials : "include",
          mode : "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonData = await data.json();
        if (jsonData.success == true) {
                  const ndata = await fetch(
                    "http://localhost:5001/api/auth/user",
                    {
                      mode : "cors",
                      method: "GET",
                      credentials: "include",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  setJsonnData(await ndata.json());
            setUserPage(true);
        }
      } catch (error) {
        console.log("Error in fetching the request: " + error);
      }
    };

  return  (userPage)?<UserFunc data={jsonnData}/>:(
    <div className="h-screen w-screen flex justify-center items-center">
      <Link
        to={"/"}
        className="absolute left-[20px] top-[20px] text-white flex justify-center cursor-pointer"
      >
        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white inline-block mr-3"></div>
        HomePage
      </Link>
      <div className="h-[70%] w-[30%] bg-white rounded-lg">
        <p className="text-center font- text-4xl mt-16">Instagram Login</p>
        <form
          className="flex flex-col w-full h-full items-center my-10"
          onSubmit={handleSubmit}
        >
          <label
            className="relative right-[30%] lg:right-[35%] text-lg pt-6"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleForm}
            placeholder="Email"
            required
            className="border-2 w-[80%] rounded-md p-2 block"
          />
          <label
            className="relative right-[30%] lg:right-[32%] text-lg pt-10"
            htmlFor="email"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={handleForm}
            className="border-2 w-[80%] rounded-md p-2 block"
          />
          <input
            type="submit"
            className="border-2 w-[80%] rounded-md p-2 block bg-blue-600 text-white mt-14"
          />
          <p className="mt-10">
            Don't have a account?
            <Link
              to={"/signup"}
              className="pl-2 text-blue-700 font-medium cursor-pointer"
            >
              Sign Up here
            </Link>
          </p>
        </form>
      </div>
    </div>
    
  );
}


export default SignIn