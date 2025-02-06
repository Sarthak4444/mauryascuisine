import React from "react";
import { useState } from "react";
import OrderNow from "../OrderNow";

function ThankYou({ closeDetails, closeThankYou, people, date, time }) {
  const [isOrderNowOpen, setIsOrderNowOpen] = useState(false);

  const handleClose = () => {
    closeDetails();
    closeThankYou();
    window.location.reload(true);
  };

  const handleRedirect = () => {
    setIsOrderNowOpen(true);
  };

  return (
    <div className="fixed inset-0 bg-[#00000096] flex justify-center items-center z-50">
      {isOrderNowOpen && <OrderNow closeOrderNow={closeOrderNow} />}
      <div className="bg-white text-black p-6 rounded-sm max-w-[300px] md:max-w-[500px]">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="md:w-1/2 w-full md:flex px-3 flex-col justify-center items-center border-[#d88728] md:border-r-2 border-r-0 border-b-2 md:border-b-0">
            <div>
              <p className="text-lg font-semibold mb-2">
                <i className="fa-solid fa-users mr-2 text-base"></i>
                {people}
                <span className="font-bold"> People</span>
              </p>
              <p className="text-lg font-semibold mb-2">
                <i className="fa-regular fa-calendar mr-2 text-xl"></i>
                {date instanceof Date
                  ? date.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "2-digit",
                    })
                  : date}
              </p>
              <p className="text-lg font-semibold mb-2">
                <i className="fa-regular fa-clock mr-2"></i>
                {time instanceof Date ? time.toLocaleTimeString() : time}
                <span>:00 PM</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full md:text px-3-center leading-5 pl-0 md:pl-4 p-2">
            Thank you for booking your table with Maurya's. When you arrive for
            your reservation please check in at the front door and let the host
            Know the reservation name.
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-4 md:gap-8">
          <button
            onClick={handleRedirect}
            className="bg-[#d88728] rounded-sm hover:scale-105 transition-all duration-500 text-white p-2 md:px-8 px-3 text-center text-xl font-bold mt-4"
          >
            Order Now
          </button>
          <button
            onClick={handleClose}
            className="bg-[#d88728] rounded-sm hover:scale-105 transition-all duration-500 text-white p-2 md:px-8 px-5 text-center text-xl font-bold mt-4"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
