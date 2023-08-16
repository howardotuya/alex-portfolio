"use client";
import Image from "next/image";
import Link from "next/link";
import close from "@/public/images/x-close.png";
import { useEffect } from "react";

function NavbarDark() {
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
                placeholder="blur"
                quality={100}
                alt="close"
              />
            </div>
          </nav>
          <nav>
            <ul className="text-[#6C6D6D] flex flex-col gap-8 text-xs font-semibold uppercase leading-4">
              <Link href="mailto:ao.dsgnr@gmail.com">
                <li className="underline">Contact me</li>
              </Link>
              <Link href="/all-projects">
                <li>works</li>
              </Link>
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

      <div className="setbody bg-[#161718] sticky top-0 left-0 right-0 z-[99999]">
        <div className="grey-g20 text-[#F5F5F5]">
          <nav className="px-5 lg:px-6 pt-8 lg:pt-12 pb-[22px] w-full text-xs font-bold uppercase flex flex-row justify-between items-center">
            <Link href="/">
              <h6>Alex Oyebade</h6>
            </Link>
            <ul className="hidden lg:flex items-center gap-6">
              <Link href="mailto:ao.dsgnr@gmail.com">
                <li className="underline">Contact me</li>
              </Link>

              <Link href="/all-projects">
                <li className=" g70">works</li>
              </Link>
              <li className=" g70">articles</li>
            </ul>
            <svg
              className="block lg:hidden"
              onClick={popuphandler}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 3.5H21V5.5H3V3.5ZM9 10.5H21V12.5H9V10.5ZM3 17.5H21V19.5H3V17.5Z"
                fill="#F5F5F5"
              />
            </svg>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarDark;
