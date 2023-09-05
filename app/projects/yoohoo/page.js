import NavbarDark from "@/components/navbar-dark";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/images/cta-arrow.png";
import arrowleft from "@/public/images/arrow-left.png";
import Hero from "@/public/images/yoohoo/Hero.png";
import yoohoo from "@/public/images/yoohoo/yoohoo.svg";
import Img1 from "@/public/images/yoohoo/Img1.png";
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
                <span class="yc-s whitespace-nowrap">Brand Design, Mobile & Webapp Design</span>
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
                  <Image src={mindmap} alt="Mind Map" quality={100} placeholder="blur" />
                </div>
                <div>
                  <Image src={m2f} alt="Mind Map" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Collect;
