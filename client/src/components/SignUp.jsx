import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from './Modal'

const SignUp = () => {

    const [form, setForm] = useState({})
    const [modal, setModal] = useState(false)
    const [message, setMessage] = useState("")

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await fetch("http://localhost:5001/api/auth/signup", {
                method:'POST',
                body:JSON.stringify(form),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            const jsonData = await data.json()

            if (jsonData.success == true) {
              setMessage(
                "User sign up successful, you can now proceed with Sign in"
              );
              setModal(true);
              setTimeout(() => {
                setModal(false);
                setMessage("");
              }, 3000);
              return;
            }
            if (jsonData.message.includes("E11000")) {
                setMessage("Account already exists");
                setModal(true)
                setTimeout(()=>{setModal(false);setMessage("")} , 3000)
            }
            if (jsonData.message.includes("valid email")) {
              setMessage("Please provide a valid email");
              setModal(true);
              setTimeout(() => {
                setModal(false);
                setMessage("");
              }, 3000);
            }
            if (jsonData.message.includes("doesn't match")) {
              setMessage("Password and Confirm Password doesn't match");
              setModal(true);
              setTimeout(() => {
                setModal(false);
                setMessage("");
              }, 3000);
            }
        } catch (error) {
            console.log("Error in fetching the request: "+error)
        }
    }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
        {
           modal && <Modal message={message}/>
        }        
      <Link
        to={"/"}
        className="absolute left-[20px] top-[20px] text-white flex justify-center cursor-pointer"
      >
        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white inline-block mr-3"></div>
        HomePage
      </Link>
      <div className="h-[75%] w-[30%] bg-white rounded-lg">
        <p className="text-center font- text-4xl mt-10">Instagram SignUp</p>
        <form
          className="flex flex-col w-full h-full items-center my-10"
          onSubmit={handleSubmit}
          method="POST"
        >
          <label
            className="relative right-[30%] lg:right-[35%] text-lg"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleForm}
            placeholder="Username"
            required
            className="border-2 w-[80%] rounded-md p-2 block"
          />
          <label
            className="relative right-[30%] lg:right-[35%] text-lg pt-4"
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
            className="relative right-[30%] lg:right-[32%] text-lg pt-4"
            htmlFor="password"
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
          <label
            className="relative right-[25%] lg:right-[25.5%] text-lg pt-4"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirmPassword"
            required
            onChange={handleForm}
            className="border-2 w-[80%] rounded-md p-2 block"
          />
          <input
            type="submit"
            className="border-2 w-[80%] rounded-md p-2 block bg-blue-600 text-white mt-10"
          />
          <p className="mt-10">
            Already a member?
            <Link
              to={"/signin"}
              className="pl-2 text-blue-700 font-medium cursor-pointer"
            >
              Sign In instead
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
