import React, { useState } from "react";
import Image from "next/image";
import drinkThree from "../public/images/drinkThree.png";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function Subscribe({ closeSubscribe }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (res.ok) {
        setLoading(false);
        closeSubscribe();
      } else {
        setLoading(false);
        setError(data.error || "Something went wrong.");
      }
    } catch (error) {
      setLoading(false);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="fixed inset-0 bg-[#00000096] flex justify-center items-center z-50">
      <div className="bg-white flex flex-row justify-center items-center md:mx-0 mx-10 max-w-[800px] relative">
        <div className="md:flex hidden w-1/2">
          <Image
            src={drinkThree}
            alt="Subscribe"
            width={500}
            loading="lazy"
            height={500}
          />
        </div>
        <div className="md:w-1/2 w-full flex text-center p-8 flex-col justify-center items-center text-black">
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
          <form onSubmit={handleSubscribe} className="flex flex-col justify-center items-center gap-4 mt-4">
            <input
              className="p-2 w-[250px] border-[1px] focus:outline-none border-gray-300 text-gray-800 rounded-md text-lg font-semibold"
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-2 w-[250px] border-[1px] focus:outline-none border-gray-300 text-gray-800 rounded-md text-lg font-semibold"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <hr className="h-[2px] w-[250px] bg-[#c7b8a7]" />
            <Button
              className="bg-[#d88728] w-[250px] rounded-sm hover:scale-105 transition-all duration-500 text-white p-2 text-center text-xl font-bold"
              type="submit"
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Subscribe
            </Button>
          </form>
          {error && (
              <p className="text-center text-base -mb-4 mt-2 text-red-500">{error}</p>
            )}
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
