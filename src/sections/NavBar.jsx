import React, { useEffect, useState } from "react";
import logo from "/logo.svg";
import { navLinks, search } from "../constants";

const NavBar = () => {
  const [navTop, setNavTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setNavTop(true) : setNavTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`padding-nav 
        ${navTop ? "bg-transparent" : "bg-bg-nav shadow-nav-shadow"} 
        text-white 
        flex 
        justify-between 
        items-center 
        fixed 
        top-0 
        w-full 
        z-20`}
    >
      <div
        className="flex 
            w-[400px] 
            justify-start 
            items-center 
            gap-[8px]"
      >
        <img src={logo} className="w-[32px] h-[32px]" alt="" />
        <h2 className="font-medium text-[20px] leading-[20px]">NFTico</h2>
      </div>

      <ul className="flex flex-row items-center justify-center gap-[30px] relative z-10">
        {navLinks.map((link) => (
          <li key={link.id} className="text-[18px]">
            <a href={`#${link.link}`}>{link.id}</a>
          </li>
        ))}
      </ul>

      <div
        className="flex 
            w-[400px] 
            justify-end 
            items-center 
            gap-[20px] 
            relative 
            z-10"
      >
        <form action="" className="relative">
          <input
            type="text"
            placeholder="Search.."
            className={`px-[16px] 
                py-[12px] 
                ${navTop ? "bg-transparent" : "bg-secondary"} 
                rounded-[8px] 
                border-[1px] 
                border-[rgba(231,231,231,0.40)] 
                max-w-[250px] 
                text-[16px]
                focus:outline-none`}
          />
          <button
            type="submit"
            className="absolute 
                right-[16px] 
                top-[50%] 
                translate-y-[-50%]"
          >
            <img src={search} alt="" className="w-[20px] h-[20px]" />
          </button>
        </form>
        <button
          className="px-[20px] 
                py-[12px] 
                text-[16px] 
                bg-main-gradient 
                rounded-[8px]"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
