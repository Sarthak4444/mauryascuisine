"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import Details from "./Details";

function SideMenu({ closeSideMenu }) {
  const [date, setDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [time, setTime] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [error, setError] = useState("");

  const toggleDetails = () => {
    if (!numberOfPeople || !date || !time) {
      setError("Please fill out all fields before confirming.");
      return;
    }
    setError("");
    setIsDetailsOpen(true);
  };

  return (
    <div className="h-screen bg-[#00000096] relative text-white md:w-[500px] w-screen">
      {isDetailsOpen && <Details numberOfPeople={numberOfPeople} date={date} time={time} />}
      <i
        onClick={closeSideMenu}
        className="fa-solid fa-xmark text-xl absolute top-5 right-5 cursor-pointer"
      ></i>
      <div className="bg-black border-b-[1px] border-[#d88728] py-4 text-xl text-center">
        Private Dining Reservation
      </div>
      <div className="bg-black p-10 flex flex-col justify-center items-center gap-4">
        <Image src={Logo} alt="Logo" width={150} height={150} />
        <div
          className="flex flex-row
         gap-4 md:text-sm text-[10px]"
        >
          <span>
            <i className="fa-solid fa-location-dot text-[#d88728]"></i>
            &nbsp;
            <a
              href="https://maps.app.goo.gl/MMHohMKzri9VpG8Y6"
              target="_blank"
              rel="noopener noreferrer"
            >
              165 Victoria Street
            </a>
          </span>
          <span>
            <i className="fa-solid fa-phone text-[#d88728]"></i>
            &nbsp;
            <a href="tel:2503774969">250 377 4969</a>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 pt-20">
        <Select onValueChange={(value) => setNumberOfPeople(value)}>
          <SelectTrigger className="w-[280px] bg-white text-neutral-500 text-center px-16">
            <i className="fa-regular fa-user text-neutral-700"></i>
            <SelectValue placeholder="Number of People" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
              <SelectItem className="text-black" value={num.toString()} key={num}>
                <p className="text-black">Table for {num} people</p>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger className="text-black" asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-center text-center text-black font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
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
        <Select onValueChange={(value) => setTime(value)}>
          <SelectTrigger className="w-[280px] bg-white text-neutral-500 text-center px-[100px]">
            <i className="fa-regular fa-clock text-neutral-700"></i>
            <SelectValue placeholder="Time" />
          </SelectTrigger>
          <SelectContent>
            {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <SelectItem className="text-black" value={num.toString()} key={num}>
                <p className="text-black">{num} PM</p>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <hr width="55%" size="1"></hr>
        <button
          onClick={toggleDetails}
          className="bg-[#d88728] w-[280px] font-semibold px-4 py-2 rounded"
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
