"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Pattern from "../public/images/Pattern.png";
import Subscribe from "./Subscribe";
import { useAuth } from "./../hooks/useAuth";

function Footer() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const { user, loading } = useAuth();

  const toggleSubscribe = () => {
    setIsSubscribeOpen(!isSubscribeOpen);
  };

  const closeSubscribe = () => {
    setIsSubscribeOpen(false);
  };

  useEffect(() => {
    if (!loading && !user && !window.location.pathname.startsWith('/admin')) {
      const timer = setTimeout(() => {
        toggleSubscribe();
      }, 4000);
  
      return () => clearTimeout(timer);
    }
  }, [user, loading]);
  

  return (
    <>
      <div>
        <div className="pt-24 pb-8 md:px-16 px-8">
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 lg:text-base text-sm justify-between items-center py-8 lg:px-16 px-4 border-b-[2px] border-t-[2px] border-[#d88728]">
            <div className="flex flex-row gap-7 font-[400] text-lg ">
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
            <div className="flex flex-row gap-6 text-2xl">
              <Link href="https://www.facebook.com/MauryasRestBarBanquet/">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="https://www.instagram.com/mauryas.rest.bar.banquet/?hl=en">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link href="https://g.page/r/Cd-CC70Nfj0DEBM/review">
                <i className="fa-brands fa-google"></i>
              </Link>
              <Link href="https://www.tripadvisor.ca/Restaurant_Review-g154932-d886748-Reviews-Maurya_s_Rest_Bar_Banquet-Kamloops_British_Columbia.html">
                <Image src="data:image/png;base64,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" alt="tripadvisor" width={30} height={30} />
              </Link>
            </div>
            <div className="flex flex-row gap-7 font-[400] text-lg ">
              <Link href="/gift-cards">Gift Cards</Link>
              <Link href="/rewards">Rewards</Link>
              <Link href="/careers">Careers</Link>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-7 mt-10 justify-center items-center">
            <Image src={Pattern} alt="Pattern" loading="lazy" width={200} height={200} />
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-lg text-red-600">
                SIGNUP FOR OUR NEWSLETTER
              </p>
              <div className="flex justify-center">
                <button
                  onClick={toggleSubscribe}
                  className="bg-transparent p-4 px-10 text-lg font-bold border-[1px] border-[#d88728] text-[#d88728] hover:text-white hover:bg-[#d88728] transition-all duration-400"
                >
                  Subscribe
                </button>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <Link className="text-sm underline" href="/terms-and-conditions">
                  Terms & Conditions
                </Link>
                <Link className="text-sm underline" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-2 text-sm font-medium lg:pb-0 pb-[70px] text-white text-center">
          <i className="fa-regular fa-copyright"></i>
          &nbsp; 2024 Maurya's Craft Bar & Kitchen. All rights reserved.
        </div>
      </div>
      <div
        style={{
          maxHeight: isSubscribeOpen ? "100vh" : "0",
          opacity: isSubscribeOpen ? "1" : "0",
          overflow: isSubscribeOpen ? "visible" : "hidden",
          transition: "max-height 0.4s ease, opacity 0.5s ease",
        }}
        className="fixed top-0 left-0 text-white z-50"
      >
        {isSubscribeOpen && <Subscribe closeSubscribe={closeSubscribe} />}
      </div>
    </>
  );
}

export default Footer;
