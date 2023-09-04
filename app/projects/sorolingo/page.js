import Image from "next/image";
import Link from "next/link";
import NavbarLight from "@/components/navbar-light";
import Img1 from "@/public/images/sorolingo/Img1.png";
import Img2 from "@/public/images/sorolingo/Img2.png";
import Img4 from "@/public/images/sorolingo/Img4.png";
import Img5 from "@/public/images/sorolingo/Img5.png";
import Img6 from "@/public/images/sorolingo/Img6.png";

export default function Sorolingo() {
  return (
    <div className="g20">
      <div class="flex flex-col gap-4 lg:gap-6 g20-alt justify-center items-center">
        <span className="g20 absolute">
          <NavbarLight />
        </span>

        <header className="setbody g20 pt-[184px] lg:pt-[172px]">
          <div className="no-use">
            <div className="pollenHeader px-5 lg:px-6">
              <div className="">
                <Link href="/" className="fheader-button">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                    >
                      <path
                        d="M8.00014 10.335C7.90514 10.335 7.81014 10.3 7.73514 10.225L4.47514 6.96499C3.94514 6.43499 3.94514 5.56499 4.47514 5.03499L7.73514 1.77499C7.88014 1.62999 8.12014 1.62999 8.26514 1.77499C8.41014 1.91999 8.41014 2.15999 8.26514 2.30499L5.00514 5.56499C4.76514 5.80499 4.76514 6.19499 5.00514 6.43499L8.26514 9.69499C8.41014 9.83999 8.41014 10.08 8.26514 10.225C8.19014 10.295 8.09514 10.335 8.00014 10.335Z"
                        fill="#363738"
                      />
                    </svg>
                  </div>
                  <span>Back to home</span>
                </Link>
              </div>
              <h1>Sorolingo</h1>
              <div className="max-w-[209px] lg:max-w-[773px]">
                <Image src={Img1} alt="Sorolingo" />
              </div>
            </div>
          </div>
        </header>

        <section className="setbody g20">
          <div>
            <div className="pollen-sec2 pb-[40px!important] lg:pb-[152px!important]">
              <h2 className="text-[#252627] lg:max-w-[985px!important]">
                Learn Nigerian Languages
              </h2>
              <div>
                <p className="text-[#898A8A]">
                  <span className="text-[#363738]">Sorolingo</span> is an online
                  learning platform that makes it easy for Nigerians in diaspora
                  to not only learn how to speak their languages but to also
                  become fluent, become confident, and able to read and write
                  their native languages.
                </p>
                <p className="text-[#363738]">
                  It was founded by young Nigerians who are dedicated to keeping
                  the Nigerian culture alive.
                </p>
              </div>
            </div>
            <div className="px-5 zheader-top3 pb-20 lg:pb-[72px]">
              <div>
                <h6>Client</h6>
                <p>
                  <span>Sorolingo</span>
                  <span>March 2022 - June 2022</span>
                </p>
              </div>
              <div>
                <h6>Contribution</h6>
                <p>
                  <span>User Research</span>
                  <span>Storyboarding</span>
                  <span>User Flows & Wireframes</span>
                </p>
              </div>
              <div>
                <h6>Team</h6>
                <p>
                  <span>Omolola Adegoke</span>
                  <span>Naheem Lan</span>
                  <span>Olaide Noah</span>
                  <span>Tayo Olakunle</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div className="py-20 lg:py-[177px] inline-flex justify-center items-center w-full">
              <div className="w-[209px] md:w-[425px] inline-flex justify-center items-center">
                <Image
                  className="w-full h-auto"
                  src={Img2}
                  alt="Completed Module"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20-alt">
          <div>
            <div className="grid lg:gap-[120px] gap-10 py-20 lg:py-[216px]">
              <div className="w-full max-w-[1212px!important]">
                <div className="fheader-bottom">
                  <h6>the problem</h6>
                  <p className=" max-w-[1212px!important]">
                    <span class="text-[#989999]">
                      The advent of fast-speed internet and the new normal
                      brought about by the Covid-19 pandemic has shown the world
                      new ways of engaging content and educational content isn’t
                      any different.
                    </span>{" "}
                    Creators and educators the world over are looking for ways
                    to position themselves as innovative and meet the
                    requirements of the recent times.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-[1212px!important]">
                <div className="fheader-bottom">
                  <h6>the solution</h6>
                  <p className=" max-w-[1307px!important]">
                    I designed an all-inclusive and responsive web-app for
                    creators, educators, authors, and learners. Educators are
                    able to create centers, set tests, create exams, and upload
                    course materials for their students. Learners are able to
                    take quizzes, join leagues, and give feedback to the
                    educators too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div className="competitive-ana-cont grid lg:gap-[159px] gap-8 py-20 lg:py-[216px]">
              <div className="w-full max-w-[1217px!important]">
                <div className="fheader-bottom">
                  <h6>competitive analysis</h6>
                  <p className=" max-w-[1217px!important]">
                    <span class="text-[#989999]">
                      We did a comprehensive research of the direct and indirect
                      competitors to know
                    </span>{" "}
                    what’s currently available and what’s missing..
                  </p>
                </div>
              </div>
              <div className="ca-cover px-5 lg:px-6">
                <div className="ca-lcont">
                  <div className="w-[132px] lg:w-[223px]">
                    <Image className="w-full h-auto" src={Img4} alt="" placeholder="blur" quality={100} />
                  </div>
                  <p className="lg:max-w-[380px]">
                    The Mandla app is a black owned online language learning app
                    created for those who seek to strengthen their unbreakable
                    connection with their African roots. Currently offering
                    courses in 15 languages including Yoruba, Mooré, Igbo,
                    Swahili, Xhosa, Kassem, etc.
                  </p>
                </div>
                <div className="ca-lcont">
                  <div className="w-[74px] lg:w-[119px]">
                    <Image className="w-full h-auto" src={Img5} alt="" placeholder="blur" quality={100} />
                  </div>
                  <p className="lg:max-w-[291px]">
                    This is a game-like app targeted at kids in order to promote
                    the African culture among them through mobile technology.
                    The updated version of the app is available on both the Play
                    store and the App Store.
                  </p>
                </div>
                <div className="ca-lcont">
                  <div className="w-[132px] lg:w-[218px]">
                    <Image className="w-full h-auto" src={Img6} alt="" placeholder="blur" quality={100} />
                  </div>
                  <p className="lg:max-w-[303px]">
                    Owned by Google, Duolingo is a major player in the language
                    learning industry. They have the mostly spoken languages on
                    their app. It is free but with ads. To take away the ads
                    mean paying for Duolingo Plus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
