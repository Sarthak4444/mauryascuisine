import React from "react";
import Image from "next/image";
import drinkThree from "../public/images/drinkThree.png";

function Subscribe({ closeSubscribe }) {
  return (
    <div className="fixed inset-0 bg-[#00000096] flex justify-center items-center z-50">
      <div className="bg-white flex flex-row justify-center items-center w-[800px] relative">
        <div className="md:flex hidden w-1/2">
          <Image
            src={drinkThree}
            alt="Subscribe"
            width={500}
            loading="lazy"
            height={500}
          />
        </div>
        <div className="w-1/2 flex text-center p-8 flex-col justify-center items-center text-black">
          <div className="absolute top-5 right-5 cursor-pointer">
            <i
              onClick={closeSubscribe}
              className="text-black fa-solid fa-xmark text-2xl"
            ></i>
          </div>
          <p className="font-bold text-neutral-500">BECOME A MAURYAS MEMBER</p>
          <p className="font-extrabold text-4xl text-[#d88728]">
            Win a $250 Gift Card
          </p>
          <form className="flex flex-col justify-center items-center gap-4 mt-4">
            <input
              className="p-2 w-[250px] border-[1px] focus:outline-none border-gray-300 text-gray-800 rounded-md text-lg font-semibold"
              type="text"
              required
              placeholder="Name"
            />
            <input
              className="p-2 w-[250px] border-[1px] focus:outline-none border-gray-300 text-gray-800 rounded-md text-lg font-semibold"
              type="email"
              required
              placeholder="Email"
            />
            <hr className="h-[2px] w-[250px] bg-[#c7b8a7]" />
            <button
              className="bg-[#d88728] w-[250px] rounded-sm hover:scale-105 transition-all duration-500 text-white p-2 text-center text-xl font-bold"
         
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-neutral-500 mt-4 leading-4">
            By providing your name and email, you agree to our Terms of Use and
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
