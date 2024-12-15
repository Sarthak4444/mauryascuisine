import React from "react";
import Image from "next/image";
import FAQs from "@/components/FAQs";

function ContactUs() {
  const faqs = [
    {
      question: "Where are you located?",
      answer:
        "In the heart of Downtown, Kamloops 100 block oposite to Royal Bank. 165 Victoria St.",
    },
    {
      question: "What are you known for?",
      answer:
        "We are known for the following : breads, Champagne, Cocktails, Happy hour, Lunch, Dinner, Butter chicken, Maurya's cola, Mango Lassi, Best chutnies, Lucknow Kebabs, Delivery, Takeouts.",
    },
  ];

  return (
    <>
      <section className="w-full flex mb-16 text-white justify-center items-center h-[80vh] bg-[url('https://www.cactusclubcafe.com/wp-content/uploads/2024/11/111424_PDE_HolidayCampaign_PromoBlock_1200x800.jpg')]">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-5xl text-center px-2 tracking-wide font-[600]">
            Let's get in touch
          </p>
          <p className="text-sm font-[600]">Have A Question For Us?</p>
        </div>
      </section>
      <div className="flex flex-col justify-center px-4 text-center items-center w-full">
        <p className="md:text-4xl text-3xl font-bold">We’d Love to Hear From You!</p>
        <p className="text-xl font-semibold text-[#d88728]">
          Your satisfaction is our recipe for success. Let us know how we’re
          doing.
        </p>
      </div>
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
          <p className="text-5xl font-bold text-[#d88728]">Contact Us</p>
          <p className="text-lg font-semibold mt-8 mb-3">
            165 Victoria St, Kamloops, BC, Canada V2C1Z4 Downtown Victoria
            Street, 100 Block
          </p>
          <a href="tel:2503774969" className="text-lg font-semibold">+1 250-377-4969</a>
        </div>
      </section>
      <FAQs faqs={faqs} />
    </>
  );
}

export default ContactUs;
