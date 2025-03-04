"use client";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [navColor, setNavColor] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setNavColor("bg-primary");
      } else {
        setNavColor("");
      }
    });
  });

  const [menuState, setMenuState] = useState("hidden");
  const toggleMenu = () => {
    if(menuState == "hidden") {
      setMenuState("block")
    } else {
      setMenuState("hidden")
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full h-[80px] ${navColor} transition-all duration-300 text-white shadow-lg z-50 flex justify-center`}
      >
        <div className="w-11/12 xl:w-5/6 2xl:w-3/4 max-w-[1280px] m-auto flex items-center justify-between md:justify-normal">
          <div className="text-center leading-6">
             <p className="text-[1.8rem] font-bold">LUCKY</p>
             <p className="text-[1rem]">JACKPOT</p>
          </div>
          <NavigationMenu className="ml-6 hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    DOMŮ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    O NÁS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#games" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    HRY
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#services" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    SLUŽBY
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#membership" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ČLENSTVÍ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#map" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    MAPA
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>{" "}
              <NavigationMenuItem>
                <Link href="#history" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    HISTORIE
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <button className="w-[60px] h-[40px] md:hidden flex items-center justify-end" onClick={toggleMenu}><Image src="/icons/hambur.svg" height={0} width={48} alt="menu-icon" /></button>
        </div>
      </nav>
      <div className={`fixed w-full z-40 md:hidden bg-primary font-semibold h-[460px] text-center  ${menuState}`}>
        <ul className="mt-[110px] flex flex-col gap-4 text-[1.2rem]">
            <li><Link onClick={toggleMenu} href="/">DOMŮ</Link></li>
            <li><Link onClick={toggleMenu} href="#about">O NÁS</Link></li>
            <li><Link onClick={toggleMenu} href="#games">HRY</Link></li>
            <li><Link onClick={toggleMenu} href="#services">SLUŽBY</Link></li>
            <li><Link onClick={toggleMenu} href="#membership">ČLENSTVÍ</Link></li>
            <li><Link onClick={toggleMenu} href="#map">MAPA</Link></li>
            <li><Link onClick={toggleMenu} href="#history">HISTORIE</Link></li>
        </ul>
      </div>
    </>
  );
}
