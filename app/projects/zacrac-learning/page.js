import Image from "next/image";
import Link from "next/link";
import NavbarLight from "@/components/navbar-light";
import Img1 from "@/public/images/zacrac-learning/img1.png";
import Img2 from "@/public/images/zacrac-learning/Img2.png";
import Img3 from "@/public/images/zacrac-learning/Img3.png";
import Img4 from "@/public/images/zacrac-learning/Img4.png";
import Img5 from "@/public/images/zacrac-learning/Img5.png";
import Img6 from "@/public/images/zacrac-learning/Img6.png";
import Img7 from "@/public/images/zacrac-learning/Img7.png";
import Img8 from "@/public/images/zacrac-learning/Img8.png";
import Img9 from "@/public/images/zacrac-learning/Img9.svg";
import Img10 from "@/public/images/zacrac-learning/Img10.png";
import Img11 from "@/public/images/zacrac-learning/Img11.png";
import arrow from "@/public/images/cta-arrow.svg";
import arrowright from "@/public/images/arrow-right.svg";
import ctaarrow from "@/public/images/cta-arrow.svg";

export default function Home() {
  return (
    <div className="g30-alt">
      <div class="flex flex-col gap-4 lg:gap-6 bg-[#fff] justify-center items-center">
        <span className="g30-alt absolute">
          <NavbarLight />
        </span>

        <header className="setbody g30-alt pt-[184px] lg:pt-[246px] pb-20 lg:pb-[147px] ">
          <div className="no-use">
            <div className="header px-5 lg:px-6">
              <div className="zheader-top1">
              <Link
                  href='/'
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
                <div className="max-w-[300px] lg:max-w-[766px]">
                  <Image
                    className="w-full h-auto"
                    src={Img1}
                    placeholder="blur"
                    alt="Zacrac Learning Landing Page"
                  />
                </div>
              </div>
              <div className="zheader-top2 pt-8 lg:pt-16">
                <h1>Learn. Grow. Thrive.</h1>
                <p>
                  <span className="glow-z">Zacrac Learning</span> is the leading
                  online educational platform providing students with world
                  class courses in data science and analytics.
                </p>
              </div>
              <div className="pt-10 lg:pt-[216px] zheader-top3">
                <div>
                  <h6>Client</h6>
                  <p>
                    <span>Zacrac Learning</span>
                    <span>August 2022 - Oct 2022</span>
                  </p>
                </div>
                <div>
                  <h6>Contribution</h6>
                  <p>
                    <span>Website Redesign</span>
                  </p>
                </div>
                <div>
                  <h6>Team</h6>
                  <p>
                    <span>Wale Adeyemo</span>
                    <span>Kemi Oluwakemi</span>
                    <span>David Sawe</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="g20 setbody">
          <div>
            <div className="w-full grid justify-items-center items-center">
              <div className="w-full grid justify-items-center items-center px-5 lg:px-[82px] pt-20 lg:pt-[144px]">
                <Image
                  className="w-full h-auto"
                  src={Img2}
                  alt="Zacrac Landing Page"
                  placeholder="blur"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="g30-alt setbody">
          <div>
            <div className="w-full py-20 lg:pt-[216px] lg:pb-[249px]">
              <div className="fheader-bottom">
                <h6>filling the unemployment gap</h6>
                <p className="text-[#252627!important] max-w-[1283px!important]">
                  At 37% unemployment rate in Nigeria 2023 (NESG), we are
                  desperately in need of innovative educational solutions for
                  the teeming Nigerian youthful population.{" "}
                  <span className="text-[#898A8A]">
                    Zooms in Zacrac Learning. 🚀
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="g30-alt setbody">
          <div>
            <div className="w-full grid gap-6 lg:gap-0 py-16 lg:pt-6 lg:pb-[178px]">
              <h2 class="zHeader-h2">Course Page</h2>
              <div className="lg:pt-[121px] px-5 lg:px-[82px]">
                <Image src={Img3} alt="Course Page" placeholder="blur" quality={100} />
              </div>
              <p className="lg:py-28 px-5 lg:px-0 justify-self-end lg:mr-[197px] zBody-p">
                We implemented a clean accordion element on the page to give the
                users enough information to encourage them to make a decision as
                they go through the Course Page.
              </p>
              <div class="zGrid-1">
                <div>
                  <Image src={Img4} alt="More on Course Page" placeholder="blur" quality={100} />
                </div>
                <div>
                  <Image src={Img6} alt="Billing - Course Page" placeholder="blur" quality={100} />
                </div>
                <div>
                  <Image src={Img5} alt="Scheduling - Course Page" placeholder="blur" quality={100} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="g20 setbody">
          <div>
            <div className="w-full grid gap-6 lg:gap-0 pt-16 lg:pt-6 lg:pb-0">
              <h2 class="zHeader-h2">Instructors Page</h2>
              <div className="lg:pt-[120px] px-5 lg:px-[82px]">
                <Image src={Img7} alt="Instructors Page" placeholder="blur" quality={100} />
              </div>
            </div>
          </div>
        </section>

        <section className="g20 setbody">
          <div>
            <div className="w-full grid gap-6 lg:gap-0 py-16 lg:pt-[160px] lg:pb-[100px]">
              <h2 class="zHeader-h2">Products</h2>
              <div className="lg:pt-16 px-5 lg:px-[82px]">
                <Image src={Img8} alt="Products Page" placeholder="blur" quality={100} />
              </div>
            </div>
          </div>
        </section>

        <section className=" setbody">
          <div>
            <div className="w-full grid gap-4 lg:gap-0 pt-16 lg:pt-[160px] lg:pb-[132px]">
              <h2 class="zHeader-h2">Other Services</h2>
              <div className="lg:pt-[88px] mt-2 lg:mt-0 grid justify-center items-center px-5 lg:px-[82px]">
                <Image src={Img9} alt="More than a lending platform" quality={100} />
              </div>
              <div className="lg:pt-[150px] px-5 lg:px-[82px]">
                <Image src={Img10} alt="Zacrac for business learning" placeholder="blur" quality={100} />
              </div>
            </div>
          </div>
        </section>

        <section className="g30-alt setbody">
          <div>
            <div className="w-full zdown px-5 pt-16 lg:pt-[117px] lg:pb-0">
              <div className="max-w-[209px] lg:max-w-[301px] order-2 lg:order-1">
                <div>
                  <Image placeholder="blur" src={Img11} alt="Whatsapp Groupchat - Project Revamp" />
                </div>
              </div>
              <h3 className="max-w-[628px] order-1 lg:order-2 zdown-h3">
                I was pleasantly surprised to get on the project WhatsApp to
                find accolades everywhere. My church mind collected the flowers
                pleasantly. 🌹🌹
              </h3>
            </div>
          </div>
        </section>
        <section className="bg-[#161718] setbody">
          <div>
            <div className="w-full pt-20 pb-8 lg:pt-[216px] lg:pb-[196px]">
              <div className="fheader-bottom-alt">
                <h6>Reflection</h6>
                <p className=" max-w-[1300px!important]">
                  I definitely had fun working with this team as we gave their
                  platform a visual direction, bringing their ideas to life and
                  making their website easy to use.{" "}
                  <span className="text-[#989999]">
                    My greatest pleasure came from the satisfaction my clients
                    had when they saw the work.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex bg-[#161718] px-5 lg:justify-center lg:items-center pb-20 lg:pt-[61px] lg:pb-[182px]">
            <Link
              href="/projects/pollen"
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
                src={ctaarrow}
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
