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
import NavbarLight from "@/components/navbar-light";

export default function Home() {
  return (
    <div class="flex flex-col gap-4 lg:gap-6 bg-[#252627] justify-center items-center">
      <span className="g20 absolute">
        <NavbarLight />
      </span>
      <header className="g20 header-full setbody">
        <div>
          <div className="lg:pt-[245px] self-end items-end flex flex-col justify-center w-full h-full lg:h-auto pr-5 lg:pr-[21.53%]">
            <Image
              className="hidden lg:flex max-w-[323px] lg:max-w-[746px] w-full h-auto"
              placeholder="blur"
              quality={100}
              src={memojimessage}
              alt="Memoji Message"
            />
            <Image
              className="flex lg:hidden max-w-[323px] lg:max-w-[746px] w-full h-auto"
              placeholder="blur"
              quality={100}
              src={memojimessageS}
              alt="Memoji Message"
            />
          </div>
        </div>
      </header>

      <main className="bg-[#161718] setbody">
        <div>
          <section className="px-5 py-24 lg:pl-6 lg:pt-[184px] lg:pb-[214px] g30 flex flex-col gap-8 lg:gap-16">
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

          <section className="px-5 lg:px-6 pb-24 lg:pb-[170px]">
            <div
              id="header-selectedProjects"
              className="uppercase g30 text-[18px] leading-[119%] lg:text-[32px] flex flex-col gap-3 font-bold"
            >
              <h2>Selected Projects</h2>
              <div className="w-full">
                <div className="h-[2px] w-full bg-[#363738]"></div>
              </div>
            </div>

            <div>
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
                        alt="Flow Finance"
                      />
                      <Image
                        className="block md:hidden w-full h-auto "
                        src={zacracm}
                        quality={100}
                        placeholder="blur"
                        alt="Flow Finance"
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
                    href="/projects/sorolingo" id="Surolingo" className="flex flex-col gap-4">
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
              </div>
              <div className="flex pt-12 lg:pt-[120px] w-full items-center justify-center">
                <Link
                  href="/all-projects"
                  id="CTA"
                  class="py-2 px-4 rounded-[20px] w-auto flex justify-center items-center gap-1 text-[14px] leading-[120%] g10 border border-[#fafafa]"
                >
                  View All Projects
                  <Image className="w-3 h-3" src={ctaarrow} alt="Arrow Right" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="g20 setbody">
        <div>
          <section className="px-5 py-24 lg:pl-6 lg:pt-[184px] lg:pb-[214px] g50 flex flex-col gap-4 lg:gap-6">
            <h6 className="lg:text-xl lg:font-bold font-semibold text-base uppercase">
              life outside design
            </h6>
            <div>
              <p className="lg:text-[56px] lg:leading-[72px] lg:font-bold font-semibold text-base leading-[160%]">
                <span className="block">
                  I realised early that I am a people person. I love to help
                  people see new perspectives and help them get unstuck. So when
                  I’m not pushing impactful pixels, you’d find me in virtual and
                  physical communities leading conversations on topics around
                  emotional intelligence for tech talents.
                </span>
                <span className="g80 pt-3 lg:pt-[72px] block">
                  Oh, and I take the best iPhone pictures too. Now pose! 😎 📸
                </span>
              </p>
            </div>
          </section>

          <div id="actual-footer">
            <div className="d-110">Alex Oyebade</div>
            <div>
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
      </footer>
    </div>
  );
}
