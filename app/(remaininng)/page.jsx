"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Atul from "../../public/images/Atul.png";
import Dilip from "../../public/images/Dilip.png";
import FAQs from "@/components/FAQs";
import SideMenu from "@/components/Reserve_Table_Modals/SideMenu";
import { useState } from "react";

export default function Home() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  }

  const itemList = [
    {
      url: "https://www.cactusclubcafe.com/wp-content/uploads/2024/11/HPCarousel_450x600_PeppercornRibeye-1536x1024.jpg",
      name: "Peppercorn Ribeye",
    },
    {
      url: "https://www.cactusclubcafe.com/wp-content/uploads/2024/11/112624_HomepageCar_OF-2x.jpg",
      name: "Old Fashioned",
    },
    {
      url: "https://www.cactusclubcafe.com/wp-content/uploads/2024/11/HPCarousel_600x600_RedThaiCurry.jpg",
      name: "Thai Red Curry",
    },
    {
      url: "https://www.cactusclubcafe.com/wp-content/uploads/2024/11/112624_HomepageCar_ENC-1x.jpg",
      name: "Eggnog Cheesecake",
    },
    {
      url: "https://www.cactusclubcafe.com/wp-content/uploads/2024/11/112624_HomepageCar_SF-1x.jpg",
      name: "Spiked Frap",
    },
  ];

  const cartList = [
    {
      url: "/images/AlooParantha.png",
      name: "Aloo Parantha",
      description:
        "Flatbreads made with whole wheat flour, boiled potatoes, spices & herbs",
    },
    {
      url: "/images/AlooParantha.png",
      name: "Aloo Parantha",
      description:
        "Flatbreads made with whole wheat flour, boiled potatoes, spices & herbs",
    },
    {
      url: "/images/AlooParantha.png",
      name: "Aloo Parantha",
      description:
        "Flatbreads made with whole wheat flour, boiled potatoes, spices & herbs",
    },
    {
      url: "/images/AlooParantha.png",
      name: "Aloo Parantha",
      description:
        "Flatbreads made with whole wheat flour, boiled potatoes, spices & herbs",
    },
    {
      url: "/images/AlooParantha.png",
      name: "Aloo Parantha",
      description:
        "Flatbreads made with whole wheat flour, boiled potatoes, spices & herbs",
    },
    {
      url: "/images/AlooParantha.png",
      name: "Aloo Parantha",
      description:
        "Flatbreads made with whole wheat flour, boiled potatoes, spices & herbs",
    },
    {
      url: "/images/AlooParantha.png",
      name: "Aloo Parantha",
      description:
        "Flatbreads made with whole wheat flour, boiled potatoes, spices & herbs",
    },
    {
      url: "/images/AlooParantha.png",
      name: "Aloo Parantha",
      description:
        "Flatbreads made with whole wheat flour, boiled potatoes, spices & herbs",
    },
  ];

  const faqs = [
    {
      question: 'Where are you located?',
      answer: 'In the heart of Downtown, Kamloops 100 block oposite to Royal Bank. 165 Victoria St.',
    },
    {
      question: 'What are you known for?',
      answer: "We are known for the following : breads, Champagne, Cocktails, Happy hour, Lunch, Dinner, Butter chicken, Maurya's cola, Mango Lassi, Best chutnies, Lucknow Kebabs, Delivery, Takeouts.",
    },
  ];

  return (
    <>
      <div>
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
              src="https://player.vimeo.com/progressive_redirect/playback/1033674868/rendition/540p/file.mp4?loc=external&log_user=0&signature=992c3305174cf4f25f3103dccc68f1026c780b62819be483e248d7cf6306b4a3"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col justify-center items-center gap-6">
            <p className="text-5xl tracking-wide font-[600]">Long Live Life</p>
            <p className="text-sm font-[600]">
              Call Your Friends & Families, Start The Fun
            </p>
            <button onClick={toggleSideMenu} className="text-xl tracking-widest font-[600] underline underline-offset-4 hover:scale-105 transition-all duration-500">
              RESERVE NOW
            </button>
          </div>
        </section>
        <section className="h-fit max-w-[1250px] mx-auto md:p-20 p-6 pb-10 md:pt-32 pt-20">
          <h1 className="text-5xl font-[300]">Most Popular Cocktails & Food</h1>
          <p className="my-5 text-xl font-[300]">
            Try the new creations our guest can't stop talking about
          </p>
          <button className="underline-offset-4 underline tracking-widest mb-10 text-lg">
            VIEW MENU
          </button>
          <Carousel
            opts={{
              align: "start",
              loop: "true",
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {itemList.map((item, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                  <Link href="/">
                    <div>
                      <Image
                        src={item.url}
                        alt={item.name}
                        loading="lazy"
                        width={500}
                        height={500}
                        className="object-cover w-[500px] h-[250px] sm:w-[300px] md:h-[270px] md:w-[400px] lg:h-[350px] xl:h-[400px]"
                      />
                      <p className="font-bold mt-2 text-lg hover:underline underline-offset-4">
                        {item.name}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="bg-[#c8c8c8] h-fit p-6 md:p-28">
          <div className="bg-[url('/images/Background.png')] max-w-[1250px] mx-auto w-full bg-cover bg-center bg-no-repeat p-8 md:p-16 flex flex-col lg:flex-row gap-10">
            <div className="bg-[#f6f6f6b7] backdrop-blur-lg rounded-2xl p-10 py-10 lg:w-1/2 w-full flex flex-col justify-center gap-10">
              <p className="text-5xl font-bold">
                Order From <br /> Our Website
              </p>
              <p className="text-lg font-semibold leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                cum tempore officia tempora ipsa accusamus doloremque animi
                dolore quis eos ad dolor, distinctio beatae numquam veniam
                deserunt consectetur magni.
              </p>
              <button className="bg-[#d88728] w-fit sm:p-4 px-7 p-3 sm:px-11 sm:text-xl text-base font-semibold text-white hover:scale-105 transition-all duration-500 rounded-sm">
                Order Now
              </button>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* <rw-widget-grid data-rw-grid="44467"></rw-widget-grid> */}
            </div>
          </div>
        </section>
        <section className="h-fit max-w-[1250px] mx-auto md:p-20 p-6 pb-10 md:pt-32 pt-20 flex justify-center items-center flex-col">
          <p className="md:text-6xl text-4xl font-bold">
            Try Our Most Popular Items
          </p>
          <p className="mb-10 mt-6 md:text-2xl text-lg">
            Treat yourself to our must-try list that hae everyone talking
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: "true",
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {cartList.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/6"
                >
                  <div>
                    <Image
                      src={item.url}
                      alt={item.name}
                      loading="lazy"
                      width={30}
                      height={300}
                      className="object-cover w-[300px] h-[220px] rounded-xl"
                    />
                    <p className="font-bold my-1 text-xl">{item.name}</p>
                    <p className="text-base leading-4">{item.description}</p>
                    <button className="bg-[#d88728] mt-2 w-full p-1 px-5 sm:text-xl text-base font-semibold text-white hover:scale-105 transition-all duration-500 rounded-sm">
                      Add to Cart
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
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
        <section className="h-fit max-w-[1250px] mx-auto md:p-20 p-6 flex justify-center items-center flex-col">
          <p className="md:text-6xl text-4xl font-bold text-center">
            Every Guest Leaves Happy
          </p>
          <p className="mb-10 mt-6 md:text-2xl text-lg text-center">
            Born on the West Coast and growing across Canada, Cactus Club Cafe
            is your go-to casual dining restaurant. We offer the best in global
            cuisine using local, fresh ingredients served in a vibrant,
            contemporary setting.
          </p>
          <div className=" flex justify-center items-center md:flex-row flex-col gap-20">
            <div className="w-full md:w-1/2">
              <Image src={Dilip} loading="lazy" alt="Dilip" width={300} height={300} className="rounded-2xl"/>
              <p className="text-xl mt-2 text-center">Founder Dilip</p>
            </div>
            <div className="w-full md:w-1/2">
              <Image src={Atul} loading="lazy" alt="Atul" width={300} height={300} className="rounded-2xl"/>
              <p className="text-xl mt-2 text-center">Mixologist Atul</p>
            </div>
          </div>
        </section>
        <FAQs faqs={faqs} />
      </div>
    </>
  );
}
