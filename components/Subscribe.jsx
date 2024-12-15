import React from "react";
import Image from "next/image";

function Subscribe({ closeSubscribe }) {
  return (
    <div className="fixed inset-0 bg-[#00000096] flex justify-center items-center z-50">
      <div className="bg-white flex flex-row justify-center items-center w-[800px] relative">
        <div className="md:flex hidden w-1/2">
          <Image
            src="https://storage.googleapis.com/earls-ws-prod/filer_public_thumbnails/filer_public/2022/06/01/alumni_studiosession563_954_px.jpg__720x720_q80_crop-smart_subsampling-2_upscale.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=earls-prod-storage%40earls-website.iam.gserviceaccount.com%2F20241213%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241213T034620Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a4e86a45a9ef3fddeca94ebe6f9c7bf3424beffdd378b4f189aaeec373b7a6f5a39675e8b720cd04ea950a394952cf5503150ac37edaf0d8d36a5f3342bb844b4ea0e1a64be56a26f303c552177b544cacd6501ea1b6d96c033b2ea8e6dc7c12acf3efbe12f6103a73b7151c3366dd90b5d101933b0a93c6266534bd73e3ad1c7d6d8d04fcc9a83699af110f60995a4087a46546a2cb2834929f52c78d2922c248765e8f5421469c392ba7b649446645253fded0baad915470d019d1412abe5cd70d634e1159784b8405cb74842289a9cda5f18fb91dade9c3fad6b483b50249426381369d4321f3da424311995dc1f94dc26b89029c3d94024120dd5490d987"
            alt="Subscribe"
            width={500}
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
