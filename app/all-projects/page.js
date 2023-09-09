import Image from "next/image";
import Link from "next/link";
import memojimessage from "public/images/home-hero.png";
import memojimessageS from "public/images/home-hero-sm.png";
import menu from "public/images/menu.png";

import flow from "@/public/images/selectedprojects/flow.png";
import collect from "@/public/images/selectedprojects/collect.png";
import zacrac from "@/public/images/selectedprojects/zacrac.png";
import pollen from "@/public/images/selectedprojects/pollen.png";
import sorolingo from "@/public/images/selectedprojects/sorolingo.png";
import flows from "@/public/images/selectedprojects/flows.png";
import collects from "@/public/images/selectedprojects/collects.png";
import pollens from "@/public/images/selectedprojects/pollens.png";
import sorolingos from "@/public/images/selectedprojects/sorolingos.png";
import zacracm from "@/public/images/selectedprojects/zacrac-mini2.png";
import crushin from "@/public/images/selectedprojects/crushing.png";
import ctaarrow from "@/public/images/cta-arrow.png";
import arrowright from "@/public/images/arrow-right.png";
import arrowright2 from "@/public/images/black-arrow-right.png";

import yoohoobg from "@/public/images/selectedprojects/yoohoo-bg.png";
import condesktop from "@/public/images/selectedprojects/con-desktop.png";
import conmobile from "@/public/images/selectedprojects/con-mobile.png";
import NavbarDark from "@/components/navbar-dark";

export default function Home() {
  return (
    <>
      <div className="bg-[#161718]">
        <NavbarDark />

        <header className="grey-g20 setbody text-[#F5F5F5]">
          <div className="">
            <section className="px-5 pt-20 pb-24 lg:pl-6 lg:pt-[100px] lg:pb-[214px] g30 flex flex-col gap-8 lg:gap-16">
              <div className="flex flex-col gap-2 lg:gap-3">
                <h6 className="lg:text-xl lg:font-bold font-semibold text-[16px] leading-[120%]">
                  Alex <span className="g100">Oyebade</span>{" "}
                </h6>
                <p className="text-2xl font-normal leading-[120%]">
                  /Oh-yay-BAH-day/
                </p>
              </div>
              <div>
                <p className="lg:text-[80px] lg:leading-[104px] lg:font-bold font-semibold text-[16px] leading-[160%]">
                  <span>
                    I love how design is able to endear a business to her
                    customers and have them hooked even at first use.
                  </span>{" "}
                  <span className="g100">
                    This is why and how I strive to design - for endearment and
                    retention.
                  </span>
                </p>
              </div>
            </section>
          </div>
        </header>

        <main className="setbody">
          <div>
            <section className="pb-24 lg:pb-[312px] px-5 lg:px-6">
              <div
                id="header-selectedProjects"
                className="uppercase g30 text-[18px] leading-[120%] lg:text-[32px] flex flex-col gap-3 font-bold"
              >
                <h2>ALL Projects</h2>
                <div className="w-full">
                  <div className="h-[2px] w-full bg-[#363738]"></div>
                </div>
              </div>
              <div
                id="project-3-sections"
                className="pt-2 flex flex-col gap-[56px] lg:gap-[72px] lg:pt-3"
              >
                <div id="first-row-projects" className="">
                  <Link
                    href="/projects/flow-finance"
                    id="flow-finance"
                    className="flex flex-col gap-4"
                  >
                    <div className="content-1 bg-[#363738]">
                      <div className="g10">
                        <h6 className="text-sm font-medium lg:font-semibold leading-[120%]">
                          Mobile & Website Design
                        </h6>
                        <h2 className="xl:text-[80px] xl:leading-[95px] text-2xl font-bold">
                          Flow Finance
                        </h2>
                        <Link
                          href="/projects/flow-finance"
                          className="flex flex-row gap-[10px] items-center"
                        >
                          <span className="text-sm text-[#69A9E9] leading-[120%]">
                            Read More
                          </span>
                          <span className="w-4 h-4">
                            <Image
                              src={arrowright}
                              quality={100}
                              placeholder="blur"
                              alt="Arrow Right"
                            />
                          </span>
                        </Link>
                      </div>
                      <div className="flex flex-col w-full max-w-[233px] lg:max-w-[425px] h-auto">
                        <Image
                          className="w-full h-auto hidden md:block"
                          src={flow}
                          quality={100}
                          placeholder="blur"
                          alt="Flow Finance"
                        />
                        <Image
                          className="w-full h-auto block md:hidden"
                          src={flows}
                          quality={100}
                          placeholder="blur"
                          alt="Flow Finance"
                        />
                      </div>
                    </div>
                    <div id="content-2" className="content-2">
                      <div className="">
                        <h6 className="g40 font-semibold">
                          Flow Finance, 2023
                        </h6>
                        <span className="g90 text-sm">
                          Product Strategy & Product Design
                        </span>
                      </div>
                      <div className="g90">
                        A full service credit and financial services platform
                        for employees and employers.
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/projects/collect-africa"
                    id="Collect Africa"
                    className="flex flex-col gap-4"
                  >
                    <div className="content-1 bg-[#5285F2]">
                      <div className="g10">
                        <h6 className="text-sm font-medium lg:font-semibold leading-[120%]">
                          Mobile & Website Design
                        </h6>
                        <h2 className="xl:text-[80px] xl:leading-[95px] text-2xl font-bold">
                          Collect Africa
                        </h2>
                        <Link
                          href="/projects/collect-africa"
                          className="flex flex-row gap-[10px] items-center"
                        >
                          <span className="text-sm text-[#252627] leading-[120%]">
                            Read More
                          </span>
                          <span className="w-4 h-4">
                            <Image
                              src={arrowright2}
                              quality={100}
                              placeholder="blur"
                              alt="Arrow Right"
                            />
                          </span>
                        </Link>
                      </div>
                      <div className="flex flex-col w-full max-w-[233px] lg:max-w-[425px] h-auto">
                        <Image
                          className="w-full hidden md:block h-autp"
                          src={collect}
                          quality={100}
                          placeholder="blur"
                          alt="Collect Africa"
                        />
                        <Image
                          className="w-full block md:hidden h-auto"
                          src={collects}
                          quality={100}
                          placeholder="blur"
                          alt="Collect Africa"
                        />
                      </div>
                    </div>
                    <div id="content-2" className="content-2">
                      <div className="">
                        <h6 className="g40 font-semibold">
                          Collect Africa, 2022 - Present
                        </h6>
                        <span className="g90 text-sm">
                          Product Design (Web & Mobile)
                        </span>
                      </div>
                      <div className="g90">
                        Seamless payments for small and large businesses
                      </div>
                    </div>
                  </Link>
                </div>

                <Link
                  href="/projects/zacrac-learning"
                  className="flex flex-col gap-4"
                >
                  <div className="content-1 px-[0!important] bg-[#363738]">
                    <div className="g10">
                      <h6 className="text-sm font-medium lg:font-semibold leading-[120%]">
                        Website Design
                      </h6>
                      <h2 className="xl:text-[80px] xl:leading-[95px] text-2xl font-bold">
                        Zacrac Learning
                      </h2>
                      <Link
                        href="/projects/zacrac-learning"
                        className="flex flex-row gap-[10px] items-center"
                      >
                        <span className="text-sm text-[#69A9E9] leading-[120%]">
                          Read More
                        </span>
                        <span className="w-4 h-4">
                          <Image
                            src={arrowright}
                            quality={100}
                            placeholder="blur"
                            alt="Arrow Right"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="w-full relative h-auto max-w-[353px] md:max-w-none flex flex-col">
                      <Image
                        className="hidden md:block w-full h-auto "
                        src={zacrac}
                        quality={100}
                        placeholder="blur"
                        alt="Zacrac Learning"
                      />
                      <Image
                        className="block md:hidden w-full h-auto "
                        src={zacracm}
                        quality={100}
                        placeholder="blur"
                        alt="Zacrac Learning"
                      />
                    </div>
                  </div>
                  <div id="content-2" className="content-2 w-full">
                    <div className="">
                      <h6 className="g40 font-semibold">
                        Zacrac Learning, 2022
                      </h6>
                      <span className="g90 text-sm">UI Design (Web)</span>
                    </div>
                    <div className="g90 max-w-[422px!important]">
                      The leading online educational platform providing students
                      with world class courses in data science and analytics.
                    </div>
                  </div>
                </Link>

                <div id="second-row-projects" className="">
                  <Link
                    href="/projects/pollen"
                    id="Pollen"
                    className="flex flex-col gap-4"
                  >
                    <div className="content-1 relative overflow-hidden bg-[#363738]">
                      <div className="g10">
                        <h6 className="text-sm font-medium lg:font-semibold leading-[120%]">
                          Brand & Mobile App Design
                        </h6>
                        <h2 className="xl:text-[80px] xl:leading-[95px] text-2xl font-bold">
                          Pollen
                        </h2>
                        <div className="flex flex-row gap-[10px] items-center">
                          <span className="text-sm text-[#69A9E9] leading-[120%]">
                            Read More
                          </span>
                          <span className="w-4 h-4">
                            <Image
                              src={arrowright}
                              quality={100}
                              placeholder="blur"
                              alt="Arrow Right"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col w-full max-w-[233px] lg:max-w-[425px] h-auto">
                        <Image
                          className="w-full hidden md:block h-autp"
                          src={pollen}
                          quality={100}
                          placeholder="blur"
                          alt="Pollen"
                        />
                        <Image
                          className="w-full block md:hidden h-auto"
                          src={pollens}
                          quality={100}
                          placeholder="blur"
                          alt="Pollen"
                        />
                      </div>
                      <div className="absolute w-[89.607px] lg:w-[216.783px] lg:bottom-[73px] bottom-[204px] right-[-23px] lg:right-[-55px] h-auto">
                        <Image
                          className="w-full h-auto"
                          src={crushin}
                          alt="Crushin'"
                        />
                      </div>
                    </div>
                    <div id="content-2" className="content-2">
                      <div className="">
                        <h6 className="g40 font-semibold">Pollen, 2022</h6>
                        <span className="g90 text-sm">
                          Brand Identity & Product Design
                        </span>
                      </div>
                      <div className="g90">
                        A financial literacy app for young kids and young
                        adults.
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/projects/sorolingo"
                    id="Surolingo"
                    className="flex flex-col gap-4"
                  >
                    <div className="content-1 bg-[#363738]">
                      <div className="g10">
                        <h6 className="text-sm font-medium lg:font-semibold leading-[120%]">
                          Mobile App Design
                        </h6>
                        <h2 className="xl:text-[80px] xl:leading-[95px] text-2xl font-bold">
                          Sorolingo
                        </h2>
                        <div className="flex flex-row gap-[10px] items-center">
                          <span className="text-sm text-[#69A9E9] leading-[120%]">
                            Read More
                          </span>
                          <span className="w-4 h-4">
                            <Image
                              src={arrowright}
                              quality={100}
                              placeholder="blur"
                              alt="Arrow Right"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col w-full max-w-[233px] lg:max-w-[425px] h-auto">
                        <Image
                          className="w-full hidden md:block h-autp"
                          src={sorolingo}
                          quality={100}
                          placeholder="blur"
                          alt="sorolingo"
                        />
                        <Image
                          className="w-full block md:hidden h-auto"
                          src={sorolingos}
                          quality={100}
                          placeholder="blur"
                          alt="sorolingo"
                        />
                      </div>
                    </div>
                    <div id="content-2" className="content-2">
                      <div className="">
                        <h6 className="g40 font-semibold">Sorolingo, 2022</h6>
                        <span className="g90 text-sm">
                          Product Design (Web & Mobile)
                        </span>
                      </div>
                      <div className="g90">
                        Designed the easiest and most immersive way to learn any
                        African Language.
                      </div>
                    </div>
                  </Link>
                </div>

                <Link
                  href="/projects/yoohoo"
                  id="yoohoo"
                  className="flex flex-col gap-4"
                >
                  <div className="relative text-[#fafafa] w-full h-auto px-4 lg:pl-[76px] py-10 lg:pt-[187px] lg:pb-[77px]">
                    <Image
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                      src={yoohoobg}
                      placeholder="blur"
                      alt="yoohoo"
                    />
                    <div class="relative flex flex-col gap-10 lg:gap-[84px]">
                      <div className="flex flex-col justify-start gap-4">
                        <div className="flex flex-col gap-3">
                          <h6 className="text-sm font-medium lg:font-semibold leading-[120%]">
                            Brand, WebApp, and Mobile App Design
                          </h6>
                          <h1 className="font-semibold lg:font-bold text-2xl lg:text-[80px] lg:leading-[95px] max-w-[705px]">
                            Stream clean video content all day, everyday
                          </h1>
                        </div>
                        <div className="flex w-full">
                          <div
                            id="CTA"
                            class="py-2 px-4 lg:py-4 lg:px-8 rounded-[25px] text-[#DFDFDF] w-auto flex items-center justify-center gap-[10px] lg:text-[14px] text-xs leading-[120%] border border-[#EBEBEC]"
                          >
                            Read More
                            <div className="w-4 h-4 relative">
                              <Image
                                className="object-cover object-center"
                                fill
                                sizes="100vw"
                                placeholder="blur"
                                src={ctaarrow}
                                alt="Arrow Right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-20 lg:w-[131px] h-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 131 60"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_497_3541)">
                            <path
                              d="M33.7655 15.9571C32.1291 15.9659 30.7924 14.6718 30.7658 13.0518C30.7391 11.3813 32.058 10.0343 33.7344 10.0211C35.3842 10.0079 36.7652 11.3813 36.7564 13.021C36.7453 14.6123 35.3842 15.9483 33.7655 15.9571Z"
                              fill="#F79E16"
                            />
                            <path
                              d="M50.2274 15.9571C48.591 15.9659 47.2543 14.6718 47.2277 13.0518C47.201 11.3813 48.52 10.0343 50.1963 10.0211C51.8461 10.0079 53.2272 11.3813 53.2183 13.021C53.2094 14.6123 51.8461 15.9483 50.2274 15.9571Z"
                              fill="#F79E16"
                            />
                            <path
                              d="M44.9185 28.3619C44.9984 27.7786 45.1671 27.2548 45.4269 26.8014C45.4269 26.7926 45.4269 26.7926 45.4269 26.7926C44.9251 25.056 43.7394 23.5703 42.1252 22.4016C40.0647 20.8873 37.287 19.8815 34.3273 19.4853C27.8682 18.6203 22.9279 22.5645 22.1685 28.144C21.4069 33.7234 26.1341 38.3785 32.4755 39.8048C36.2812 40.6719 40.2224 38.636 42.8024 35.6141C43.9948 34.2121 44.8985 32.5899 45.3603 30.9502C44.9629 30.1601 44.7941 29.2819 44.9185 28.3619ZM33.4791 35.1167C29.8843 34.6192 26.889 31.9539 27.3153 28.8373C27.7416 25.7119 30.8613 24.3319 34.4583 24.8139C37.4913 25.2211 39.4297 26.5372 39.7028 28.8043C39.7383 29.0772 39.7494 29.3633 39.7339 29.6626C39.7272 29.8255 39.7139 29.9928 39.6895 30.1689C39.2654 33.2788 36.9518 35.6053 33.4791 35.1167Z"
                              fill="#F79E16"
                            />
                            <path
                              d="M51.9262 19.0206C47.8141 18.4703 44.3125 19.8724 42.1277 22.4035C40.8798 23.8473 40.0494 25.6565 39.7741 27.6792C39.723 28.0556 39.6964 28.4342 39.703 28.8017C39.6875 29.0923 39.7052 29.3806 39.7341 29.6601C39.9517 31.9205 41.0686 33.9652 42.8049 35.6138C44.6589 37.3767 47.2057 38.6863 50.0811 39.34C56.1094 40.709 62.4574 34.8126 63.2168 29.2331C63.9784 23.6558 58.3764 19.8856 51.9262 19.0206ZM51.0758 34.6497C48.5379 34.2932 46.302 32.8625 45.365 30.9543C44.9653 30.1597 44.7966 29.2837 44.9209 28.3637C45.0008 27.7805 45.1696 27.2566 45.4294 26.8032C45.4294 26.7944 45.4294 26.7944 45.4294 26.7944C46.5307 24.7938 49.1352 23.953 52.0528 24.3448C55.6498 24.8268 57.7147 26.5942 57.2906 29.7019C56.8688 32.8119 54.5462 35.1384 51.0758 34.6497Z"
                              fill="#F79E16"
                            />
                            <path
                              d="M44.9185 29.9268C44.9984 29.3435 45.1671 28.8197 45.4269 28.3663C45.4269 28.3575 45.4269 28.3575 45.4269 28.3575C44.9251 26.6209 43.7394 25.1353 42.1252 23.9665C40.0647 22.4523 37.287 21.4464 34.3273 21.0503C27.8682 20.1853 22.9279 24.1294 22.1685 29.7089C21.4069 35.2884 26.1341 39.9435 32.4755 41.3697C36.2812 42.2369 40.2224 40.201 42.8024 37.179C43.9948 35.777 44.8985 34.1549 45.3603 32.5151C44.9629 31.7228 44.7941 30.8446 44.9185 29.9268ZM33.4791 36.6794C29.8843 36.182 26.889 33.5166 27.3153 30.4C27.7416 27.2746 30.8613 25.8946 34.4583 26.3766C37.4913 26.7838 39.4297 28.1 39.7028 30.367C39.7383 30.6399 39.7494 30.926 39.7339 31.2254C39.7272 31.3882 39.7139 31.5555 39.6895 31.7316C39.2654 34.8416 36.9518 37.168 33.4791 36.6794Z"
                              fill="#F6C101"
                            />
                            <path
                              d="M51.926 20.5855C47.8138 20.0353 44.3123 21.4373 42.1274 23.9684C40.8796 25.4123 40.0492 27.2215 39.7738 29.2442C39.7228 29.6205 39.6961 29.9991 39.7028 30.3667C39.6872 30.6572 39.705 30.9455 39.7339 31.2251C39.9515 33.4855 41.0683 35.5302 42.8046 37.1787C44.6587 38.9417 47.2054 40.2513 50.0808 40.905C56.1091 42.274 62.4572 36.3775 63.2166 30.7981C63.9782 25.2208 58.3762 21.4483 51.926 20.5855ZM51.0756 36.2125C48.5377 35.8559 46.3017 34.4253 45.3647 32.517C44.9651 31.7225 44.7963 30.8465 44.9207 29.9265C45.0006 29.3432 45.1694 28.8194 45.4291 28.366C45.4291 28.3572 45.4291 28.3572 45.4291 28.3572C46.5304 26.3565 49.1349 25.5157 52.0525 25.9075C55.6495 26.3895 57.7145 28.1569 57.2904 31.2647C56.8685 34.3769 54.546 36.7011 51.0756 36.2125Z"
                              fill="#F6C101"
                            />
                            <path
                              d="M112.633 28.3619C112.713 27.7786 112.881 27.2548 113.141 26.8014C113.141 26.7926 113.141 26.7926 113.141 26.7926C112.639 25.056 111.454 23.5703 109.84 22.4016C107.779 20.8873 105.001 19.8815 102.042 19.4853C95.5826 18.6203 90.6422 22.5645 89.8828 28.144C89.1213 33.7234 93.8484 38.3785 100.19 39.8047C103.996 40.6719 107.937 38.636 110.517 35.6141C111.709 34.2121 112.613 32.5899 113.075 30.9502C112.675 30.1601 112.506 29.2819 112.633 28.3619ZM101.193 35.1167C97.5986 34.6192 94.6034 31.9539 95.0297 28.8373C95.456 25.7119 98.5756 24.3319 102.173 24.8139C105.206 25.2211 107.144 26.5372 107.417 28.8042C107.453 29.0772 107.464 29.3633 107.448 29.6626C107.442 29.8255 107.428 29.9928 107.404 30.1689C106.978 33.2788 104.666 35.6053 101.193 35.1167Z"
                              fill="#F79E16"
                            />
                            <path
                              d="M119.638 19.0206C115.526 18.4703 112.024 19.8724 109.84 22.4035C108.592 23.8473 107.761 25.6565 107.486 27.6792C107.435 28.0556 107.408 28.4342 107.415 28.8017C107.399 29.0923 107.417 29.3806 107.446 29.6601C107.664 31.9205 108.78 33.9652 110.517 35.6138C112.371 37.3767 114.918 38.6863 117.793 39.34C123.821 40.709 130.169 34.8126 130.929 29.2331C131.693 23.6558 126.088 19.8856 119.638 19.0206ZM118.788 34.6497C116.25 34.2932 114.014 32.8625 113.077 30.9543C112.677 30.1597 112.508 29.2837 112.633 28.3637C112.713 27.7805 112.882 27.2566 113.141 26.8032C113.141 26.7944 113.141 26.7944 113.141 26.7944C114.243 24.7937 116.847 23.953 119.765 24.3447C123.362 24.8268 125.427 26.5941 125.003 29.7019C124.581 32.8119 122.26 35.1383 118.788 34.6497Z"
                              fill="#F79E16"
                            />
                            <path
                              d="M112.633 29.9268C112.713 29.3435 112.882 28.8197 113.142 28.3663C113.142 28.3575 113.142 28.3575 113.142 28.3575C112.64 26.6209 111.454 25.1353 109.84 23.9665C107.779 22.4523 105.002 21.4464 102.042 21.0503C95.5828 20.1853 90.6425 24.1294 89.8831 29.7089C89.1215 35.2884 93.8487 39.9434 100.19 41.3697C103.996 42.2369 107.937 40.201 110.517 37.179C111.709 35.777 112.613 34.1549 113.075 32.5151C112.675 31.7228 112.506 30.8446 112.633 29.9268ZM101.194 36.6794C97.5989 36.182 94.6036 33.5166 95.0299 30.4C95.4562 27.2746 98.5759 25.8946 102.173 26.3766C105.206 26.7838 107.144 28.1 107.417 30.367C107.453 30.6399 107.464 30.926 107.448 31.2254C107.442 31.3882 107.428 31.5555 107.404 31.7316C106.978 34.8416 104.666 37.168 101.194 36.6794Z"
                              fill="#F6C101"
                            />
                            <path
                              d="M119.638 20.5855C115.526 20.0353 112.025 21.4373 109.84 23.9684C108.592 25.4123 107.762 27.2215 107.486 29.2442C107.435 29.6205 107.409 29.9991 107.415 30.3667C107.4 30.6572 107.417 30.9455 107.446 31.225C107.664 33.4855 108.781 35.5302 110.517 37.1787C112.371 38.9417 114.918 40.2513 117.793 40.905C123.822 42.274 130.17 36.3775 130.929 30.7981C131.693 25.2208 126.089 21.4483 119.638 20.5855ZM118.788 36.2125C116.25 35.8559 114.014 34.4253 113.077 32.517C112.677 31.7225 112.509 30.8465 112.633 29.9265C112.713 29.3432 112.882 28.8194 113.142 28.366C113.142 28.3572 113.142 28.3572 113.142 28.3572C114.243 26.3565 116.847 25.5157 119.765 25.9075C123.362 26.3895 125.427 28.1569 125.003 31.2647C124.581 34.3769 122.261 36.7011 118.788 36.2125Z"
                              fill="#F6C101"
                            />
                            <path
                              d="M17.6655 20.3877C16.9972 19.8462 14.1351 19.4853 13.3047 20.6496C12.6097 21.618 13.9997 23.896 14.4637 24.6047C17.7366 29.4381 13.8309 32.1519 12.5009 32.1189C11.3485 32.0947 8.60194 32.7197 7.18756 26.2158C6.17507 21.5674 -0.323973 20.7706 0.0113034 24.2944C1.54558 40.3197 13.036 35.3939 12.9028 38.6118C12.8184 40.6036 12.7008 42.4987 12.2966 43.9161C11.2908 47.4267 9.27472 51.4303 9.27472 53.9702C9.27472 56.3054 10.4648 59.028 12.9161 59.5188C19.6972 60.8658 28.3988 29.0617 17.6655 20.3877Z"
                              fill="#F6C101"
                            />
                            <path
                              d="M12.9207 59.5209C12.1658 59.3712 11.5308 59.008 11.0156 58.5106C17.2837 54.8702 23.5896 28.2846 14.2751 20.0309C15.4608 19.6832 17.1705 19.9825 17.6656 20.3875C28.3989 29.0615 19.6951 60.8635 12.9207 59.5209Z"
                              fill="#F79E16"
                            />
                            <path
                              d="M66.1807 1.18422C71.0499 -2.75553 72.0269 4.00367 71.5651 8.86343C71.3985 10.666 70.2462 20.1611 71.5651 24.7149C72.5665 28.2254 74.5848 32.229 74.5848 34.7711C74.5848 37.1042 73.3991 39.829 70.9478 40.3198C64.1468 41.6712 55.6605 10.052 66.1807 1.18422Z"
                              fill="#F6C101"
                            />
                            <path
                              d="M71.5652 40.1371C71.3698 40.2141 71.1611 40.2757 70.9435 40.3175C64.1469 41.6689 55.6606 10.0519 66.1785 1.18415C67.7195 -0.0638039 68.8696 -0.239882 69.7067 0.25974C69.2649 0.449024 68.7742 0.750558 68.239 1.18415C58.4538 9.43782 65.115 37.3792 71.5652 40.1371Z"
                              fill="#F79E16"
                            />
                            <path
                              d="M77.5715 21.3271C73.6147 21.3271 70.4441 22.9163 68.5012 25.3924C67.1668 27.0937 66.4141 29.2243 66.4141 31.5221C66.4141 35.0304 68.5345 37.9027 71.7385 39.7009H71.7474C71.7496 39.7031 71.7519 39.7031 71.7541 39.7053C72.1093 39.9056 72.5579 39.7053 72.6422 39.3091C72.7999 38.5564 72.9908 37.8257 73.2173 37.1236C73.5304 36.1507 73.3838 35.0921 72.7421 34.2843C72.1116 33.492 71.7385 32.5521 71.7385 31.5133C71.7385 28.3681 74.7183 26.5853 78.4396 26.5853C82.161 26.5853 84.499 28.0533 84.499 31.1919C84.499 32.156 84.3081 33.0694 83.9395 33.8727C83.2889 35.2924 82.7916 36.7758 82.6583 38.3231C82.6495 38.4309 82.6384 38.5388 82.6273 38.6444L82.625 38.6576C82.5162 39.7978 83.8462 40.5593 84.8121 39.8946C88.1427 37.6056 90.4608 33.5624 90.4608 29.9484C90.4652 24.3205 84.2481 21.3271 77.5715 21.3271Z"
                              fill="#F6C101"
                            />
                            <path
                              d="M77.5691 21.3252C77.2782 21.3252 76.9873 21.334 76.7053 21.3516C82.9557 21.6619 88.5111 24.6311 88.5111 29.9486C88.5111 33.4944 86.2796 37.4518 83.0512 39.7584C83.5019 40.1766 84.228 40.2998 84.8141 39.8971C88.1469 37.608 90.465 33.5626 90.465 29.9486C90.465 24.3207 84.2502 21.3252 77.5691 21.3252Z"
                              fill="#F79E16"
                            />
                            <path
                              d="M70.6726 39.0366C70.6954 39.0547 70.7182 39.0683 70.7387 39.0841V39.0796C70.7159 39.0683 70.6954 39.0502 70.6726 39.0366Z"
                              fill="#F6B508"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_497_3541">
                              <rect width="131" height="59.5629" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-2 w-full">
                    <div className="">
                      <h6 className="g40 font-semibold">YooHoo, 2021</h6>
                      <span className="g90 text-sm">
                        Brand Identity & Product Design
                      </span>
                    </div>
                    <div className="g90 max-w-[422px!important]">
                      A video streaming platform for clean and family content.
                    </div>
                  </div>
                </Link>

                <Link
                  href="/projects/contentionary"
                  id="Contentionary"
                  className="flex flex-col gap-4"
                >
                  <div className="content-1 px-[0!important] bg-[#363738]">
                    <div className="g10">
                      <h6 className="text-sm font-medium lg:font-semibold leading-[120%]">
                        Website, WebApp, and Mobile Design
                      </h6>
                      <h2 className="xl:text-[80px] xl:leading-[95px] text-2xl font-bold">
                        Contentionary
                      </h2>
                      <div className="flex flex-row gap-[10px] items-center">
                        <span className="text-sm text-[#69A9E9] leading-[120%]">
                          Read More
                        </span>
                        <span className="w-4 h-4">
                          <Image
                            src={arrowright}
                            quality={100}
                            placeholder="blur"
                            alt="Arrow Right"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="w-full relative h-auto max-w-[353px] md:max-w-none flex flex-col">
                      <Image
                        className="hidden md:block w-full h-auto "
                        src={condesktop}
                        quality={100}
                        placeholder="blur"
                        alt="Contentionary"
                      />
                      <Image
                        className="block md:hidden w-full h-auto "
                        src={conmobile}
                        quality={100}
                        placeholder="blur"
                        alt="Contentionary"
                      />
                    </div>
                  </div>

                  <div className="content-2 w-full">
                    <div className="">
                      <h6 className="g40 font-semibold">Contentionary, 2022</h6>
                      <span className="g90 text-sm">UI Design (Web)</span>
                    </div>
                    <div className="g90 lg:max-w-[323px!important]">
                      Share, Sell, Engage and Impact your students or
                      subscribers on your terms.
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </main>

        <footer className="setbody d-140">
          <div>
            <div id="actual-footer">
              <div className="">Alex Oyebade</div>
              <div>
                <ul className="">
                  <li>
                    <Link href="mailto:ao.dsgnr@gmail.com">Contact me</Link>
                  </li>
                  <li>
                    <Link href="https://read.cv/join/alexoyebade">resumé</Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/iamalexoyebade/">
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/iamalexoyebade">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="https://dribbble.com/AlexOye">dribble</Link>
                  </li>
                </ul>
                <span className="d-150">copyright 2023 alex oyebade</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
