import Input from "@/components/input";
import Image from "next/image";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="relative h-[100vh] w-full bg-[url('/imgs/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src="/imgs/logo.png" alt="Logo" width={500} height={12} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
            <div className="flex flex-col gap-4 ">
              <Input
                label="Username"
                id="name"
                type="text"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              <Input
                label="Email or Phone Number"
                id="email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Sign In
            </button>
            <p className="text-neutral-500 mt-12">
              Fisrt time using Netflix?
              <span className="text-white ml-1 hover:underline hover:text-green-200 cursor-pointer">
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
