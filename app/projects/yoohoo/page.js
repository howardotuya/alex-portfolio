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
import m2f from "@/public/images/yoohoo/m2-follow.svg";

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
                <Image src={Img1} alt="Ipad" />
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

        <section className="setbody">
          <div>
            <div>
              <Image src={Img2} alt="" placeholder="blur" />
            </div>
          </div>
        </section>

        <section className="setbody">
          <div>
            <div>
              <Image src={Img3} alt="" placeholder="blur" />
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
                <Image src={Img4} alt="" placeholder="blur" />
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
                  <Image className="w-full h-auto" src={Img5} alt="" placeholder="blur" />
                </div>
                <div className="">
                  <Image className="w-full h-auto" src={Img6} alt="" placeholder="blur" />
                </div>
                <div className="">
                  <Image className="w-full h-auto" src={Img7} alt="" placeholder="blur" />
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
                {" "} The next step was to go to beta development and rounds of
                  testing but I’m no more involved with this project.
                </span>
              </p>
            </div>
          </div>
          
          <div className="flex bg-[#161718] px-5 lg:justify-center lg:items-center pb-20 lg:pt-[61px] lg:pb-[182px]">
            <Link href="/projects/contentionary" className="project-ctas">
              <span>Next Project</span>
              <Image className="w-4 h-4" src={arrow} alt="Arrow Right" />
            </Link>
          </div>

          <footer className="setbody bg-[#161718] d-140">
            <div>
              <div id="actual-footer">
                <div className="">Alex Oyebade</div>
                <div>
                  <ul className="">
                    <li>Contact me</li>
                    <li>resumé</li>
                    <li>Linkedin</li>
                    <li>TWitter</li>
                    <li>dribble</li>
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
