"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import "./../../globals.css";
import { useState } from "react";

const menuItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/subscribers", label: "Subscribers" },
  { href: "/admin/private-dining", label: "Private Dining" },
  { href: "/admin/reservations", icon: "fa-calendar-check", label: "Reservations" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/gift-cards", label: "Gift Cards" },
  { href: "/admin/careers", label: "Careers" },
  { href: "/admin/items", label: "Items" },
  { href: "/admin/blogs", label: "Blogs" },
  { href: "/admin/admins", label: "Admins" },
];

export default function AdminLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const currentPage = menuItems.find(item => pathname.startsWith(item.href))?.label || "Admin";

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin-logout", {
        method: "GET",
      });

      if (res.ok) {
        router.push("/admin");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.error("Logout failed");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error logging out:", error);
    }
  };

  if (isLoading) {
    return (
      <div className='absolute inset-0'>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-16 h-16 border-t-4 border-b-4 border-orange-500 border-solid rounded-full animate-spin"></div>
      </div>
      </div>
    );
  }

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className="flex flex-row">
        <div className="fixed top-0 left-0 bottom-0">
          <Sidebar />
        </div>
        <div className="md:ml-[250px] ml-[60px] w-full">
          <div className="flex flex-row justify-between items-center h-[58px] md:h-[94px] px-4 bg-black border-b-4 border-l-2 border-[#d88728] text-white">
            <p className="text-2xl md:text-4xl font-bold">{currentPage}</p>
            <button onClick={handleLogout} className="bg-[#d88728] rounded-lg hover:scale-105 transition-all duration-500 text-white px-4 md:px-8 text-lg md:text-xl font-semibold md:font-extrabold tracking-wider py-1 md:py-2">Logout</button>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
