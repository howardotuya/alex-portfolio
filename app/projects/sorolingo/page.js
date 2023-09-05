import Image from "next/image";
import Link from "next/link";
import NavbarLight from "@/components/navbar-light";
import Img1 from "@/public/images/sorolingo/Img1.png";
import Img2 from "@/public/images/sorolingo/Img2.png";
import Img4 from "@/public/images/sorolingo/Img4.png";
import Img5 from "@/public/images/sorolingo/Img5.png";
import Img6 from "@/public/images/sorolingo/Img6.png";
import Img7 from "@/public/images/sorolingo/Img7.png";
import Img8 from "@/public/images/sorolingo/Img8.png";
import Img9 from "@/public/images/sorolingo/Img9.png";
import Img10 from "@/public/images/sorolingo/Img10.png";
import text from "@/public/images/sorolingo/text.svg";
import onb1 from "@/public/images/sorolingo/onb1.png";
import onb2 from "@/public/images/sorolingo/onb2.png";
import onb3 from "@/public/images/sorolingo/onb3.png";
import onb4 from "@/public/images/sorolingo/onb4.png";
import pointer from "@/public/images/sorolingo/pointer.svg";
import next from "@/public/images/pollen/next.png";
import dash1 from "@/public/images/sorolingo/dash1.png";
import dash2 from "@/public/images/sorolingo/dash2.png";
import TT1 from "@/public/images/sorolingo/TT1.png";
import TT2 from "@/public/images/sorolingo/TT2.png";
import TT3 from "@/public/images/sorolingo/TT3.png";
import TT4 from "@/public/images/sorolingo/TT4.png";
import TT5 from "@/public/images/sorolingo/TT5.png";
import end1 from "@/public/images/sorolingo/end1.png";
import end2 from "@/public/images/sorolingo/end2.png";
import arrow from "@/public/images/cta-arrow.png";

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
                <Image
                  src={Img1}
                  alt="Sorolingo"
                  quality={100}
                  placeholder="blur"
                />
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
                    <Image
                      className="w-full h-auto"
                      src={Img4}
                      alt=""
                      placeholder="blur"
                      quality={100}
                    />
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
                    <Image
                      className="w-full h-auto"
                      src={Img5}
                      alt=""
                      placeholder="blur"
                      quality={100}
                    />
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
                    <Image
                      className="w-full h-auto"
                      src={Img6}
                      alt=""
                      placeholder="blur"
                      quality={100}
                    />
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

        <section className="setbody g20">
          <div>
            <div class="onb-cont2 lg:pb-[181px] lg:justify-center gap-[24px!important] lg:gap-[110px!important]">
              <div className="grid lg:justify-items-center lg:justify-center items-center px-5 lg:px-0">
                <h2 className="text-[left!important] lg:text-center">
                  Storyboarding
                </h2>
                <p className="allc-p justify-items-center max-w-[776px!important]">
                  In order to seamlessly achieve the business and design goals,
                  the illustration below represents the process I went through;
                </p>
              </div>
              <div className="max-w-[1040px] px-5 lg:px-0">
                <Image src={Img7} alt="" quality={100} placeholder="blur" />
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="onb-cont2 lg:pt-[120px!important] lg:pb-[196px!important] lg:justify-center gap-[24px!important] lg:gap-[88px!important]">
              <div className="grid lg:justify-items-center lg:justify-center items-center px-5 lg:px-0">
                <h2 className="text-[left!important] max-w-[1014px]">
                  Who am I Designing For?
                </h2>
                <p className="allc-p justify-items-center max-w-[776px!important]">
                  Based on the insights from the storyboarding above, I created
                  two personas for the project as seen below;
                </p>
              </div>
              <div className="max-w-[1040px] grid gap-4 lg:gap-6 px-5 lg:px-0">
                <Image src={Img8} alt="" quality={100} placeholder="blur" />
                <Image src={Img9} alt="" quality={100} placeholder="blur" />
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="pdash-cont lg:gap-[120px!important] lg:pt-[104px] lg:pb-[192px]">
              <h2 className="text-center">Iterations</h2>
              <div className="grid gap-10 px-5 lg:px-[127px]">
                <div className="">
                  <Image src={text} alt="Hi-fi Wireframes" />
                </div>
                <div className="flex justify-center items-center">
                  <Image src={Img10} alt="" placeholder="blur" quality={100} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="pdash-cont lg:gap-[112px!important] lg:pt-[104px] lg:pb-[192px]">
              <h2 className="text-center">Onboarding</h2>
              <div className="hidden lg:grid justify-items-center w-full">
                <div className="flex gap-6 lg:px-12 lg:flex-row items-start justify-between w-full">
                  <div className="lg:max-w-[251px] inline-flex justify-start items-start">
                    <Image
                      className="w-full h-auto"
                      src={onb1}
                      alt=""
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                  <div className="lg:max-w-[251px] inline-flex justify-start items-start">
                    <Image
                      className="w-full h-auto"
                      src={onb2}
                      alt=""
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                  <div className="lg:max-w-[251px] inline-flex justify-start items-start">
                    <Image
                      className="w-full h-auto"
                      src={onb3}
                      alt=""
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                  <div className="lg:max-w-[251px] inline-flex justify-start items-start">
                    <Image
                      className="w-full h-auto"
                      src={onb4}
                      alt=""
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                </div>
                <div className="pt-[90px] pb-[30px]">
                  <Image src={pointer} alt="arrow" />
                </div>
                <div className="flex gap-24 ">
                  <div class="spointp max-w-[225px]">
                    <span className="pdrp">1</span>
                    <p>
                      I used an illustration that depicts Ayo - our 1st persona.
                    </p>
                  </div>
                  <div class="spointp max-w-[326px]">
                    <span className="pdrp">2</span>
                    <p>
                      Here’s a male illustration that represents the gender
                      counterpart of our persona.
                    </p>
                  </div>
                  <div class="spointp max-w-[431px]">
                    <span className="pdrp">3</span>
                    <p>
                      Mr Fola’s son also needs to feel that this is made for
                      him. So I used an illustration of a young superhero in a
                      cape.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-10 justify-center justify-items-center lg:hidden">
                <div className="w-[209px]">
                  <Image src={onb1} alt="" placeholder="blur" quality={100} />
                </div>
                <div className="flex flex-col gap-10">
                  <div className="pd-cont">
                    <div className="inline-flex justify-center items-center w-auto max-w-[309px] lg:w-[420px]">
                      <Image
                        src={onb2}
                        alt="Onboarding Flow 2"
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
                      <div class="pdrp-cont gap-[8px!important]">
                        <span className="pdrp">1</span>
                        <p>
                          I used an illustration that depicts Ayo - our 1st
                          persona.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pd-cont">
                    <div className="inline-flex justify-center items-center w-auto max-w-[309px] lg:w-[420px]">
                      <Image
                        src={onb3}
                        alt="Onboarding Flow 3"
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
                      <div class="pdrp-cont gap-[8px!important]">
                        <span className="pdrp">2</span>
                        <p>
                          Here’s a male illustration that represents the gender
                          counterpart of our persona.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pd-cont">
                    <div className="inline-flex justify-center items-center w-auto max-w-[309px] lg:w-[420px]">
                      <Image
                        src={onb4}
                        alt="Onboarding Flow 4"
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
                      <div class="pdrp-cont gap-[8px!important]">
                        <span className="pdrp">3</span>
                        <p>
                          Mr Fola’s son also needs to feel that this is made for
                          him. So I used an illustration of a young superhero in
                          a cape.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="pdash-cont lg:gap-[112px!important] lg:pt-[104px] lg:pb-[192px]">
              <h2 className="text-center">Dashboard</h2>
              <div
                id="3-cont"
                className="flex gap-5 lg:gap-[46px] px-5 lg:px-0 justify-center flex-row items-center"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="w-full h-auto max-w-[336px]">
                    <Image
                      className=""
                      src={dash2}
                      alt=""
                      placeholder="blur"
                      quality={100}
                    />
                  </div>
                  <div className="w-full h-auto max-w-[336px]">
                    <Image
                      className=""
                      src={dash1}
                      alt=""
                      placeholder="blur"
                      quality={100}
                    />
                  </div>
                </div>
                <div className="w-[13px] shrink-0 lg:w-[46px]">
                  <Image
                    src={next}
                    alt="pointer"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[72px]">
                  <div className="flex flex-col gap-6">
                    <div class="pdrp-cont">
                      <span className="pdrp">1</span>
                      <p>
                        Right from the dashboard, the user is able to choose
                        other languages that they would like to learn.
                      </p>
                    </div>
                    <div class="pdrp-cont">
                      <span className="pdrp">2</span>
                      <p>
                        Shows the badges and achievements of the learner. It is
                        shareable right from there.
                      </p>
                    </div>
                    <div class="pdrp-cont">
                      <span className="pdrp">3</span>
                      <p>
                        This card is for announcements on the app. There’s an
                        icon to enable/disable audio.
                      </p>
                    </div>
                    <div class="pdrp-cont">
                      <span className="pdrp">4</span>
                      <p>
                        I also added a card that tracks the learner’s progress
                        right on the dashboard.
                      </p>
                    </div>
                    <div class="pdrp-cont">
                      <span className="pdrp lg:max-w-[241px!important]">5</span>
                      <p>
                        Motivation is important for any worthwhile learning
                        platform. I have included a streak recorder on the
                        dashboard to make the learner motivated.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div class="pdrp-cont">
                      <span className="pdrp">6</span>
                      <p>
                        The user is able to see a snapshot of the total amount
                        he has earned on the app so far from quizzes and tasks
                        completed.
                      </p>
                    </div>
                    <div class="pdrp-cont">
                      <span className="pdrp">7</span>
                      <p>
                        A list of featured courses are shown on the dashboard in
                        a horizontal scroll for ease of use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="pdash-cont lg:gap-[112px!important] lg:pt-[104px] lg:pb-[112px]">
              <h2 className="text-center">Taking Tests</h2>
              <div className="grid justify-items-center w-full">
                <div className="flex flex-col gap-6 lg:px-12 lg:flex-row items-center lg:items-start justify-between w-full">
                  <div className="max-w-[209px] lg:max-w-[251px] inline-flex justify-start items-start">
                    <Image
                      className="w-full h-auto"
                      src={TT1}
                      alt=""
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                  <div className="max-w-[209px] lg:max-w-[251px] inline-flex justify-start items-start">
                    <Image
                      className="w-full h-auto"
                      src={TT2}
                      alt=""
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                  <div className="max-w-[209px] lg:max-w-[251px] inline-flex justify-start items-start">
                    <Image
                      className="w-full h-auto"
                      src={TT3}
                      alt=""
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                  <div className="max-w-[209px] lg:max-w-[251px] inline-flex justify-start items-start">
                    <Image
                      className="w-full h-auto"
                      src={TT4}
                      alt=""
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                  <div className="max-w-[209px] lg:max-w-[251px] inline-flex justify-start items-start">
                    <Image
                      className="w-full h-auto"
                      src={TT5}
                      alt=""
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                </div>
                <div className="lg:pt-10 pt-6 w-4 lg:w-[58px] pb-4">
                  <Image src={pointer} alt="arrow" />
                </div>
                <div className="tt-text">
                  The course taking is in several categpories. Some are text
                  alone, some are text and image, whoile some are text, image,
                  and audio.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div className="admin">
              <h2>Admin Portal</h2>
              <h5>
                <span className="text-[#7b7b7c]">
                  After completing the mobile UI designs,
                </span>{" "}
                I also designed the admin management portal so that the product
                owners are able to create, edit, activate, and deactivate
                courses and modules; they will also be able to manage other
                admins and learners.
              </h5>
              <div className="max-w-[944px]">
                <Image src={end2} alt="" placeholder="blur" quality={100} />
              </div>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div class="pmeasure">
              <h5>Measuring goals</h5>
              <h2>
                Judging by this project is an mvp shipping,{" "}
                <span className="text-[#363738]">our main goals include;</span>
              </h2>
              <ul>
                <li>Total downloads of the app.</li>
                <li>
                  Customer reviews on the apple appstore and google playstore.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="setbody g20">
          <div>
            <div className="py-20 px-5 lg:pt-[260px] lg:pb-[162px] grid justify-center justify-items-center items-center">
              <div class="max-w-[944px]">
                <Image className="w-full h-auto" src={end1} alt="" placeholder="blur" quality={100} />
              </div>
            </div>
          </div>
        </section>

        <section className="g20-alt setbody">
          <div>
            <div className="w-full py-20 lg:pt-[216px] lg:pb-[249px]">
              <div className="fheader-bottom">
                <h6>Constraints</h6>
                <p className="max-w-[1310px!important]">
                  The first major constraint for this project was that there was
                  limited time necessary to dot all the ‘Is’ and cross all the
                  ‘Ts’.{" "}
                  <span className="text-[#898A8A]">
                    The second constraint was that this project will represent
                    the first in the language learning community in Africa.
                  </span>
                </p>
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
                  <span className="text-[#989999]">
                    This was a very important project for me, and I am thrilled
                    to have worked on it.
                  </span>
                  {" "}I learnt a lot more about language learning, the needs and
                  fears of Africans living in Diaspora, and the balance between
                  providing value for the client and the customer in the EdTech
                  industry.{" "}
                  <span className="text-[#989999]">
                    I am looking forward to the release of the app in the 3rd
                    quarter of 2022.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex bg-[#161718] px-5 lg:justify-center lg:items-center pb-20 lg:pt-[61px] lg:pb-[182px]">
              <Link href="/all-projects" className="project-ctas">
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
    </div>
  );
}
