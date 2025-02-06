"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogoBlack from "./../../public/images/LogoBlack.png";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        setLoading(false);
        router.push("/admin/dashboard");
      } else {
        setLoading(false);
        const data = await res.json();
        setError(data.message);
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred.");
    }
  };

  return (
    <div className="h-screen flex flex-row">
      <div className="w-2/3 md:flex justify-center flex-col gap-5 items-center text-center text-white hidden bg-[url('https://www.cactusclubcafe.com/wp-content/uploads/2024/11/111424_PDE_HolidayCampaign_PromoBlock_1200x800.jpg')]">
        <p className="text-4xl font-bold">Welcome</p>
        <p className="text-5xl font-extrabold">Maurya's Rest, Bar & Banquet</p>
        <p className="text-2xl font-semibold">
          More Than a Meal – It’s an Experience.
        </p>
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-3">
        <div className="flex flex-col w-fit justify-center items-center p-4">
          <Image src={LogoBlack} alt="LogoBlack" className="w-1/2" />
          <div>
            <p className="text-2xl font-extrabold text-[#d88728] text-center">
              Hello Admin
            </p>
            <p className="text-xl font-bold text-center">
              Log into your account
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
              <input
                className="rounded-2xl w-full border-[1px] font-semibold border-black flex justify-center items-center gap-2 px-4 py-2 mb-2 mt-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="relative w-full">
                <input
                  className="rounded-2xl w-full border-[1px] font-semibold border-black flex justify-center items-center gap-2 px-4 py-2 mb-4"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 bottom-5 transform text-xl text-gray-600 hover:text-black"
                >
                  {showPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </button>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`rounded-2xl w-full font-semibold text-white text-xl ${
                  loading ? "bg-gray-500" : "bg-[#d88728] hover:scale-105"
                } transition-all duration-500 flex justify-center items-center gap-2 px-24 py-2 mb-4`}
              >
                {loading ? <div className="loader"></div> : "Login"}
              </button>
            </form>
            {error && (
              <p className="text-center text-base -mt-2 text-red-500">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
