import Image from "next/image";
import Link from "next/link";
import NavbarLight from "@/components/navbar-light";
import arrow from "@/public/images/cta-arrow.png";
import Img1 from "@/public/images/contentionary/Img1.png";
import Img2 from "@/public/images/contentionary/Img2.png";
import Img3 from "@/public/images/contentionary/Img3.png";
import Img4 from "@/public/images/contentionary/Img4.png";
import Img5 from "@/public/images/contentionary/Img5.png";
import Img6 from "@/public/images/contentionary/Img6.png";
import Img7 from "@/public/images/contentionary/Img7.png";

export default function Home() {
  return (
    <div class="flex flex-col gap-4 lg:gap-6 bg-[#fff] justify-center items-center">
      <span className="g20-alt absolute">
        <NavbarLight />
      </span>

      <header className="setbody g20-alt">
        <div>
          <div className="cnary-hcont">
            <div className="cnary-hcont-h1">
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
              <h1>Contentionary</h1>
              <h6>Mobile, WEB, & Webapp Design</h6>
            </div>
            <div className="cnary-hcont-h2 lg:px-[30px]">
              <Image src={Img1} alt="" placeholder=“blur” />
            </div>
          </div>
        </div>
      </header>

      <section className="setbody g20-alt">
        <div>
          <div className="cnary-s3">
            <h1>
              Share, Sell, Engage and Impact your students and subscribers.
            </h1>
            <div className="cs3-sub">
              <div className="cont-cta">
                <span>Visit Website</span>
                <Image src={arrow} className="w-[14px] h-[14px]" alt="" />
              </div>
              <h4>
                <span class="contentionary-grad">Contentionary</span> allows
                schools, faculties, educational centres, and creators to create
                a full and robust system to sell and engage their students and
                subscribers.
              </h4>
            </div>
            <div className=" zheader-top3">
              <div>
                <h6>Client</h6>
                <p>
                  <span>Contentionary</span>
                  <span>July 2022 - Sept 2022</span>
                </p>
              </div>
              <div>
                <h6>Contribution</h6>
                <p>
                  <span>Dashboard Design</span>
                </p>
              </div>
              <div>
                <h6>Team</h6>
                <p>
                  <span>Ayoola Emmanuel</span>
                </p>
              </div>
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
                    The advent of fast-speed internet and the new normal brought
                    about by the Covid-19 pandemic has shown the world new ways
                    of engaging content and educational content isn’t any
                    different.
                  </span>{" "}
                  Creators and educators the world over are looking for ways to
                  position themselves as innovative and meet the requirements of
                  the recent times.
                </p>
              </div>
            </div>
            <div className="w-full max-w-[1212px!important]">
              <div className="fheader-bottom">
                <h6>the solution</h6>
                <p className=" max-w-[1307px!important]">
                  I designed an all-inclusive and responsive web-app for
                  creators, educators, authors, and learners. Educators are able
                  to create centers, set tests, create exams, and upload course
                  materials for their students. Learners are able to take
                  quizzes, join leagues, and give feedback to the educators too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="setbody g20-alt">
        <div>
          <div className="inline-flex justify-center items-center py-[143px] px-5 lg:0 w-full">
            <div className="max-w-[642px]">
              <Image className="" src={Img2} alt="" placeholder=“blur” />
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
                <h3 className="pp-cont-h3">Centers</h3>
                <p className="pp-cont-p">
                  <span className="contentionary-grad">
                    Educational Centers
                  </span>{" "}
                  needs a platform where they will be able to manage the
                  confluence of all their academics and administrative duties
                  like manage students, upload resources, and set exams etc.
                </p>
              </div>
              <div className="pp-cont">
                <h3 className="pp-cont-h3">Creators</h3>
                <p className="pp-cont-p">
                  <span className="contentionary-grad">
                    Independent Creators
                  </span>{" "}
                  need a platform where they can engage their subscribers, make
                  their intellectual resources available and get paid.
                </p>
              </div>
              <div className="pp-cont">
                <h3 className="pp-cont-h3">Learners</h3>
                <p className="pp-cont-p">
                  <span className="contentionary-grad">Learners</span> need a
                  platform where all their learning can be aggregated for ease
                  of access. Where they can be a part of an active community of
                  other learners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="setbody g20-alt">
        <div>
          <div className="grid lg:gap-[87px] gap-6 pt-20 lg:pt-[216px]">
            <div className="w-full max-w-[1212px!important]">
              <div className="fheader-bottom">
                <h6>website iteration</h6>
                <p className=" max-w-[1212px!important]">
                  <span class="text-[#989999]">
                    Due to the nature of the industry Contentionary function,
                    creators and educators usually have a mix of different needs
                    and would always have a number of questions.
                  </span>{" "}
                  The website was well structured and designed to provide as
                  many useful information as possible with minimal need to make
                  a contact. Different iterations were made in the process
                  before we arrived at the final iteration.
                </p>
              </div>
            </div>
            <div className="max-w-[1277px] justify-self-center px-5 lg:px-0">
              <Image src={Img3} alt="" placeholder=“blur” />
            </div>
          </div>
        </div>
      </section>

      <section className="setbody g20-alt">
        <div>
          <div className="pt-20 justify-center items-center lg:justify-start lg:items-start lg:pt-[140px] flex flex-col lg:flex-row gap-6 w-full px-5 lg:pl-6 lg:px-14">
            <div className="w-full">
              <Image src={Img4} alt="" placeholder=“blur” />
            </div>
            <div className="w-full lg:max-w-[300px]">
              <Image src={Img5} alt="" placeholder=“blur” />
            </div>
          </div>
        </div>
      </section>

      <section className="setbody g20-alt">
        <div>
          <div className="cnary-mulc">
            <h2> CREATOR DASHBOARD</h2>
            <div className="justify-center items-center lg:justify-start lg:items-start flex flex-col lg:flex-row gap-6 w-full px-5 lg:pl-6 lg:px-14">
              <div className="w-full">
                <Image src={Img6} alt="" placeholder=“blur” />
              </div>
              <div className="w-full lg:max-w-[300px]">
                <Image src={Img7} alt="" placeholder=“blur” />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
