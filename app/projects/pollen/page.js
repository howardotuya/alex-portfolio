import Image from "next/image";
import Link from "next/link";
import NavbarLight from "@/components/navbar-light";
import Img1 from "@/public/images/pollen/Img1.png";
import Img2 from "@/public/images/pollen/Img2x.png";
import Img3 from "@/public/images/pollen/Img3.png";
import Img4 from "@/public/images/pollen/Img5.png";
import Img5 from "@/public/images/pollen/Img4.png";
import Img6 from "@/public/images/pollen/Img6.png";
import arrow from "@/public/images/cta-arrow.svg";
import onb1 from "@/public/images/pollen/onb1.png";
import onb2 from "@/public/images/pollen/onb2.png";
import onb3 from "@/public/images/pollen/onb3.png";
import onb4 from "@/public/images/pollen/onb4.png";
import onb5 from "@/public/images/pollen/onb5.png";
import ac1 from "@/public/images/pollen/ac1.png";
import ac2 from "@/public/images/pollen/ac2.png";
import ac3 from "@/public/images/pollen/ac3.png";
import ac4 from "@/public/images/pollen/ac4.png";
import ac5 from "@/public/images/pollen/ac5.png";
import dashboard from "@/public/images/pollen/dashboard.png";
import t1 from "@/public/images/pollen/t1.png";
import t2 from "@/public/images/pollen/t2.png";
import t3 from "@/public/images/pollen/t3.png";
import t4 from "@/public/images/pollen/t4.png";
import next from "@/public/images/pollen/next.png";
import arrowright from "@/public/images/arrow-right.svg";
import ctaarrow from "@/public/images/cta-arrow.svg";

export default function Home() {
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
                <Link
                  href="/"
                  className="fheader-button xyx1 hover:border-[#69A9E9] hover:text-[#69A9E9!important]"
                >
                  <div>
                    <svg
                      className="xyx2 hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                    >
                      <path
                        d="M8.00014 10.335C7.90514 10.335 7.81014 10.3 7.73514 10.225L4.47514 6.96499C3.94514 6.43499 3.94514 5.56499 4.47514 5.03499L7.73514 1.77499C7.88014 1.62999 8.12014 1.62999 8.26514 1.77499C8.41014 1.91999 8.41014 2.15999 8.26514 2.30499L5.00514 5.56499C4.76514 5.80499 4.76514 6.19499 5.00514 6.43499L8.26514 9.69499C8.41014 9.83999 8.41014 10.08 8.26514 10.225C8.19014 10.295 8.09514 10.335 8.00014 10.335Z"
                        fill="#69A9E9"
                      />
                    </svg>
                    <svg
                      className="xyx3"
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
              <h1>Pollen</h1>
              <div className="max-w-[209px] lg:max-w-[773px]">
                <Image
                  src={Img1}
                  alt="Pollen"
                  quality={100}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="setbody g20">
          <div>
            <div className="pollen-sec2">
              <h2 className="text-[#252627]">Learn Smart Money Habits</h2>
              <div>
                <p className="text-[#898A8A]">
                  <span className="text-[#363738]">Pollen</span> is a financial
                  literacy app for young kids and young adults.
                </p>
                <p className="text-[#363738]">
                  Conceived to bring financial literacy to the next generation
                  of Africans so as to inculcate in them smart money habits
                  right from their early years.
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
                  alt="Leaderboard"
                  placeholder="blur"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20-alt">
          <div>
            <div className="px-5 lg:px-6 py-20 lg:pt-[100px] lg:pb-[50px]">
              <Image
                className="w-full h-auto"
                src={Img3}
                alt="Pollen"
                placeholder="blur"
                quality={100}
              />
            </div>
          </div>
        </section>

        <section className="setbody g20-alt">
          <div>
            <div className="lg:px-6 px-5 pb-20 lg:py-[105px] grid lg:grid-cols-2 gap-6">
              <Image
                src={Img4}
                alt="Pollen Banner 1"
                placeholder="blur"
                quality={100}
              />
              <Image
                src={Img5}
                alt="Pollen Banner 2"
                placeholder="blur"
                quality={100}
              />
            </div>
          </div>
        </section>

        <section className="setbody bg-black">
          <div>
            <div className="lg:px-6 py-20 lg:py-[214px]">
              <Image
                src={Img6}
                alt="Pollen Colour Code 1"
                placeholder="blur"
                quality={100}
              />
            </div>
          </div>
        </section>

        <section className="setbody g20-alt">
          <div>
            <div className="grid lg:gap-[120px] gap-10 py-20 lg:py-[216px]">
              <div className="w-full max-w-[1351px!important]">
                <div className="fheader-bottom">
                  <h6>the problem</h6>
                  <p className=" max-w-[1351px!important]">
                    <span class="text-[#989999]">
                      The World Bank data had shown that four in every ten
                      Nigerians live below the poverty line of $1.9 per day.
                      This statistics isn’t helped by the literacy rate in the
                      country which currently stands at the 31%.
                    </span>{" "}
                    All of this put together has rendered the country and
                    continent continually poor in comparison to the prevailing
                    global standard.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-[1351px!important]">
                <div className="fheader-bottom">
                  <h6>the solution</h6>
                  <p className=" max-w-[1307px!important]">
                    Pollen is a financial literacy app for young kids and young
                    adults. It helps children aged 13-21 learn about basic
                    financial concepts in a gamified manner. With the mobile app
                    and a few minutes a day, kids can listen to, watch or read a
                    set of courses and answer a set of questions in text and
                    audio form. They then get rewards as they complete
                    milestones and interact with the application more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div className="parallel-pollen">
              <h2 className="parallel-pollen-h2">
                different Users and their Goals
              </h2>
              <div className="pp-cover-cont">
                <div className="pp-cont">
                  <h3 className="pp-cont-h3">Teenagers</h3>
                  <p className="pp-cont-p">
                    Teenagers needs a platform that can begin to introduce them
                    to the foundational financial principles in an engaging and
                    immersive way.
                  </p>
                </div>
                <div className="pp-cont">
                  <h3 className="pp-cont-h3">Parents</h3>
                  <p className="pp-cont-p">
                    Parents wish for their wards to be exposed to ways to grow
                    and build wealth. They want to do all they can to encourage
                    them on this path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="onb-cont">
              <h2 className="text-center">Onboarding</h2>
              <div className="onbImg-cont">
                <div className=" inline-flex justify-center items-start w-[209px] lg:pt-[60px] lg:w-[315px]">
                  <Image
                    className="w-full h-auto"
                    src={onb1}
                    alt="onboarding 1"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className=" inline-flex justify-center items-start w-[209px] lg:pt-[] lg:w-[278px]">
                  <Image
                    className="w-full h-auto"
                    src={onb2}
                    alt="onboarding 2"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className=" inline-flex justify-center items-start w-[209px] lg:pt-[166px] lg:w-[250px]">
                  <Image
                    className="w-full h-auto"
                    src={onb3}
                    alt="onboarding 3"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className=" inline-flex justify-center items-start w-[209px] lg:pt-[286px] lg:w-[250px]">
                  <Image
                    className="w-full h-auto"
                    src={onb4}
                    alt="onboarding 4"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className=" inline-flex justify-center items-start w-[209px] lg:pt-[27px] lg:w-[334px]">
                  <Image
                    className="w-full h-auto"
                    src={onb5}
                    alt="onboarding 5"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="pdash-cont py-[64px!important] lg:pt-[80px!important] lg:pb-[142px!important]">
              <h2 className="text-center">Dashboard</h2>
              <div className="pd-cont">
                <div className=" inline-flex justify-center items-center w-auto max-w-[309px] lg:w-[420px]">
                  <Image
                    src={dashboard}
                    alt="Pollen Dashboard"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="w-[13px] shrink-0 lg:w-[46px]">
                  <Image
                    src={next}
                    alt="pointer"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="right-point">
                  <div class="pdrp-cont">
                    <span className="pdrp">1</span>
                    <p>
                      The user is able to see a snapshot of the total amount he
                      has earned on the app so far from quizzes and tasks
                      completed.
                    </p>
                  </div>
                  <div class="pdrp-cont">
                    <span className="pdrp">2</span>
                    <p>
                      A list of featured courses are shown on the dashboard in a
                      horizontal scroll for ease of use.
                    </p>
                  </div>
                  <div class="pdrp-cont">
                    <span className="pdrp">3</span>
                    <p>
                      This card shows the courses the user is currently taking,
                      how many other people are taking the course too. Simply
                      tapping on it gives the user access to the course.
                    </p>
                  </div>
                  <div class="pdrp-cont">
                    <span className="pdrp">4</span>
                    <p>
                      These set of cards gives the user an overview of the
                      modules available for the week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="onb-cont">
              <div className="grid justify-center items-center px-5 lg:px-0">
                <h2 className="text-[left!important] lg:text-center">
                  All Courses
                </h2>
                <p className="allc-p">
                  The courses and modules were set to appeal to every kind of
                  learner - there are audio, video, and textual form of content
                  just so everyone is carried along.
                </p>
              </div>
              <div className="onbImg-cont">
                <div className="w-[209px] inline-flex justify-center items-start lg:pt-[48px] lg:w-[315px]">
                  <Image
                    className="w-full h-auto"
                    src={ac1}
                    alt="Courses Page 1"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="w-[209px] inline-flex justify-center items-start lg:pt-[158px] lg:w-[278px]">
                  <Image
                    className="w-full h-auto"
                    src={ac2}
                    alt="Courses Page 2"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="w-[209px] inline-flex justify-center items-start lg:w-[250px]">
                  <Image
                    className="w-full h-auto"
                    src={ac3}
                    alt="Courses Page 3"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="w-[209px] inline-flex justify-center items-start lg:pt-[114px] lg:w-[250px]">
                  <Image
                    className="w-full h-auto"
                    src={ac4}
                    alt="Courses Page 4"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="w-[209px] inline-flex justify-center items-start lg:pt-[131px] lg:w-[334px]">
                  <Image
                    className="w-full h-auto"
                    src={ac5}
                    alt="Courses Page 5"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="onb-cont2">
              <div className="grid justify-center items-center px-5 lg:px-0">
                <h2 className="text-[left!important] lg:text-center">Tasks</h2>
                <p className="allc-p max-w-[796px!important]">
                  The task feature is a gamification technique where the
                  teenager can request for loans that will be approved by the
                  parents. The catch is that the parent must set some paid tasks
                  for them to do.
                </p>
              </div>
              <div className="onbImg-cont">
                <div className="w-[209px] inline-flex justify-center items-start lg:pt-[60px] lg:w-[315px]">
                  <Image
                    className="w-full h-auto"
                    src={t1}
                    alt="Tasks Page 1"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="w-[209px] inline-flex justify-center items-start lg:w-[406px]">
                  <Image
                    className="w-full h-auto"
                    src={t2}
                    alt="Tasks Page 2"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="w-[209px] inline-flex justify-center items-start lg:pt-[100px] lg:w-[386px]">
                  <Image
                    className="w-full h-auto"
                    src={t3}
                    alt="Tasks Page 3"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="w-[209px] inline-flex justify-center items-start lg:pt-[27px] lg:w-[333px]">
                  <Image
                    className="w-full h-auto"
                    src={t4}
                    alt="Tasks Page 4"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#161718] setbody">
          <div>
            <div className="w-full max-w-[1239px] pt-20 pb-8 lg:pt-[216px] lg:pb-[196px]">
              <div className="fheader-bottom-alt">
                <h6>Reflection</h6>
                <p>
                  The project is literally me using my skill for the economic
                  growth of my country. I’m glad I was able to work on the
                  project with the owners. It’s currently is production. I can’t
                  wait for the disruption that will happen in that space in the
                  coming months.
                </p>
              </div>
            </div>

            <div className="flex bg-[#161718] px-5 lg:justify-center lg:items-center pb-20 lg:pt-[61px] lg:pb-[182px]">
              <Link
                href="/projects/sorolingo"
                className="project-ctas xx1 g10 hover:border-[#69A9E9]  hover:text-[#69A9E9!important]"
              >
                <span>Next Project</span>

                <Image
                  className="yy1 hidden w-4 h-auto shrink-0"
                  src={arrowright}
                  quality={100}
                  alt="Arrow Right"
                />
                <Image
                  className=" w-4 h-auto ww1 shrink-0"
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
    </div>
  );
}
