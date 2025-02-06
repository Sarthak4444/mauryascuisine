"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Atul from "../../../public/images/Atul.png";
import Dilip from "../../../public/images/Dilip.png";
import ButterChicken from "../../../public/images/ButterChicken.png";
import drinkOne from "../../../public/images/drinkOne.png";
import drinkTwo from "../../../public/images/drinkTwo.png";
import AlooParantha from "../../../public/images/AlooParantha.png";

function About() {
  const list = [
    {
      Title: "Dilip Maurya — Owner",
      Image: Dilip,
    },
    {
      Title: "Atul Maurya — Beverage Director ",
      Image: Atul,
    },
  ];

  const [person, setPerson] = useState(list[0]);

  return (
    <>
      <section className="w-full flex text-white justify-center items-center h-[80vh] bg-[url('https://www.cactusclubcafe.com/wp-content/uploads/2022/11/112522_STSQ_1600x647.jpg')]">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-5xl text-center px-2 tracking-wide font-[600]">
            Our Story
          </p>
          <p className="text-sm font-[600]">
            A collection of independently compelling restaurants.
          </p>
        </div>
      </section>
      <section className="h-fit max-w-[1250px] mx-auto md:p-20 p-6 text-center">
        <p className="text-2xl font-extrabold mb-8 tracking-wider">
          OUR FAMILY RUN BUSINESS
        </p>
        <p className="text-xl tracking-wider leading-10 mb-8">
          At Our Core, We Believe That Creating An Extraordinary Experience
          Starts With Meaningful Connections. The Passion Behind Maurya's, Our
          Genuine Care For Each Guest’s Enjoyment, And Our Dedication To
          Crafting Exceptional Food, Drinks, And Ambiance Define The Essence Of
          Our Existence.
        </p>
      </section>
      <section className="h-fit w-full bg-[#8d8c85]">
        <div className="max-w-[1250px] mx-auto md:p-20 p-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <p className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-14 tracking-wider">
              Innovative Kitchen & Craft Bar
            </p>
            <div className="flex flex-col gap-4">
              {list.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setPerson(item)}
                  className="text-xl md:text-2xl font-bold tracking-wider text-white"
                >
                  {item.Title}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={person.Image}
              alt={person.Title}
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-full p-8"
            />
          </div>
        </div>
      </section>
      <section className="h-fit max-w-[1250px] mx-auto md:p-20 p-6 text-center flex flex-row justify-center items-center">
        <div className="w-1/2">
        <Image
              src={drinkOne}
              alt="drink"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-[500px] object-cover p-3 md:p-14"
            />
        <Image
              src={AlooParantha}
              alt="drink"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-full p-3 md:p-14"
            />
            <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#d88728]">FOOD</p>
                <p className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#d88728]">+</p>
                <p className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#d88728]">COCKTAILS</p>
            </div>
            </div>
        <div className="w-1/2">
        <Image
              src={ButterChicken}
              alt="drink"
              width={500}
              loading="lazy"
              height={500}
              className="w-full h-full p-3 md:p-14"
            />
        <Image
              src={drinkTwo}
              alt="drink"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-[500px] object-cover p-3 md:p-14"
            />
        </div>
      </section>
      <section className="h-fit max-w-[1250px] mx-auto md:p-20 p-6 text-center">
        <p className="text-2xl font-extrabold mb-8 tracking-wider">
        WHERE EVERY MOMENT IS MADE MEMORABLE
        </p>
        <p className="text-xl tracking-wider leading-10 mb-8">
        Located in Kamloops, Maurya’s Craft Bar and Kitchen is your destination for premium casual dining. We blend the bold flavors of Lucknowi cuisine with Canadian comfort, creating a unique and contemporary menu. Our passion for hospitality, combined with our one-of-a-kind craft cocktails, offers a memorable dining experience in a welcoming, vibrant setting.
        </p>
      </section>
    </>
  );
}

export default About;
