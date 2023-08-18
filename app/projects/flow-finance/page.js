import Image from "next/image";
import NavbarLight from "@/components/navbar-light";
import fheaderImg from "@/public/images/flow-finance/fheader-img.png";
import Img2 from "@/public/images/flow-finance/img2.png";
import Img3 from "@/public/images/flow-finance/img3.png";

export default function Home() {
  return (
    <div class="flex flex-col gap-4 lg:gap-6 bg-[#fff] justify-center items-center">
      <span className="g20-alt absolute">
        <NavbarLight />
      </span>

      <header className="g20-alt setbody pt-[184px] lg:pt-[330px] pb-20 lg:pb-[216px]">
        <div>
          <div className="fheader-cont">
            <div className="fheader-top grid gap-8 lg:gap-[152px] justify-items-center items-center">
              <div className="fheader-top1">
                <button className="fheader-button">
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
                </button>
                <div className="grid gap-4 lg:gap-3 justify-items-center">
                  <h1 className="fheader-h1">Flow Finance</h1>
                  <div className="grd-auto2">
                    <div className="grid">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="17"
                        className="block lg:hidden"
                        viewBox="0 0 13 17"
                        fill="none"
                      >
                        <path
                          d="M0.825684 3.33951V9.13217H4.15364V1.26915L0.825684 3.33951Z"
                          fill="#161718"
                        />
                        <path
                          d="M4.15381 17L7.48177 14.9253V9.13217H4.15381V17Z"
                          fill="#161718"
                        />
                        <path
                          d="M5.51855 2.07468V7.86783H8.84603V0L5.51855 2.07468Z"
                          fill="#161718"
                        />
                        <path
                          d="M8.84619 7.86783V15.7309L12.1741 13.661V7.86783H8.84619Z"
                          fill="#161718"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="24"
                        viewBox="0 0 17 24"
                        className="hidden lg:block"
                        fill="none"
                      >
                        <path
                          d="M0.489258 4.7146V12.8925H5.18755V1.79175L0.489258 4.7146Z"
                          fill="#161718"
                        />
                        <path
                          d="M5.1875 24L9.88579 21.071V12.8925H5.1875V24Z"
                          fill="#161718"
                        />
                        <path
                          d="M7.11426 2.92897V11.1075H11.8119V0L7.11426 2.92897Z"
                          fill="#161718"
                        />
                        <path
                          d="M11.812 11.1075V22.2083L16.5103 19.2861V11.1075H11.812Z"
                          fill="#161718"
                        />
                      </svg>
                    </div>
                    <h6 className="fheader-h6">Mobile app & Website Design</h6>
                  </div>
                </div>
              </div>
              <div className="fheader-top2 max-w-[209px] lg:max-w-[425px] ">
                <Image placeholder="blur" src={fheaderImg} alt="Mockup" />
              </div>
            </div>
            <div className="fheader-bottom">
              <h6>Improving Employee’s financial wellness</h6>
              <p>
                Across Africa, salaries have largely remained the same even
                though high inflation has raised the cost of living.
                Approximately 80% of the employable market lives paycheck to
                paycheck and the majority of employed Africans are heavily
                indebted.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="g20-alt setbody">
        <div>
          <div className="w-full max-w-[1039px] py-20 lg:pt-[216px] lg:pb-[249px]">
            <div className="fheader-bottom">
              <h6>current standards</h6>
              <p>
                Current providers in the market today such as payday loans,
                traditional banks, and digital lenders are usually characterised
                by predatory interest rates, slow processes, and cumbersome
                documentation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="g20-alt setbody">
        <div>
          <div className=" grid justify-items-center items-center">
            <div className="w-full grid justify-items-center items-center max-w-[209px] lg:max-w-[551px] pt-20 lg:pt-[220px]">
              <Image
                className="w-full h-auto"
                src={Img2}
                placeholder="blur"
                alt="Dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="setbody3">
        <div>
          <div className="relative">
            <div className="w-full">
              <Image
                className="w-full h-auto"
                src={Img3}
                placeholder="blur"
                alt="Business Woman Thinking"
              />
            </div>
            <div className="max-w-[186px] lg:max-w-[428px] absolute bottom-5 lg:bottom-auto lg:top-[564px] right-6 p-3 lg:p-6 g20 rounded-[12px] lg:rounded-[20px] gap-3 grid">
              <h4>
                “It’s disheartening that I still get paid in a monthly cycle
                when <span className="text-[#AA584D]">emergencies</span> don’t
                care about that.”
              </h4>
              <div className="flex gap-1 flex-col">
                <h5>Sola Adeoye</h5>
                <h6>Product Manager</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="g20-alt setbody">
        <div>
          <div className="w-full max-w-[1039px] py-20 lg:pt-[216px] lg:pb-[249px]">
            <div className="fheader-bottom">
              <h6>Total Addressable Market</h6>
              <p className="text-[#989999!important]">
                As a result, earned wage access has huge potential within the
                African labour market and the lack of liquidity in between
                paychecks presents a <span className="text-[#252627]">$30B funding opportunity</span> across Africa
                every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <footer className="g20 setbody">
        <div>
          <section className="px-5 py-24 lg:pl-6 lg:pt-[184px] lg:pb-[214px] g50 flex flex-col gap-4 lg:gap-6">
            <h6 className="lg:text-xl lg:font-bold font-semibold text-base uppercase">
              life outside design
            </h6>
            <div>
              <p className="lg:text-[56px] lg:leading-[72px] lg:font-bold font-semibold text-base leading-[160%]">
                <span className="block">
                  I realised early that I am a people person. I love to help
                  people see new perspectives and help them get unstuck. So when
                  I’m not pushing impactful pixels, you’d find me in virtual and
                  physical communities leading conversations on topics around
                  emotional intelligence for tech talents.
                </span>
                <span className="g80 pt-3 lg:pt-[72px] block">
                  Oh, and I take the best iPhone pictures too. Now pose! 😎 📸
                </span>
              </p>
            </div>
          </section>

          <div id="actual-footer">
            <div className="d-110">Alex Oyebade</div>
            <div>
              <ul className="d-120">
                <li>Contact me</li>
                <li>resumé</li>
                <li>Linkedin</li>
                <li>TWitter</li>
                <li>dribble</li>
              </ul>
              <div className="d-130">copyright 2023 alex oyebade</div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
