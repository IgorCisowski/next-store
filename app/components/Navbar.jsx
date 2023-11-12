"use client";

import React, { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdBrightnessLow } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { TbMoneybag } from "react-icons/tb";
import Link from "next/link";

export default function Navbar() {
  const [toggleMode, setToggleMode] = useState(false);
  const handleMode = () => setToggleMode(!toggleMode);
  return (
    <header className="py-4">
      <nav className="overflow-y-hidden max-w-6xl w-full px-4 mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex gap-3 items-center">
            <p>Elegant</p>
            <TbMoneybag />
          </div>
        </Link>
        <div className="flex gap-4">
          <Link href="/cart">
            <button className="flex items-center">
              <FiShoppingBag />
              <span>0</span>
            </button>
          </Link>
          <div className="flex items-center">
            <button onClick={handleMode}>
              {toggleMode ? <MdOutlineDarkMode /> : <MdBrightnessLow />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
