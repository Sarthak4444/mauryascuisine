"use client";
import React from "react";
import Image from "next/image";
import Map from "../public/images/Map.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Maps() {
  return (
    <>
      <div className="bg-black text-white sm:p-20 p-8">
        <div className="max-w-[1250px] mx-auto">
          <p className="text-5xl font-[600] mb-8">Our Location</p>
          <div className="bg-[#ebebeb] w-full rounded-2xl flex lg:flex-row flex-col">
            <div className="rounded-tl-2xl lg:w-2/5 w-full rounded-bl-2xl">
              <TransformWrapper>
                <TransformComponent>
                  <Image src={Map} alt="Map" className="rounded-2xl w-full" />
                </TransformComponent>
              </TransformWrapper>
            </div>
            <div className="sm:p-8 p-4 lg:w-3/5 w-full text-black flex flex-col justify-between">
              <div className="flex flex-col flex-1 lg:gap-0 gap-8 justify-between border-b-[2px] pb-4 px-3 border-stone-400">
                <div>
                  <p className="text-[17px] text-[#686868] font-semibold">
                    Maurya's Craft Cocktails & Kitchen
                  </p>
                  <p className="text-[17px] font-semibold">Kamloops BC</p>
                </div>
                <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between">
                  <div>
                    <p className="text-[17px] text-[#686868] font-semibold">
                      Address
                    </p>
                    <p className="text-[17px] font-semibold">
                      165 Victoria St <br /> V2C 1Z4
                    </p>
                  </div>
                  <div>
                    <p className="text-[17px] text-[#686868] font-semibold">
                      Contact
                    </p>
                    <p className="text-[17px] font-semibold">
                      +1 250 377 4969 <br /> mauryascuisine@gmail.com
                    </p>
                  </div>
                  <div>
                   <a target="_blank" href="https://www.google.com/search?sa=X&sca_esv=dabdc9c3aed4aa80&biw=1366&bih=679&sxsrf=ADLYWILI6Ie7G3Lmo9jrrdUqcmH7V49xgg:1733768494889&q=maurya%27s+rest.bar.banquet+hours&ludocid=233481353164456671&ved=2ahUKEwiEzIr6ppuKAxWLCjQIHeXsF4AQ6BN6BAhHEBY">
                      <p className="text-[17px] text-[#686868] font-semibold">
                        See hours <i className="fa-regular fa-clock"></i>
                      </p>
                    </a>
                    <p className="text-[17px] font-semibold">
                      Opens at <br /> 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row pt-4 px-3 justify-between items-center">
                <a
                  href="https://maps.app.goo.gl/MMHohMKzri9VpG8Y6"
                  target="_blank"
                >
                  <button className="bg-transparent sm:p-4 px-4 p-3 sm:px-8 sm:text-xl text-base font-semibold flex items-center border-[1px] border-[#969696] text-black hover:bg-neutral-800 hover:text-white transition-all duration-400">
                    Get Directions &nbsp;
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </a>
                <button className="bg-[#d88728] sm:p-4 px-7 p-3 sm:px-11 sm:text-xl text-base font-semibold text-white hover:scale-105 transition-all duration-500">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maps;
