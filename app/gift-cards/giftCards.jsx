import React from "react";
import Image from "next/image";
import FAQs from "@/components/FAQs";

import Pattern from "../../public/images/Pattern.png";

function GiftCards() {
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
      <section className="h-fit max-w-[1100px] mx-auto p-6 md:p-16">
        <div className="flex flex-col justify-center items-center">
          <p className="text-base font-[700] mb-10">
            A Thoughtful Gift for You and Your Loved Ones
          </p>
          <p className="md:text-3xl text-xl p-4 md:px-8 text-right tracking-wider ">
            <span className="text-[#d88728] font-[600]">
              Special Occasions.{" "}
            </span>
            Birthdays. Holiday Season. Anniversaries. Treat Some One and{" "}
            <span className="text-[#d88728] font-[600]">More.</span>
          </p>
        </div>
        <div className="flex justify-center items-center w-fit relative mx-auto mt-10">
          <Image
            className="rounded-2xl object-cover h-[150px] w-[250px] sm:h-[200px] sm:w-[300px] md:h-[300px] md:w-[500px]"
            src="https://storage.googleapis.com/earls-ws-prod/filer_public_thumbnails/filer_public/2022/03/07/giftcards_960x720px_1.png__773x583_crop-smart_subsampling-2_upscale.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=earls-prod-storage%40earls-website.iam.gserviceaccount.com%2F20241214%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241214T171834Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=bc904f718648c2ff5206616ab2225e49a78559dd22880eae8815e80e4f2e5bc377aa32113073b9a07e236342abe40bbd444ff200c04ea078b898cc70c1a459a7c22e303a86c0180d3a582091318310c56dd2eddf72985099e47ec3b0b8aafcaca6705c32b539a0d0b95c903a100d44380fdb873e65164c7bcbdfeb73a5d05d9bc2f1a756b237976d7c77f554d794d9192f05dd23f208e16c9f9cdf7448661091de34f9467ff3913a4880c781f27e6420ad6f3555f5411531d206091d5003452a2e4396cf53113a731e7be24f8a0b1f16f6314180329c77bc7905edd7e1243840f7c357362324165bfc651ecd68703c7feff37e389a975bfaece47e28ebd20cb4"
            alt="drink"
            width={500}
            height={300}
            loading="lazy"
          />
          <Image
            src={Pattern}
            alt="Pattern"
            width={250}
            height={280}
            className="absolute -right-6 sm:-right-10 md:-right-20 -z-10 h-[130px] w-[170px] sm:h-[180px] md:h-[280px] sm:w-[200px] md:w-[300px]"
          />
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-[#d88728] mt-16 mx-auto hover:scale-105 transition-all duration-500 text-white px-8 py-2 text-xl font-extrabold tracking-wider">
            BUY NOW
          </button>
        </div>
      </section>
      <section className="h-fit max-w-[1250px] mx-auto p-8 pb-10 text-center">
      <p className="text-2xl tracking-wider font-[700] mb-8">
      MORE THAN JUST A GIFT CARD
          </p>
          <p className="text-xl font-semibold my-8 text-center tracking-wider leading-10 text-neutral-600 mb-8">
          From Our Vibrant Dishes To Indulgent Handcrafted Cocktails, A Maurya's Gift Card Opens The Door To A World Of Unforgettable Tastes And Experiences. Treat The Foodie In Your Life To Something Truly Special.
            </p>
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 gap-12 my-10">
          <div>
            <Image
              src="https://www.cactusclubcafe.com/wp-content/uploads/2024/10/110124_HolidayGC_GiftCardPageCells_750x500.png"
              alt="phone"
              width={300}
              height={300}
            />
            <p className="text-2xl text-[#d88728] text-center mt-6">
              DIGITAL GIFT CARDS
            </p>
          </div>
          <div>
            <Image
              src="https://www.cactusclubcafe.com/wp-content/uploads/2024/10/110124_HolidayGC_GiftCardPageCells_750x500-04.png"
              alt="phone"
              width={300}
              height={300}
            />
            <button className="bg-[#d88728] mt-6 hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2">
              CHECK BALANCE
            </button>
          </div>
        </div>
      </section>
      <div className="bg-black h-[100px] mt-4"></div>
      <section className="h-fit max-w-[1250px] mx-auto md:p-20 p-6 flex justify-center items-center lg:flex-row flex-col gap-10">
                <div className="w-full md:w-1/2">
                  <Image
                    src="https://www.cactusclubcafe.com/wp-content/uploads/2024/12/110124_HolidayGC_SecondPulse_PromoBlock_GC.jpg"
                    alt="Rewards"
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center flex-col text-center">
                  <p className="text-4xl">Delicious Maurya's Rewards</p>
                  <p className="text-lg font-semibold my-7">
                    Join our rewards program to earn points, get free items and stay
                    up to date with us
                  </p>
                  <button className="bg-[#d88728] sm:p-4 px-7 p-3 sm:px-11 sm:text-xl text-base font-semibold text-white hover:scale-105 transition-all duration-500">
                    LEARN MORE <i className="fa-solid fa-chevron-right ml-2"></i>
                  </button>
                </div>
              </section>
      <FAQs faqs={faqs} />
    </>
  );
}

export default GiftCards;
