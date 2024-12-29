"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoBlack from "../../../public/images/LogoBlack.png";

function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="h-[80vh] flex flex-row items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://www.cactusclubcafe.com/wp-content/uploads/2024/11/111424_PDE_HolidayCampaign_PromoBlock_1200x800.jpg')" }}>
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-3 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <div className="flex flex-col w-fit justify-center items-center p-4">
          <Image src={LogoBlack} alt="LogoBlack" className="w-1/2" />
          <p className="text-2xl font-extrabold text-[#d88728]">Welcome Back!</p>
          <p className="text-xl font-bold">Login to your account</p>
          <button className="rounded-2xl w-full border-[1px] font-semibold border-black flex justify-center items-center gap-2 px-4 py-2 mb-2 mt-4">
            <i className="fa-brands fa-google text-xl"></i> Google
          </button>
          <p className="text-xl font-semibold">OR</p>
          <form className="flex flex-col w-full">
            <input
              className="rounded-2xl w-full border-[1px] font-semibold border-black flex justify-center items-center gap-2 px-4 py-2 mb-4 mt-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={handleLogin}
              className="rounded-2xl w-full font-semibold bg-[#d88728] text-white text-xl hover:scale-105 transition-all duration-500 flex justify-center items-center gap-2 px-4 py-2 mb-4"
            >
              Login
            </button>
          </form>
          <p className="text-sm font-semibold">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#d88728] cursor-pointer">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
