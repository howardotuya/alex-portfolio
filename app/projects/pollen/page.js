import Image from "next/image";
import Link from "next/link";
import NavbarLight from "@/components/navbar-light";
import Img1 from "@/public/images/pollen/Img1.png";

export default function Home() {
  return (
    <div className="g20">
      <div class="flex flex-col gap-4 lg:gap-6 bg-[#fff] justify-center items-center">
        <span className="g20 absolute">
          <NavbarLight />
        </span>

        <header className="setbody g20 pt-[184px] lg:pt-[246px]">
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
              <h1>Pollen</h1>
              <div className="max-w-[209px] lg:max-w-[773px]">
                <Image src={Img1} alt="Pollen" />
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
                  <span className="text-[#363738]">Pollen</span> is a financial literacy app for young kids and young
                  adults.
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
      </div>
    </div>
  );
}
