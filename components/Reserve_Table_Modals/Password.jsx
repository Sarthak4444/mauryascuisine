"use client";

import React, { useState } from "react";

function Password({ closePassword, email, number, name, logUser }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    try {
      const subscribeRes = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });
      if (!subscribeRes.ok) {
        console.error("Failed to subscribe");
      } else {
        console.log("Subscribed successfully");
      }
    } catch (error) {
      console.error("Error subscribing", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, number, name }),
      });

      const data = await res.json();
      if (res.ok) {
        logUser();
        await handleSubscribe();
        closePassword();
      } else {
        setError(data.error || "Failed to sign up. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#00000096] flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded-sm max-w-[300px] md:max-w-[500px] relative">
        <i
          onClick={closePassword}
          className="fa-solid fa-xmark text-xl absolute top-2 right-2 cursor-pointer"
        ></i>
        <p className="text-xl text-center font-semibold mb-4 mt-2">
          Please enter a Password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative w-full">
            <input
              minLength={8}
              className="rounded-2xl w-full border-[1px] font-semibold border-black px-4 py-2 mb-4"
              type={showPassword ? "text" : "password"}
              placeholder="Set Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 bottom-5 text-xl text-gray-600 hover:text-black"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <i className="fa-regular fa-eye-slash"></i>
              ) : (
                <i className="fa-regular fa-eye"></i>
              )}
            </button>
          </div>
          {error && <p className="text-red-500 text-center text-sm -mt-3 mb-1">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`rounded-2xl w-full font-semibold text-white text-xl ${
              loading ? "bg-gray-500" : "bg-[#d88728] hover:scale-105"
            } transition-all duration-500 flex justify-center items-center gap-2 px-4 py-2 mb-4`}
            aria-disabled={loading}
          >
            {loading ? <div className="loader"></div> : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Password;
