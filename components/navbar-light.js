"use client";
import Image from "next/image";
import menu from "@/public/images/menu.png";
import close from "@/public/images/x-close.svg";
import { useEffect } from "react";

function NavbarLight() {

  useEffect(() => {
    document.querySelector(".xpopup").style.display = "none";
  })

  const popuphandler = () => {
    const popup = document.querySelector(".xpopup");
    if (popup.style.display == "none") {
      popup.style.display = "flex";
    } else { 
      popup.style.display = "none";
    }
  };

  return (
    <>
      <div className="g20 xpopup fixed hidden flex-col justify-between px-5 pt-8 pb-14 top-0 bottom-0 left-0 right-0 z-[999999999]">
        <div className="flex flex-col gap-14">
          <nav className="w-full text-xs font-bold uppercase flex flex-row justify-between items-baseline">
            <h6 className="g700">Alex Oyebade</h6>
            <div className="flex lg:hidden flex-col w-6 h-6">
              <Image
                onClick={popuphandler}
                src={close}
                quality={100}
                alt="close"
              />
            </div>
          </nav>
          <nav>
            <ul className="text-[#6C6D6D] flex flex-col gap-8 text-xs font-semibold uppercase leading-4">
              <li className="underline">Contact me</li>
              <li>works</li>
              <li>articles</li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-bttm-top">
          <div className="sidebar-bttm">
            <ul className="d-120">
              <li>Contact me</li>
              <li>resumé</li>
              <li>Linkedin</li>
              <li>TWitter</li>
              <li>dribble</li>
            </ul>
            <div className="d-130">copyright 2023 alex oyebade</div>
          </div>
        </div>
      </div>

      <div class="setbody g20 fixed top-0 left-0 right-0 z-[99999]">
        <div>
          <nav className="px-5 lg:px-6 pt-8 lg:pt-12 pb-[22px] w-full text-xs font-bold uppercase flex flex-row justify-between items-baseline">
            <h6 className="g700">Alex Oyebade</h6>
            <ul className="hidden lg:flex items-center g900 gap-6">
              <li className="underline">Contact me</li>
              <li>works</li>
              <li>articles</li>
            </ul>
            <div className="flex lg:hidden flex-col w-6 h-6">
              <Image
                onClick={popuphandler}
                src={menu}
                quality={100}
                placeholder="blur"
                alt="menu"
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarLight;
