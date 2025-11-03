"use client"
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderLinks from "./HeaderLinks";
import Headernav from "./Headernav";
import Mobilemenu from "./Mobilemenu";
import HeaderAuth from "./HeaderAuth";
import { useEffect, useState } from "react";

const Header = () => {
 const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100); // Change 100 to your desired height
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`py-3 z-50 left-0 right-0 bg-white  pb-3 ${isFixed ? "fixed top-0 border-b" : "relative"}`}>
      <Container className="flex justify-around items-center">
        <div className="flex items-center justify-center gap-1">
          <Mobilemenu/>
          <Logo />
        </div>
        <div>
            <HeaderLinks/>
        </div>
        <div>
          <Headernav/>
        </div>        
      </Container>
    </header>
  );
};

export default Header;
