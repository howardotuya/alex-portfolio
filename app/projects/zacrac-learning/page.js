import Image from "next/image";
import Link from "next/link";
import NavbarLight from "@/components/navbar-light";
import Img1 from "@/public/images/zacrac-learning/img1.png";
import Img2 from "@/public/images/zacrac-learning/Img2.png";

export default function Home() {
  return (
    <div class="flex flex-col gap-4 lg:gap-6 bg-[#fff] justify-center items-center">
      <span className="g30-alt absolute">
        <NavbarLight />
      </span>

      <header className="setbody g30-alt pt-[184px] lg:pt-[246px] pb-20 lg:pb-[147px] ">
        <div className="no-use">
          <div className="header px-5 lg:px-6">
            <div className="zheader-top1">
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
              <div className="max-w-[300px] lg:max-w-[766px]">
                <Image
                  className="w-full h-auto"
                  src={Img1}
                  placeholder="blur"
                  alt="Zacrac Learning"
                />
              </div>
            </div>
            <div className="zheader-top2 pt-8 lg:pt-16">
              <h1>Learn. Grow. Thrive.</h1>
              <p>
                <span className="glow-z">Zacrac Learning</span> is the leading
                online educational platform providing students with world class
                courses in data science and analytics.
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

      <section className="g30-alt setbody">
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
                desperately in need of innovative educational solutions for the
                teeming Nigerian youthful population.{" "}
                <span className="text-[#898A8A]">
                  Zooms in Zacrac Learning. 🚀
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
