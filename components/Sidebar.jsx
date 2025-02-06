"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/Logo.png";
import LetterM from "../public/images/LetterM.png";
import { usePathname } from "next/navigation";

function SideMenu() {
  const pathname = usePathname();

  const linkClasses = (path) => {
    return pathname === path 
      ? "text-[#d88728] font-bold"  // Active link styling
      : "text-white";
  };

  const menuItems = [
    { href: "/admin/dashboard", icon: "fa-chart-line", label: "Dashboard" },
    { href: "/admin/users", icon: "fa-users", label: "Users" },
    { href: "/admin/subscribers", icon: "fa-handshake", label: "Subscribers" },
    { href: "/admin/private-dining", icon: "fa-utensils", label: "Private Dining" },
    { href: "/admin/reservations", icon: "fa-calendar-check", label: "Reservations" },
    { href: "/admin/orders", icon: "fa-burger", label: "Orders" },
    { href: "/admin/gift-cards", icon: "fa-gifts", label: "Gift Cards" },
    { href: "/admin/careers", icon: "fa-briefcase", label: "Careers" },
    { href: "/admin/items", icon: "fa-box", label: "Items" },
    { href: "/admin/blogs", icon: "fa-blog", label: "Blogs" },
    { href: "/admin/admins", icon: "fa-user-shield", label: "Admins" },
  ];

  return (
    <div className="h-screen bg-black text-white md:w-[250px] w-[60px]">
      <div className="p-4 hidden md:flex flex-col justify-center items-center border-b-4 border-[#d88728]">
        <Image loading="lazy" src={Logo} alt="Logo" width={150} height={150} />
      </div>
      <div className="bg-black p-3 md:hidden flex justify-center items-center border-b-4 border-[#d88728]">
        <Image
          className="filter invert"
          loading="lazy"
          src={LetterM}
          alt="Logo"
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col p-4 md:p-7 gap-5 h-[82vh] text-xl overflow-y-scroll bg-black">
        {menuItems.map(({ href, icon, label }) => (
          <Link key={href} href={href} className={`flex items-center gap-4 ${linkClasses(href)}`}>
            <i className={`fa-solid ${icon} text-xl`}></i>
            <span className="hidden md:inline">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
