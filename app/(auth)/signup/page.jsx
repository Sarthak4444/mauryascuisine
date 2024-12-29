"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoBlack from "../../../public/images/LogoBlack.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useRouter } from "next/navigation";

function SignUpPage() {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submit = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, number }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Error signing up");
    }
  };

  return (
    <div className="h-[80vh] flex flex-row">
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-3">
        <div className="flex flex-col w-fit justify-center items-center p-4">
          <Image src={LogoBlack} alt="LogoBlack" className="w-1/2" />
            <div>
              <p className="text-2xl font-extrabold text-[#d88728]">Welcome!</p>
              <p className="text-xl font-bold">Create your account</p>
              <button className="rounded-2xl w-full border-[1px] font-semibold border-black flex justify-center items-center gap-2 px-4 py-2 mb-2 mt-4">
                <i className="fa-brands fa-google text-xl"></i> Google
              </button>
              <p className="text-xl font-semibold">OR</p>
              <form className="flex flex-col w-full">
                <input
                  className="rounded-2xl w-full border-[1px] font-semibold border-black flex justify-center items-center gap-2 px-4 py-2 mb-2 mt-2"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <PhoneInput
                  defaultCountry="CA"
                  placeholder="Phone Number"
                  value={number}
                  onChange={setNumber}
                  className="rounded-2xl w-full border-[1px] font-semibold border-black text-center flex justify-center items-center gap-2 px-4 py-2 mb-4 mt-2"
                />
                <button
                  type="button"
                  onClick={submit}
                  className="rounded-2xl w-full font-semibold bg-[#d88728] text-white text-xl hover:scale-105 transition-all duration-500 flex justify-center items-center gap-2 px-4 py-2 mb-4"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-sm font-semibold">
                Already have an account?{" "}
                <Link href="/login" className="text-[#d88728] cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
        </div>
      </div>
      <div className="w-2/3 md:flex justify-center flex-col gap-5 items-center text-center text-white hidden bg-[url('https://www.cactusclubcafe.com/wp-content/uploads/2024/11/111424_PDE_HolidayCampaign_PromoBlock_1200x800.jpg')]">
        <p className="text-4xl font-bold">Welcome</p>
        <p className="text-5xl font-extrabold">Maurya's Rest, Bar & Banquet</p>
        <p className="text-2xl font-semibold">
          More Than a Meal – It’s an Experience.
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
