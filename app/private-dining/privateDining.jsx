"use client";

import React from "react";
import Image from "next/image";
import Banquet from "../../public/images/Banquet.png"
import FAQs from "@/components/FAQs";
import SideMenu from "@/components/Reserve_Table_Modals/SideMenu";
import { useState } from "react";

function PrivateDining() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  }
  const faqs = [
    {
      question: 'How do I book a group dining experience?',
      answer: 'In the heart of Downtown, Kamloops 100 block opposite to Royal bank. 165 Victoria St.',
    },
    {
      question: 'How much does it cost?',
      answer: "It based on once need, everything is customised according to needs of an individual or group. The booking manager can discus your needs and requirements to give you a price which suits your budget.",
    },
    {
      question: 'Is a minimum spend required?',
      answer: "In the heart of Downtown, Kamloops 100 block opposite to Royal bank. 165 Victoria St.",
    },
    {
      question: 'What is your cancellation policy?',
      answer: "We are know for the following : breads, champagne, cocktails, happy hour, lunch, dinner, butter chicken, Maurya's cola, house crafted mango lassi, delivery, takeout, best chutnies, lucknow kebabs",
    },
    {
      question: 'What if my event doesn’t meet a minimum spend requirement?',
      answer: "In this case, a room rental fee will be added to your bill to meet the minimum requirement. This can be discussed with the booking manager when booking.",
    },
    {
      question: 'What if my guests have allergies and/or dietary restrictions?',
      answer: "This can be discussed with the booking manager when booking.",
    },
    {
      question: 'What if my guests quantity change?',
      answer: "If guest quantity increase 4 days notice is required. If decrease one weeks notice and must meet minimum guest requirements.",
    },
  ];
  return (
    <>
      <div
        style={{
          maxHeight: isSideMenuOpen ? "100vh" : "0",
          opacity: isSideMenuOpen ? "1" : "0",
          overflow: isSideMenuOpen ? "visible" : "hidden",
          transition: "max-height 0.4s ease, opacity 0.5s ease",
        }}
        className="fixed top-0 left-0 text-white z-50"
      >
        {isSideMenuOpen && <SideMenu closeSideMenu={closeSideMenu} />}
      </div>
      <section className="w-full flex text-white justify-center items-center h-[80vh] relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          loading="lazy"
          autoPlay
          muted
          loop
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/1013355242/rendition/540p/file.mp4?loc=external&log_user=0&signature=0b0edf528e38ba5ca2a03c92d44a1db93cb011906c03a5951ce9fa51e588a248"
            type="video/mp4"
          />
        </video>
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-5xl text-center px-2 tracking-wide font-[600]">
            Private Dining and Events
          </p>
          <p className="text-sm font-[600]">
            Call Your Friends & Families, Start The Fun
          </p>
          <button onClick={toggleSideMenu} className="text-xl tracking-widest font-[600] underline underline-offset-4 hover:scale-105 transition-all duration-500">
              RESERVE NOW
            </button>
        </div>
      </section>
      <section className="h-fit max-w-[1250px] mx-auto md:p-20 p-6 pb-10 md:pt-32 pt-20">
        <div className="text-center px-5">
          <p className="text-4xl font-medium">Ready To Host An Unforgettable Event?</p>
          <p className="text-lg font-medium leading-5 mt-2 mb-8">Maurya's is your go-to restaurant for social gatherings, corporate events, meetings and celebrations of all sizes. From group dining to full buyouts, we’ve got the food, drinks and atmosphere to bring your vision to life</p>
          <button onClick={toggleSideMenu} className="text-xl tracking-widest font-[600] underline underline-offset-4 hover:scale-105 transition-all duration-500">
              RESERVE NOW
            </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-20 mx-auto w-full">
          <div className="w-full md:w-1/2">
            <Image src={Banquet} alt="Banquet" width={500} height={500} loading="lazy" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
            <p className="text-5xl">Why Choose Maurya's? </p>
            <p className="text-xl leading-5 mt-4 mb-8">Impress your guests with delicious food, signature cocktails and beautiful spaces perfect for any event.</p>
            <ul className="text-xl text-left list-disc list-inside">
              <li>Warm, attentive service</li>
              <li>Curated sesonal menus</li>
              <li>Options for any group size</li>
              <li>Dedicated support from aur team</li>
              <li>Convenient instant booking</li>
            </ul>
            <button onClick={toggleSideMenu} className="text-xl text-white mt-8 bg-[#d88728] p-2 px-5 tracking-wide font-[700] hover:scale-105 transition-all duration-500">RESERVE NOW <i className="fa-solid fa-chevron-right text-lg"></i></button>
          </div>
        </div>
      </section>
      <FAQs faqs={faqs} />
    </>
  );
}

export default PrivateDining;
