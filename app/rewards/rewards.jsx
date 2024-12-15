"use client";
import React from "react";
import Image from "next/image";
import drinkTwo from "../../public/images/drinkTwo.png";
import Pattern from "../../public/images/Pattern.png";
import { useState } from "react";
import FAQs from "@/components/FAQs";

function Rewards() {
  const items = [
    {
      points: 50,
      Image:
        "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photos/6ecd5fe4-b7ac-4f6f-bca6-45acfabfebff-retina-large-jpeg",
      Title: "Delicious Samosas",
      Description:
        "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favourite syrup.",
    },
    {
      points: 100,
      Image:
        "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/b9a5dc0f-178e-4584-8ddb-733f399f926a-retina-large.jpg",
      Title: "Butter Chicken",
      Description:
        "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favourite syrup.",
    },
    {
      points: 200,
      Image:
        "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/5834889f-54d6-4a3a-948f-963832c56dd0-retina-large.jpg",
      Title: "Garlic Bread with Cheese Dip",
      Description:
        "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favourite syrup.",
    },
    {
      points: 400,
      Image:
        "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/88df9562-89be-4a19-a741-980da198004d-0fe50de3-c87d-4b3c-92d1-928633a49d0b-retina-large.JPG",
      Title: "Customise Your Drinks",
      Description:
        "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favourite syrup.",
    },
    {
      points: 500,
      Image:
        "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/f2d1252c-d1b7-4f59-9084-6c5363889816-retina-large.jpg",
      Title: "Specialty Cocktails",
      Description:
        "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favourite syrup.",
    },
  ];

  const [currentItem, setCurrentItem] = useState(items[0]);

  const faqs = [
    {
      question: 'What amount can i load my digital gift card for?',
      answer: "Maurya's gift cards can be loaded at any denomination from $10 to $500 per card.",
    },
    {
      question: 'What are you known for?',
      answer: "We are known for the following : breads, Champagne, Cocktails, Happy hour, Lunch, Dinner, Butter chicken, Maurya's cola, Mango Lassi, Best chutnies, Lucknow Kebabs, Delivery, Takeouts.",
    },
  ];


  return (
    <>
      <section className="h-fit max-w-[1100px] mx-auto p-16 pb-10 text-center">
        <p className="sm:text-5xl text-3xl text-left max-w-[550px] font-[700] sm:leading-[60px] leading-[30px] mb-20 tracking-wider">
          The Art of Rewarding the{" "}
          <span className="text-[#d88728]">Unexpected</span>
        </p>
        <div className="flex md:flex-row flex-col-reverse justify-between gap-10 items-center">
          <div className="flex flex-col gap-8 md:w-1/2 w-full">
            <p className="text-xl font-semibold text-left tracking-wider pr-6 leading-10 text-neutral-600 mb-8">
              Enjoy Exclusive Offers, Handcrafted Rewards, And Experiences That
              Elevate The Everyday Into The Extraordinary.
            </p>
            <button className="bg-[#d88728] w-[200px] hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2">
              JOIN NOW
            </button>
          </div>
          <div className="md:w-1/2 w-full md:mt-0 sm:mt-10 mt-4">
            <div className="relative w-fit mx-auto">
              <Image
                src={drinkTwo}
                alt="drink"
                loading="lazy"
                width={300}
                height={300}
                className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] object-cover"
              />
              <Image
                className="absolute -z-10 sm:-right-24 sm:-top-24 -right-16 -top-16 md:w-[300px] md:h-[300px] w-[200px] h-[200px]"
                src={Pattern}
                alt="pattern"
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#ffeac2]">
        <div className="h-fit  max-w-[1250px] mx-auto px-6 py-16 pb-10 text-center">
          <p className="text-4xl font-[700] mb-8">
            Unlock Your Favorites—On Us
          </p>
          <p className="text-xl text-neutral-600 tracking-wider mb-5">
            With Every Visit, You're One Bite Closer To A Well-Deserved Treat.{" "}
          </p>
          <p className="text-xl text-[#d88728] tracking-wider ">
            Collect, Redeem, And Enjoy! One Reward Per Dollar.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-row md:gap-8 gap-4 justify-around items-center mb-16">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentItem(item)}
                className={`sm:w-16 sm:h-16 w-12 h-12 flex items-center justify-center rounded-full text-base sm:text-xl font-bold ${
                  currentItem.points === item.points
                    ? "bg-orange-600 text-white ring-2 ring-orange-300"
                    : "bg-orange-500 text-white hover:bg-orange-400"
                }`}
              >
                {item.points}
              </button>
            ))}
          </div>
          <div>
            <div className="flex justify-center items-center md:flex-row gap-8 flex-col mb-16">
              <img
                src={currentItem.Image}
                alt={currentItem.Title}
                className="w-[170px] h-[170px] object-cover rounded-full"
              />

              <div className=" w-[250px]">
                <h2 className="text-xl md:text-left text-center font-bold mb-2">
                  {currentItem.Title}
                </h2>
                <p className="text-xl md:text-left text-center font-light leading-5 text-gray-600">
                  {currentItem.Description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-fit max-w-[1250px] mx-auto p-16 pb-10 text-center">
        <p className="text-4xl text-center font-bold mb-8">
          Rewards Without Limits
        </p>
        <div className="flex md:flex-row flex-col gap-16 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="h-[200px] flex justify-center items-end">
              <Image
                src="data:image/jpeg;base64,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"
                alt="Cake"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <p className="text-lg font-semibold">Birthday Freebies</p>
            <p className="w-[350px] text-xl mt-4 tracking-wider leading-5 font-light">
              Make your drink just right with an extra espresso shot, dairy
              substitute or a dash of your favourite syrup.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="h-[200px] flex justify-center items-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBnuwey1L1z4s9QlCWfqqeN2xJ6XUbQiKRA&s"
                alt="phone"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <p className="text-lg font-semibold">Order & Pay ahead</p>
            <p className="w-[350px] text-xl mt-4 tracking-wider leading-5 font-light">
              Make your drink just right with an extra espresso shot, dairy
              substitute or a dash of your favourite syrup.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-black h-[100px] mt-4"></div>
      <section className="h-fit max-w-[1250px] mx-auto p-16 pb-10 text-center">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 gap-12 my-10">
          <div>
            <Image src="https://www.cactusclubcafe.com/wp-content/uploads/2024/10/110124_HolidayGC_GiftCardPageCells_750x500.png" alt="phone" width={300} height={300} loading="lazy"/>
        <p className="text-2xl text-[#d88728] text-center mt-6">DIGITAL GIFT CARDS</p>
          </div>
          <div>
            <Image src="https://www.cactusclubcafe.com/wp-content/uploads/2024/10/110124_HolidayGC_GiftCardPageCells_750x500-04.png" alt="phone" width={300} height={300} loading="lazy"/>
        <button className="bg-[#d88728] mt-6 hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2">CHECK BALANCE</button></div>
        </div>
      </section>
      <FAQs faqs={faqs} />
    </>
  );
}

export default Rewards;
