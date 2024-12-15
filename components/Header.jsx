"use client";
import React from "react";
import Logo from "../public/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SideMenu from "./Reserve_Table_Modals/SideMenu";
import OrderNow from "./OrderNow";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isOrderNowOpen, setIsOrderNowOpen] = useState(false);

  const toggleOrderNow = () => {
    setIsOrderNowOpen(!isOrderNowOpen);
  };

  const closeOrderNow = () => {
    setIsOrderNowOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  const SpecialToggle = () => {
    toggleMenu();
    toggleSideMenu();
  };

  const SpecialToggle2 = () => {
    toggleMenu();
    closeSideMenu();
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-40">
      {/* Promotional banner */}
      <div className="bg-[#f4c55c] w-full flex justify-center items-center md:text-base text-[10px] font-[400] p-2">
        <span className="font-[600]">Enjoy Exclusive Savings! &nbsp;</span>
        Use Code At Checkout : JLOGR
      </div>

      {/* Address and phone */}
      <div className="w-full flex bg-white md:gap-10 gap-4 justify-end md:px-10 px-4 py-2 md:text-sm text-[10px]">
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

      {/* Logo and Nav */}
      <div className="w-full flex justify-between items-center md:px-14 px-7 py-4 bg-black">
        <div>
          <Link href="/">
          <Image loading="lazy" src={Logo} alt="Logo" className="w-28 h-auto sm:w-36" />
          </Link>
        </div>
        <div className="lg:flex hidden">
          <ul className="flex gap-10 text-white text-[15px] font-semibold">
            <li>
              <Link href="https://order.online/store/maurya's-rest.bar.banquet-kamloops-671165/?hideModal=true&pickup=true">MENU</Link>
            </li>
            <li>
              <Link href="/gift-cards">GIFT CARDS</Link>
            </li>
            <li>
              <Link href="/rewards">REWARDS</Link>
            </li>
            <li>
              <Link href="/private-dining">PRIVATE DINING</Link>
            </li>
          </ul>
        </div>
        <div className="lg:flex hidden">
          <button
            onClick={toggleSideMenu}
            className="bg-black p-4 px-8 font-semibold mr-4 border-[1px] border-[#d88728] text-white hover:bg-[#d88728] transition-all duration-400"
          >
            BOOk A TABLE
          </button>
          <button onClick={toggleOrderNow} className="bg-black p-4 px-10 font-semibold border-[1px] border-[#d88728] text-white hover:bg-[#d88728] transition-all duration-400">
            ORDER NOW
          </button>
        </div>
        <div className="lg:hidden z-50">
          <button onClick={SpecialToggle2}>
            {!isOpen ? (
              <i className="fa-solid fa-bars text-white md:text-2xl text-xl"></i>
            ) : (
              <i className="fa-solid fa-xmark text-white md:text-2xl text-xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[125px] flex flex-col items-center gap-12 pt-16 text-center w-full bg-black text-white p-4 z-40 transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-[200%] opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 text-[15px] font-semibold">
          <li>
            <p className="hover:cursor-pointer">MENU</p>
          </li>
          <li>
            <Link onClick={toggleMenu} href="/gift-cards">GIFT CARDS</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href="/rewards">REWARDS</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href="/private-dining">PRIVATE DINING</Link>
          </li>
          <li>
            <button
              onClick={SpecialToggle}
              className="bg-black p-4 px-8 font-semibold border-[1px] border-[#d88728] text-white hover:bg-[#d88728] transition-all duration-400"
            >
              Book a Table
            </button>
          </li>
          <li>
            <button onClick={toggleOrderNow} className="bg-black p-4 px-10 font-semibold border-[1px] border-[#d88728] text-white hover:bg-[#d88728] transition-all duration-400">
              Order Now
            </button>
          </li>
        </ul>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-6 text-2xl">
            <Link href="https://www.facebook.com/MauryasRestBarBanquet/">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link href="https://www.instagram.com/mauryas.rest.bar.banquet/?hl=en">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link href="https://g.page/r/Cd-CC70Nfj0DEBM/review">
              <i className="fa-brands fa-google"></i>
            </Link>
            <Link href="https://www.tripadvisor.ca/Restaurant_Review-g154932-d886748-Reviews-Maurya_s_Rest_Bar_Banquet-Kamloops_British_Columbia.html">
              <Image
                className="grayscale invert"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAABgYGDv7+/29vbZ2dnp6enw8PD19fWjo6Pe3t6AgICmpqb6+vqWlpbh4eFGRkbMzMxZWVlycnKwsLDS0tKKiorKysogICBTU1OsrKyPj48xMTE2Nja9vb1paWknJyeDg4NKSkoWFhZ3d3c+Pj4XFxc1NTW4uLgNDQ0jIyMtLS1tbW2aJVpQAAALdElEQVR4nO1d6XbyOgxkDXvYE/aWFvpB4f2f7xYobYJGtpwYuD1H87NN7MiWtYxlUygoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBSKhyJoxrtRuxG1NseX0stx04rmYXsUd4POs78sL2rj3Xyz3RcNOAxa7bj87A/NguYoejNJdoPepl199ifLUV5FPQfhEmJGq///bHZWm0km6a543axqzxaCRzPc5pLuikX4v9TY/jrf5KWxb/WfLVAa1cijdFdsxs8W64py6HP2kpiEwbOF+0JcupN4F0xXzxWv0v64q3xnhM9zIUHr/uKdMew+Rb7my4PkO2H6eKvTvO/yo3h7rIzNwYPlO6H3OBmDR8/fFYPHOI/O+knynbB5QNA6e6J8J4R3lq/6L/OnTXqDwVeCP/xK80uD3mvmdj7iO8pXObp/z3Y4H/W7FdBarRrP5i8LdxkHd1PVkduHLIbtviAc6QSrhqvpmt1FvvLU4ROmYd+NZaqtIpfksucQ5cwHJRnEvS/m42wcWj1eG1mrFIRfPZgXCgeHobNjOsu3SGojv8HE4qvNinzcbBjs6rnEu6Cy8xdR7M8mruynsUPDn4mrt7N7pRS+LV03f0uTyDd51Fx7SD1/7NE4d1M9/6n4LhvpmkQiVI9zN1YsRj5TcS/JdSr42Xlo0F8q3vWSXO/SjTZ8tFkc+pjHrh9T2rht1xPjGeXdMOt4In8i2vTGT8vFUS4B256+Yoga9+Vnt83M8jWXnr6hhNt32fAzYp5RwLWvD3jjevA1gsVDlmmsetscWLJ9dD599VFsOwvox5qf8GmwdjVvvRRf3OTreOTvjPGxhxD1ig8X6i/wuP9hiTuq/noqyhncvsderSmAjxD1Cmk47kgAGSFg4lYeuyORE0TosUfRoHrzGUUZfzv32B/vJxJwodTssIvotwRg+mgB7YrqcwZP6PkScLKQEljmSFy6DbJfSCMeyywObe9PNo24eY0ZyuNdaB8SU2WM3axto9kPc96prkJ7ZMBE3RdYVKa0A168M7ZVm/Cu3+Z91zGgJ5ttCzu+5gU0+qXtDG2vfH+pMW195+LEuvFDX3jXVm4Y2UZ2YZhCtp6lCqtimn5Ob0zp2tpCiMSmieRSm3f2ja2EDTU4bmxQDYOyFpAhY34e9/gNfnNQSEyUeSuABpVnad+EpB1viI/ocdasleTkEhvUHsDDrLvZgYcxKuw2DoreuGedctk6R1RTYoMzTlsnRpLNm+m0cFSbKx/BBWG3isc5ipZjf1w7G+GDB/f9JIYPvI2mGDPhzn6UGerl1jhi7epl4XeZBZ1eXYyRyLLB08HJ0Db9FDYRolxEKuJ76qskoyAGrudY2Z+ZZGXo8QQlCyiw75QlzBR16MlT9huPevYtayhAwg1XYH9gq0EIvI2dnEQYAeUpBYR+6jdwgCPAEtUCQCorschgdJGrgAyus9+VCIc8V5UDjAB/Y2kUbVlzZTPgoF2TBbgfm7NcDanhT8QPme68pZwogrj2iL4GRpIOgInRNTxCPtqw6oPR8Oyu99Mo5q0t1NNLj030L15HO3E0Pcewy+HIMO5r0OjVOKMhZRu6SbCPrD1CLuMSsaDAjnUU43TKs2WL9tCQ/rv8C80vly+BQPfNId28xBmgP25EqyDW4mREQ9rkvprpsIvrXhleBPV4CnNRCMyEozj/WDC6Ch69qAZgy7DOsAnnP7yIwJMn3UDOEL5fZguJcXQHGu5xHwI5J8MW5gdMQUCPJ4sJFA/6XlO9HdRURGydJAFBN9zdNHK372gWA/rcHlsEpHZ1I+UMDQXw6ycvC6IBlMNYdt0WqEcwWwEKsLboZUutO7LhILw+cQuA0kMjau4P5+Zg2ndId5HOWct7kCumT/XgX5GS2sl0QDgCNY0KoGYNKKm9XBIFQeAr4XoGQyqoz0SqRl3itEC3AN7Bm4LabDCkIDqDywKwlZJiIhA6042ePdAZUKEl2Yge0NdAPBiDOB8QxjCSFPQINkJAU8AuisqzgHJT+7sDphTkTWtJh0VKdALlBkJTswgWMAAoLqPWew4CI8I0FsDaQaDrF+Rla/onGi7I6qOAh6LLogVMGw3ZZEOKbDB9CPAb9DXhmQuqNHRoXkDqRIM+YQEKWMCU9wV/kQwMBLVtdA30gFmmEY204IWGs9Ri0PIuykBJT4DQjITOxaJAOXG68KWFydS4SdSN2mBpdR0lIqhpewVOmXpSa/3CN6gjlVQc0h1ikXMqokiR5p4TkYTSEnBfEkrnUCYhdQR/R0upQ6QR2gHsWFBLIy2gJy+KYhMaYVgTmW/QYIhamiWIAjJ7iwmVUHIEDThuWX8ibzEF9QmUUhBabxAMid6jrwlPBVFigfq1YWFN/gYSL9k5Uzr5sqGhy1dW7QbyNTo0LSA1eFHm8qnDl1U302IkWUU9YARphNZAuyT0RVFgCsJSmYkCZKkoMKVhKWC5VijBAcmzxK+B12TrCRSFSc58gtUEyOYxssxg9gVRBkiApTYRvClwMyABBllXHeV+6FvtTh90KPXcYOfD/iraHaP0/cmDAZVHRJ0tCUYbAdKcBFHetndRHRlYhiXcFNoWsOgpmncbqfsDECpY67FRcR9gSE5WDCxqWCptJL0hay0/fwOLO42nIuC2JVi855bB+3D7yiAiLqOQn3cF0dCXzhlqZGE9L/Jp53+AhYh3BKvcXgn8QHH8fALenuPy0gnelAUjenFEqLobl3R3sH9jitFcDvswpS34ED0844vLkC4WBYVI3DnXMSAkmWoFpnSNAdcI3fN/4yqyUXnAt24gq8WWsVZTCf92xlZjuJ32YU8QdNpJi7NvsfWuKMq/WnikpowmnNEPh73D53LQMhV/uN6YYmgqmLUGy89FbxiaDgygMvVrigz1Ke8Fd67npwRHsoyAacyPgiGzjra8HOB+aDLn7VbIzv8yVTAIdDyqnEaW88S57g2ByU9C86FK5RnULBfOveboDyaiyUgSp2PZl2K2o+fGQ2dGYC4h5VawXch6wUXWS0RwbGQHzgrSyQATJGe7bib7sdBsF2owjukmMmD0Ksvqz3OwN4uIjFW7JTk4rsn9Ci/pNg6GKdLA4Cgdon/cxrLjhTqVvCelXQ+xcI4XcA7cvSZO5cn570Ur7p1MOMfmIZKDzcgn8i79HD2XL8Yxyx5BA8Lncxv+BHASsa8rdITXzNb5Jc8UVRs4SsGRsqrPSysHAldsKEnhIk4j7RCa57Hp+y4Gyy3sdROD8Mq+ZibHjqzulBs+bwu5YtlgA47YfKGxwYvbLhdsgR+BqTa83RFG8Nag/ri8snF4xkOMdmP47xiuqt2gVikHzfEs8q2cFNNoNm4G5Uot6FZX4dF+d7QlJ3rUDzrcD9YTab4uF3wWBPnJ355Fw60fv/B46c9Css2983iTmTAc8nb11lSyO9Mv1D1di+yQJni6Pu28JGy3o51Nu6dwyOFXsAIfPy82k2jEdzjo40KzpRsjkXsxLn+oPFNJ849pz592OZ8E7+e7qj3ZHz9aieJCZl9LCresMv80vqb743xsOrmO+RuArMh4J2wz62okcRPmucjef9YxnWany+MsdlxWBgK3xmtZaKxlvnPuK9cfh2CuZqfqAM/zuV9Wvs1/333fhaIPOaascxu4wDOZJwQuulry8ytXwVy20TI1Xb5yu5ducl7CH7j49PmretW5bUWWRpbu0pyzxTZUdrYw5zD3/mOltd2G4yreQomyJENUwdd1+iFHHizXu3v9JmKlOpofE0ZjUmo1VuLfnv4Nd6XWr9NdNTZJO7w8RruqjNvMiXo5qLnfQHStiHe/LKny1Z/zS8/AZavW/T6vP4QT05X11v0/gpbzlXN/Dlnv81IoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQe8B9CiqtHS3mG5gAAAABJRU5ErkJggg=="
                alt="tripadvisor"
                width={30}
                height={30}
              />
            </Link>
          </div>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="flex lg:hidden fixed bottom-0 left-0 right-0 w-screen justify-center gap-4 bg-transparent p-4">
        <button
          onClick={toggleSideMenu}
          className="p-3 px-6 font-semibold text-white bg-[#f59629f1] transition-all duration-1000"
        >
          Book a Table
        </button>
        <button onClick={toggleOrderNow} className="p-3 px-8 font-semibold text-white bg-[#f59629f1] transition-all duration-1000">
          Order Now
        </button>
      </div>

      <div
        style={{
          maxHeight: isSideMenuOpen ? "100vh" : "0",
          opacity: isSideMenuOpen ? "1" : "0",
          overflow: isSideMenuOpen ? "visible" : "hidden",
          transition: "max-height 0.4s ease, opacity 0.5s ease",
        }}
        className="fixed top-0 left-0 text-white z-50"
      >
        {isSideMenuOpen && <SideMenu closeSideMenu={closeSideMenu} />}
      </div>
      <div
        style={{
          maxHeight: isOrderNowOpen ? "100vh" : "0",
          opacity: isOrderNowOpen ? "1" : "0",
          overflow: isOrderNowOpen ? "visible" : "hidden",
          transition: "max-height 0.4s ease, opacity 0.5s ease",
        }}
        className="fixed top-0 left-0 text-white z-50"
      >
        {isOrderNowOpen && <OrderNow closeOrderNow={closeOrderNow} />}
      </div>
    </div>
  );
}

export default Header;
