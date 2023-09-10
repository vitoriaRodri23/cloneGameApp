import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Imagens/logo.png";
import { HiOutlineMagnifyingGlass, HiSun, HiMiniMoon } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
  }, []);

  return (
    <div className="flex items-center p-3 ">
      <img src={logo} height={60} width={60} />
      <div
        className="flex bg-slate-200 p-2 w-full mx-5
         rounded-full
        items-center"
      >
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent  outline-none"
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full curser-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiMiniMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full curser-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
