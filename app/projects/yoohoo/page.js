import NavbarDark from "@/components/navbar-dark";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/images/cta-arrow.png";
import arrowleft from "@/public/images/arrow-left.png";
import Hero from "@/public/images/yoohoo/Hero.png";
import yoohoo from "@/public/images/yoohoo/yoohoo.svg";
import Img1 from "@/public/images/yoohoo/Img1.png";
import Img2 from "@/public/images/yoohoo/Img2.png";
import Img3 from "@/public/images/yoohoo/Img3.png";
import Img4 from "@/public/images/yoohoo/Img4.png";
import Img5 from "@/public/images/yoohoo/Img5.png";
import Img6 from "@/public/images/yoohoo/Img6.png";
import Img7 from "@/public/images/yoohoo/Img7.png";
import mindmap from "@/public/images/yoohoo/mind-map.png";
import m2f from "@/public/images/yoohoo/m3-follow.svg";
import Img8 from "@/public/images/yoohoo/1Img.png";
import Img9 from "@/public/images/yoohoo/Img9.svg";
import Img10 from "@/public/images/yoohoo/Img10.svg";
import fImg1 from "@/public/images/yoohoo/fImg1.svg";
import fImg2 from "@/public/images/yoohoo/fImg2.svg";
import fImg3 from "@/public/images/yoohoo/fImg3.svg";
import fImg4 from "@/public/images/yoohoo/fImg4.svg";
import fImg5 from "@/public/images/yoohoo/fImg5.svg";
import Img11 from "@/public/images/yoohoo/2Img.png";
import Img12 from "@/public/images/yoohoo/3Img.png";
import Img13 from "@/public/images/yoohoo/4Img.png";
import arrowright from "@/public/images/arrow-right.png";
import ctaarrow from "@/public/images/cta-arrow.png";

function Collect() {
  return (
    <div className="bg-[#fff]">
      <NavbarDark className="fixed" />

      <header className="setbody bg-[#161718]">
        <div>
          <div className="bg-[#161718] yc-cont pt-20 lg:pt-[135px]">
            <div className="yc">
              <Link href="/" className="phc-x1">
                <div>
                  <Image
                    className="w-3 h-3"
                    placeholder="blur"
                    src={arrowleft}
                    alt="arrow-left"
                  />
                </div>
                <h6>Back to home</h6>
              </Link>
              <h1 className="">YooHoo</h1>
              <div className="flex gap-2 lg:gap-3 items-center">
                <Image
                  className="h-6 w-auto lg:h-auto"
                  src={yoohoo}
                  alt="Yoohoo"
                />
                <span class="yc-s whitespace-nowrap">
                  Brand Design, Mobile & Webapp Design
                </span>
              </div>
            </div>
            <div className="yci flex flex-col justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center w-full max-w-[1227px]">
                <Image
                  className=" w-full h-auto"
                  placeholder="blur"
                  src={Hero}
                  alt="Yoohoo"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="setbody g20">
          <div>
            <div className="w-full grid gap-3 lg:gap-[81px] pt-20 pb-6 lg:pt-[209px] lg:pb-[174px]">
              <div className="fheader-bottom">
                <h6>our story</h6>
                <p className="text-[#898A8A!important] max-w-[1253px!important]">
                  <span className="text-[#252627!important]">
                    It’s all about excitement!
                  </span>{" "}
                  YooHoo began with the desire to be the #1 location for
                  power-packed, action-filled, and emotion-inducing TV shows and
                  movie series.
                </p>
              </div>
              <div
                className="fheader-bottom"
                style={{ rowGap: "0px!important" }}
              >
                <p className="text-[#898A8A!important] max-w-[1253px!important]">
                  It is with this singular goal that we have set out to build
                  the biggest movie streaming platform globally.{" "}
                  <span className="text-[#252627!important]">
                    YooHoo! is the sound of excitement; the sound of happiness;
                    the sound of hope; and the sound of families having the best
                    time ever!
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center px-5 lg:px-0 pb-20 lg:pb-[138px]">
              <div className="flex justify-center items-center max-w-[642px]">
                <Image
                  src={Img1}
                  alt="Landing Page - Ipad"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="setbody">
          <div>
            <div className="m2-cont">
              <div className="m2-cont-h2">
                <h2>Mind Map</h2>
              </div>
              <div className="m2c-cont">
                <div>
                  <Image
                    src={mindmap}
                    alt="Mind Map"
                    quality={100}
                    placeholder="blur"
                  />
                </div>
                <div>
                  <Image src={m2f} alt="Mind Map" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody relative overflow-hidden">
          <div className="relative">
            <Image
              src={Img8}
              alt=""
              className="object-center object-cover w-full h-auto z-10"
              fill
            />
            <div className="logo-cont">
              <div className="lc-three relative ">
                <h2>Main Logo</h2>
                <div>
                  <Image
                    className="hidden lg:block"
                    src={Img9}
                    alt="Two friends smilling"
                  />
                  <Image
                    className="block lg:hidden"
                    src={Img10}
                    alt="Two friends smilling"
                  />
                </div>
                <div>
                  <h6>Our logo is our flag.</h6>
                  <p>
                    It represents us, who we are and what we stand for. A symbol
                    of identity and trust in the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody relative overflow-hidden">
          <div className="relative">
            <Image
              src={Img12}
              alt="A group of friends"
              className="block lg:hidden object-center object-cover w-full h-auto"
              fill
              sizes="100vw"
            />
            <Image
              src={Img13}
              alt="A group of friends"
              className="hidden lg:block object-center object-cover w-full h-auto"
              fill
              sizes="100vw"
            />
            <div className="relative cp-cont">
              <h2>Colour Palette</h2>
              <p>It represents us, who we are and what we stand for. </p>
            </div>
          </div>
        </section>

        <section className="setbody">
          <div>
            <div class="ytwo-rows">
              <div className="flex lg:flex-row flex-col justify-between py-16 px-[57px] lg:px-20 gap-[56px] lg:pl-[149px] lg:pt-[229px] lg:gap-8 lg:pr-[133px]">
                <div>
                  <Image src={fImg1} alt="YOOHOO LOGO" />
                </div>
                <div>
                  <Image src={fImg2} alt="YOOHOO LOGO on black background" />
                </div>
              </div>
              <div className="ythree-rows">
                <div>
                  <h6>Standard Colour</h6>
                  <div>
                    <Image src={fImg3} alt="Standard Colour" />
                  </div>
                </div>
                <div>
                  <h6>Monotone White</h6>
                  <div>
                    <Image src={fImg4} alt="Monotone White" />
                  </div>
                </div>
                <div>
                  <h6>Monotone Black</h6>
                  <div>
                    <Image src={fImg5} alt="Monotone Black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody relative overflow-hidden">
          <div className="relative">
            <Image
              src={Img11}
              alt="A group of friends of smilling"
              className=" object-center object-cover w-full h-auto"
              fill
              sizes="100vw"
            />
            <div className="relative ytt-cont">
              <div className="ytt2-1">
                <h2>Typography</h2>
                <p>
                  Typography clarity and hierarchy are extremely important for
                  the brand communication.
                  <span className="text-white">
                    {" "}
                    Neue Machina and DM Sans are our brand fonts.
                  </span>
                </p>
              </div>
              <div className="ytt2-2">
                <h3 className=" font-extrabold">Aa</h3>
                <h3 className=" font-normal">Aa</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody">
          <div>
            <div>
              <Image src={Img2} alt="Coffee mockup" placeholder="blur" />
            </div>
          </div>
        </section>

        <section className="setbody">
          <div>
            <div>
              <Image src={Img3} alt="Wristband" placeholder="blur" />
            </div>
          </div>
        </section>

        <section className="setbody">
          <div>
            <div className="md-cont">
              <div className="md">
                <h2>Mobile Design</h2>
                <p>
                  To allow ease of use and democratise entry points, we went
                  mobile first in the website design.
                </p>
              </div>
              <div className="max-w-[411px]">
                <Image
                  src={Img4}
                  alt="Landing Page - Mobile"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div className="ydash-cont">
              <h2 className="">Dashboard</h2>
              <div className="ydash">
                <div className="">
                  <Image
                    className="w-full h-auto"
                    src={Img5}
                    alt="Home Page"
                    placeholder="blur"
                  />
                </div>
                <div className="">
                  <Image
                    className="w-full h-auto"
                    src={Img6}
                    alt="Discover Page"
                    placeholder="blur"
                  />
                </div>
                <div className="">
                  <Image
                    className="w-full h-auto"
                    src={Img7}
                    alt="Home Page"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-[#161718] setbody">
        <div>
          <div className="w-full max-w-[1239px] pt-20 pb-8 lg:pt-[216px] lg:pb-[196px]">
            <div className="fheader-bottom-alt">
              <h6>Reflection</h6>
              <p>
                This is by far one of the most interesting and mentally
                stimulating projects I’ve worked on. It helped me develop my
                capacity as a full-range professional.
                <span className="text-[#989999]">
                  {" "}
                  The next step was to go to beta development and rounds of
                  testing but I’m no more involved with this project.
                </span>
              </p>
            </div>
          </div>

          <div className="flex bg-[#161718] px-5 lg:justify-center lg:items-center pb-20 lg:pt-[61px] lg:pb-[182px]">
            <Link
              href="/projects/contentionary"
              className="project-ctas xx1 g10 hover:border-[#69A9E9]  hover:text-[#69A9E9!important]"
            >
              <span>Next Project</span>

              <Image
                className="yy1 hidden lg:w-4 lg:h-4 w-3 h-3 shrink-0"
                src={arrowright}
                quality={100}
                placeholder="blur"
                alt="Arrow Right"
              />
              <Image
                className="lg:w-4 lg:h-4 w-3 h-3 ww1 shrink-0"
                src={arrow}
                alt="Arrow Right"
              />
            </Link>
          </div>

          <footer className="setbody bg-[#161718] d-140">
            <div>
              <div id="actual-footer">
                <div className="">Alex Oyebade</div>
                <div>
                  <ul className="">
                    <li>
                      <Link href="mailto:ao.dsgnr@gmail.com">Contact me</Link>
                    </li>
                    <li>
                      <Link href="https://read.cv/join/alexoyebade">
                        resumé
                      </Link>
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
      </section>
    </div>
  );
}

export default Collect;
