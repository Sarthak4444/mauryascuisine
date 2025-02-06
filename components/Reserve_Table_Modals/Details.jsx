"use client";
import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useAuth } from "./../../hooks/useAuth";
import ThankYou from "./ThankYou";
import Password from "./Password";

function Details({ numberOfPeople, date, time, closeDetails }) {
  const [seconds, setSeconds] = useState(300);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, loading } = useAuth();
  const [isThankYou, setIsThankYou] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const logUser = () => {
    setIsLogged(true);
  };

  const closeThankYou = () => {
    setIsThankYou(false);
  };

  const closePassword = () => {
    setIsPassword(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.email) {
        try {
          const response = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }

          const data = await response.json();
          setUserData(data.user);
        } catch (err) {
          setError(err.message);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    if (seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const [formData, setFormData] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
    phone: userData?.number || "",
    occasion: "",
    note: "",
    info1: false,
    info2: false,
  });

  useEffect(() => {
    if (userData) {
      setFormData((prevData) => ({
        ...prevData,
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.number || "",
      }));
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReservation = async () => {
    const data = {
      email: formData.email,
      number: formData.phone,
      name: formData.name,
      occasion: formData.occasion,
      note: formData.note,
      people: numberOfPeople,
      date: date,
      time: time,
    };
    try {
      const response = await fetch("/api/tablereservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "An unexpected error occurred.");
      } else {
        setIsThankYou(true);
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLogged) {
      handleReservation();
    }
  }, [isLogged]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (user) {
      await handleReservation();
    } else {
      setIsPassword(true);
      setIsLoading(false);
    }
  };

  

  return (
    <div className="fixed inset-0 bg-[#00000096] flex justify-center items-center z-50">
      {isThankYou && (
        <ThankYou
          closeDetails={closeDetails}
          closeThankYou={closeThankYou}
          people={numberOfPeople}
          date={date}
          time={time}
        />
      )}
      {isPassword && (
        <Password
          closePassword={closePassword}
          email={formData.email}
          number={formData.phone}
          name={formData.name}
          logUser={logUser}
        />
      )}
      <div className="bg-white text-black p-6 rounded-sm relative">
        <i
          onClick={closeDetails}
          className="fa-solid fa-xmark text-xl absolute top-[5px] right-[5px] cursor-pointer"
        ></i>
        {seconds > 0 ? (
          <div
            className={`p-1 px-3 text-base text-center text-black bg-[#6e95ff] ${
              seconds <= 60 && seconds > 30 ? "bg-[#ffd95d]" : ""
            } ${seconds <= 30 ? "bg-[#ff8282]" : ""}`}
          >
            This Table will hold for
            <span className="font-bold"> {formatTime(seconds)}</span>{" "}
            {seconds > 60 ? "minutes" : "seconds"}
          </div>
        ) : (
          <div className="p-1 rounded-xl px-3 text-center text-base bg-[#ff8282] text-black">
            Your table is no longer being held, you can still try to book it
          </div>
        )}

        <p className="text-xl text-center mb-3 text-[#d88728] font-extrabold mt-4">
          YOUR DETAILS
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4">
              <div>
                <div className="mb-2">
                  <input
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 w-full border-[1px] border-gray-300 rounded-md text-lg font-semibold"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 w-full border-[1px] border-gray-300 rounded-md text-lg font-semibold"
                    required
                  />
                </div>
                <div className="mb-2">
                  <PhoneInput
                    defaultCountry="CA"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    required
                    className="p-2 w-full border-[1px] border-gray-300 rounded-md text-lg font-semibold"
                  />
                </div>
                <div className="mb-2">
                  <select
                    value={formData.occasion}
                    name="occasion"
                    onChange={handleChange}
                    className="p-2 w-full border-[1px] border-gray-300 rounded-md text-lg font-semibold text-neutral-400"
                  >
                    <option value="">Select an Occasion (Optional)</option>
                    <option value="occasion1">occasion 1</option>
                    <option value="occasion2">occasion 2</option>
                    <option value="occasion3">occasion 3</option>
                  </select>
                </div>
                <div className="mb-2">
                  <textarea
                    placeholder="Add special request (Optional)"
                    value={formData.note}
                    onChange={handleChange}
                    name="note"
                    className="p-2 w-full border-[1px] border-gray-300 rounded-md text-lg font-semibold"
                    rows="1"
                  />
                </div>
                <hr className="h-[2px] bg-[#d88728] md:hidden block" />
              </div>
              <div className="p-2 text-neutral-700">
                <p className="text-lg font-semibold mb-2">
                  <i className="fa-solid fa-users mr-2 text-base"></i>
                  {numberOfPeople}
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
                <hr className="h-[2px] bg-[#d88728]" />
              </div>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="info1"
                  checked={formData.info1}
                  onChange={handleChange}
                  className="text-blue-600 cursor-pointer bg-gray-700 border-gray-600 rounded-lg w-4"
                />
                <span className="ml-2 text-base cursor-pointer">
                  Yes, I would like to get text update and reminder about my
                  reservations.*
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="info2"
                  checked={formData.info2}
                  onChange={handleChange}
                  className="text-blue-600 cursor-pointer bg-gray-700 border-gray-600 rounded-lg w-4"
                />
                <span className="ml-2 text-base cursor-pointer">
                  Sign me up to recieve dining offers and news about this
                  restraunt by email.*
                </span>
              </label>
            </div>
              {error && <p className="text-red-500 -mb-2 text-center">{error}</p>}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className={` ${
                  isLoading ? "bg-gray-500" : "bg-[#d88728] hover:scale-105"
                } rounded-sm transition-all duration-500 text-white p-2 px-8 text-center text-xl font-bold mt-4`}
              >
                {isLoading ? (
                  <div className="loader"></div>
                ) : (
                  "Confirm Reservation"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Details;
