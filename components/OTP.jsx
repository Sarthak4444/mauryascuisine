import React, { useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Loader2 } from "lucide-react";

function OTP({ closeModal, signIn, signUp }) {


  return (
    <div className="fixed inset-0 bg-[#00000096] flex justify-center items-center z-50">
      <div className="bg-white relative rounded-xl border-[5px] border-black flex-col w-[300px] p-6 flex justify-center text-black items-center">
        <i onClick={closeModal} className="fa-solid fa-xmark text-2xl absolute top-1 right-2 cursor-pointer"></i>
        <Image src={LogoBlack} alt="Logo" className="w-[150px]" />
        <p className="text-2xl font-bold mt-3 -mb-2">OTP Verification</p>
        <p className="text-lg mb-3">Enter the OTP sent to your email</p>
        <InputOTP
          value={otp}
          onChange={setOtp}
          className="text-xl font-bold"
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            {[...Array(6)].map((_, index) => (
              <InputOTPSlot
                key={index}
                className="text-xl border-black font-semibold"
                index={index}
                autoFocus={index === 0}
                aria-label={`Enter OTP digit ${index + 1}`}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Button
          className="bg-[#d88728] hover:scale-105 transition-all duration-500 text-white p-2 mt-4 rounded-lg text-lg font-bold w-full"
          onClick={handleOtpSubmit}
          disabled={loading}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit OTP
        </Button>
      </div>
    </div>
  );
}

export default OTP;
