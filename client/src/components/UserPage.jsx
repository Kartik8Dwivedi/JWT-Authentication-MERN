import React from 'react'
import { Link } from 'react-router-dom';

const UserPage = ({data}) => {
  const handleLogOut= async () => {
    try {
          const data = await fetch("http://localhost:5001/api/auth/logout", {
          method: "GET",
          credentials : "include",
          mode : "cors",
          headers: {
            "Content-Type": "application/json",
          }
        });
        console.log(await data.json())
    } catch (error) {
      console.log("Error in logout: "+error)
    }
  }
  return (
    <div className="flex h-screen w-screen justify-center items-center text-white">
      <div className="w-[40%] h-[40%] flex justify-center gap-10 items-center">
        <div className="rounded-full overflow-hidden">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
            alt="img"
            className="h-40"
          />
        </div>
        <div className="text-white mt-3 text-xl">
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
        <Link className='bg-blue-500 p-2 rounded-lg hover:bg-blue-600' to={"/"} onClick={handleLogOut}>Log Out</Link>
      </div>
    </div>
  );
}

export default UserPage