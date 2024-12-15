"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Careers() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [date, setDate] = useState(null);

  const openForm = () => {
    setIsFormOpen(true);
  };
  return (
    <>
      <section className="h-fit max-w-[1250px] mx-auto p-16 pb-10 text-center">
        <p className="text-base font-[700] mb-10">Life at Maurya's</p>
        <p className="text-5xl">
          SAVOUR. CONNECT.{" "}
          <span className="text-[#d88728] font-bold">GROW.</span>
        </p>
        <div className="flex flex-col lg:flex-row justify-center p-5 gap-5 lg:gap-12 items-center ">
          <Image
            src="https://www.cactusclubcafe.com/wp-content/uploads/2024/10/PromoBlock_HalfPrice_Wine-copy-7-1536x1536.jpg"
            className="lg:w-1/2 w-full ml-12 lg:ml-0 lg:mt-40 mt-10 p-5"
            alt="drink"
            width={500}
            loading="lazy"
            height={600}
          />
          <Image
            src="https://www.cactusclubcafe.com/wp-content/uploads/2024/10/PromoBlock-copy-8-1536x1536.jpg"
            className="lg:w-1/2 w-full p-5 mr-12 lg:mr-0"
            alt="drink"
            width={500}
            loading="lazy"
            height={600}
          />
        </div>
      </section>
      <section className="h-fit max-w-[1250px] mx-auto md:p-20 p-6 text-center">
        <p className="text-2xl font-extrabold mb-8 tracking-wider">
          MORE THAN A PLACE TO DINE
        </p>
        <p className="text-xl tracking-wider leading-10 mb-8">
          At Our Core, We Believe That Creating An Extraordinary Experience
          Starts With Meaningful Connections. The Passion Behind Maurya's, Our
          Genuine Care For Each Guest’s Enjoyment, And Our Dedication To
          Crafting Exceptional Food, Drinks, And Ambiance Define The Essence Of
          Our Existence.
        </p>
        <button
          onClick={openForm}
          className="bg-[#d88728] hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2"
        >
          APPLY NOW
        </button>
      </section>
      <form
        className={`${
          isFormOpen ? "block" : "hidden"
        } h-fit max-w-[1250px] mx-auto md:p-20 p-6 pb-10 text-center flex flex-col gap-6 w-full`}
      >
        <p className="text-2xl font-extrabold mb-8 tracking-wider">
          Application Form
        </p>
        <input
          className="p-2 w-full border-[1px] focus:outline-none border-gray-300 text-gray-800 rounded-md text-lg font-semibold"
          type="text"
          required
          placeholder="First Name"
        />
        <input
          className="p-2 w-full border-[1px] focus:outline-none border-gray-300 text-gray-800 rounded-md text-lg font-semibold"
          type="text"
          required
          placeholder="Last Name"
        />
        <input
          className="p-2 w-full border-[1px] focus:outline-none border-gray-300 text-gray-800 rounded-md text-lg font-semibold"
          type="email"
          required
          placeholder="Email"
        />
        <PhoneInput
          defaultCountry="CA"
          placeholder="Phone Number"
          name="phone"
          required
          className="p-2 w-full border-[1px] focus:outline-none border-gray-300 text-gray-800 rounded-md text-lg font-semibold"
        />
        <p className="text-xl -mb-4 tracking-wide text-left">Resume</p>
        <input type="file" required />
        <p className="text-xl -mb-4 tracking-wide text-left">Cover Letter</p>
        <input type="file" />
        <Popover>
          <PopoverTrigger className="text-black" asChild>
            <Button
              variant={"outline"}
              className={cn(
                "justify-center text-left text-xl p-2 tracking-wide text-black font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>When can you start?</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 text-black">
            <Calendar
              mode="single"
              className="text-black"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <p className="text-2xl font-semibold -mb-4 tracking-wide text-left">
          Weekly Availability
        </p>
        <div className="text-left text-xl">
          <input
            className="mr-2"
            type="checkbox"
            id="monday"
            name="monday"
            value="Monday"
          />
          <label htmlFor="monday">Monday</label>
          <br />
          <input
            className="mr-2"
            type="checkbox"
            id="tuesday"
            name="tuesday"
            value="Tuesday"
          />
          <label htmlFor="tuesday">Tuesday</label>
          <br />
          <input
            className="mr-2"
            type="checkbox"
            id="wednesday"
            name="wednesday"
            value="Wednesday"
          />
          <label htmlFor="wednesday">Wednesday</label>
          <br />
          <input
            className="mr-2"
            type="checkbox"
            id="thursday"
            name="thursday"
            value="Thursday"
          />
          <label htmlFor="thursday">Thursday</label>
          <br />
          <input
            className="mr-2"
            type="checkbox"
            id="friday"
            name="friday"
            value="Friday"
          />
          <label htmlFor="friday">Friday</label>
          <br />
          <input
            className="mr-2"
            type="checkbox"
            id="saturday"
            name="saturday"
            value="Saturday"
          />
          <label htmlFor="saturday">Saturday</label>
          <br />
          <input
            className="mr-2"
            type="checkbox"
            id="sunday"
            name="sunday"
            value="Sunday"
          />
          <label htmlFor="sunday">Sunday</label>
        </div>
        <p className="text-2xl -mb-4 font-semibold tracking-wide text-left">
          Questionnaire
        </p>
        <div className="flex justify-items-start flex-col">
          <label className="text-xl tracking-wide text-left">
            Are you a current or former employee at Maurya's?
          </label>
          <select
            required
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected disabled></option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="flex justify-items-start flex-col">
          <label className="text-xl tracking-wide text-left">
            Are you legally entitled to work in BC?
          </label>
          <select
            required
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected disabled></option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="flex justify-items-start flex-col">
          <label className="text-xl tracking-wide text-left">
            Are you 18 years of age or older?
          </label>
          <select
            required
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected disabled></option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="flex justify-items-start flex-col">
          <label className="text-xl tracking-wide text-left">
            Where did you hear about us?
          </label>
          <select
            required
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected disabled></option>
            <option>Online</option>
            <option>Referral</option>
            <option>Social Media</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex items-start flex-row">
          <input
            className="mr-2 mt-2"
            type="checkbox"
            id="condition"
            name="condition"
            value="condition"
            required
          />
          <label className="text-lg text-left" htmlFor="condition">
            By ticking the box above, I certify that the information provided in
            this application and supporting materials provided by me is true and
            complete. I understand and agree that any falsification,
            misrepresentations, misleading statement or omission of fact either
            on this application, supporting materials, or during the pre-hire
            process will be sufficient reason for the removal of my application
            from consideration for employment or, if employed, immediate
            termination from Maurya's. I have authorized Maurya's or an agent
            acting on its behalf, to collect, use and disclose my personal
            information as contained on this form and supporting materials for
            purposes of verifying this information, obtaining reference
            information and assessing my suitability for employment. I release
            all parties from any liability for any damage which may result from
            furnishing such information.
          </label>
        </div>
        <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#d88728] hover:scale-105 transition-all w-[200px] duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2"
        >
          Submit
        </button></div>
      </form>
    </>
  );
}

export default Careers;
