import React from "react";
import Link from "next/link";

function OrderNow({ closeOrderNow }) {
  return (
    <div className="fixed inset-0 bg-[#00000096] flex justify-center items-center z-50">
      <div className="bg-white w-[300px]">
        <div className="flex justify-between items-center p-4 bg-black border-[1px] border-[#3b3b3b] text-white">
          <div>
            <p className="text-xl font-bold">Victoria Street</p>
            <p className="text-sm font-semibold">KAMLOOPS, BC</p>
          </div>
          <div className="cursor-pointer" onClick={closeOrderNow}>
            <i className="fa-solid fa-xmark text-2xl"></i>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 border-b-[2px] border-neutral-400 p-8">
            <i className="fa-solid fa-bag-shopping text-4xl text-black"></i>
            <Link href="https://order.online/store/maurya's-rest.bar.banquet-kamloops-671165/?hideModal=true&pickup=true">
            <button className="bg-[#d88728] hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2">PICKUP ORDER</button>
            </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-8">
            <i className="fa-solid fa-truck text-4xl text-black"></i>
            <Link href="https://order.online/store/maurya's-rest.bar.banquet-kamloops-671165/?delivery=true&hideModal=true">
            <button className="bg-[#d88728] hover:scale-105 transition-all duration-500 text-white px-12 text-xl font-extrabold tracking-wider py-2">DELIVERY</button>
            </Link>
            </div>
      </div>
    </div>
  );
}

export default OrderNow;
