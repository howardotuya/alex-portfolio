"use client";
import Image from "next/image";
import Link from "next/link";
import menu from "@/public/images/menu.png";
import close from "@/public/images/x-close.png";
import { useEffect } from "react";

function NavbarLight() {
  useEffect(() => {
    document.querySelector(".xpopup").style.display = "none";
  });

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
      <div className="g20 xpopup fixed hidden flex-col gap-20 justify-between px-5 pt-8 pb-14 top-0 bottom-0 left-0 right-0 z-[999999999]">
        <div className="flex flex-col gap-14">
          <nav className="w-full text-xs font-bold uppercase flex flex-row justify-between items-center">
            <Link href="/" onClick={popuphandler}>
              <h6 className="g700">Alex Oyebade</h6>
            </Link>
            <div className="flex lg:hidden items-center justify-center flex-col w-6 h-6">
              <Image
                onClick={popuphandler}
                className="w-full h-auto"
                src={close}
                quality={100}
                placeholder="blur"
                alt="close"
              />
            </div>
          </nav>
          <nav>
            <ul className="text-[#6C6D6D] flex flex-col gap-8 text-xs font-semibold uppercase leading-4">
              <Link href="mailto:ao.dsgnr@gmail.com">
                <li className="underline">Contact me</li>
              </Link>
             <Link href="/all-projects"><li>works</li></Link>
              <li>articles</li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-bttm-top">
          <div className="sidebar-bttm">
            <ul className="d-120">
              <Link href="https://read.cv/join/alexoyebade">
                <li>resumé</li>
              </Link>
              <Link href="https://www.linkedin.com/in/iamalexoyebade/">
                <li>Linkedin</li>
              </Link>
              <Link href="https://twitter.com/iamalexoyebade">
                <li>TWitter</li>
              </Link>
              <Link href="https://dribbble.com/AlexOye">
                <li>dribble</li>
              </Link>
            </ul>
            <div className="d-130">copyright 2023 alex oyebade</div>
          </div>
        </div>
      </div>

      <div class="setbody bg-inherit fixed top-0 left-0 right-0 z-[99999]">
        <div>
          <nav className="px-5 lg:px-6 pt-8 lg:pt-12 pb-[22px] w-full text-xs font-bold uppercase flex flex-row justify-between items-center">
            <Link href="/">
              <h6 className="g700">Alex Oyebade</h6>
            </Link>
            <ul className="hidden lg:flex items-center g900 gap-6">
              <Link href="mailto:ao.dsgnr@gmail.com">
                <li className="underline">Contact me</li>
              </Link>
             <Link href="/all-projects"><li>works</li></Link>
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
