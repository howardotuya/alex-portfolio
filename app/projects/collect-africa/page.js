import NavbarDark from "@/components/navbar-dark";
import Image from "next/image";
import arrowleft from "@/public/images/arrow-left.png";
import headerlg from "@/public/images/collect-africa/header-lg.png";
import headersm from "@/public/images/collect-africa/header-sm.png";
import challenge from "@/public/images/collect-africa/challenge.png";
import despro from "@/public/images/collect-africa/despro.svg";

function Collect() {
  return (
    <>
      <NavbarDark className="fixed" />
      <header className="bg-[#161718] phc pt-20 lg:pt-[135px]">
        <div className="phc-content">
          <div className="phc-x1">
            <div>
              <Image
                className="w-3 h-3"
                placeholder="blur"
                src={arrowleft}
                alt="arrow-left"
              />
            </div>
            <h6>Back to home</h6>
          </div>
          <div className="phc-x2">
            <h1 className="phc-h1">Collect Mobile App UX Case Study</h1>
            <p className="phc-p">
              Fintech solution addressing payments issues for both large and
              small enterprises across Africa.
            </p>
          </div>
        </div>
        <div className="phc-image">
          <div className="hidden lg:flex flex-col justify-center items-center max-w-[1004px]">
            <Image
              className=" w-full h-auto"
              placeholder="blur"
              src={headerlg}
              alt="collect africa"
            />
          </div>
          <div className="flex lg:hidden flex-col justify-center items-center">
            <Image
              className="w-full h-auto"
              placeholder="blur"
              src={headersm}
              alt="collect africa"
            />
          </div>
        </div>
      </header>

      <main className="minusSect bg-[#252627] setbody">
        <div className="flex flex-col gap-20 lg:gap-[120px] pt-20 lg:pt-[120px]">
          <section class="highlights ms-padding">
            <h2 class="phc-heading2">Highlights</h2>
            <div className="phc-h-cont">
              <div className="w-full lg:w-auto">
                <h4 className="phc-h-h4">MY ROLE</h4>
                <p className="phc-h-p">Product Designer</p>
              </div>
              <div>
                <h4 className="phc-h-h4">TOOLS</h4>
                <p className="phc-h-p">Figma</p>
              </div>
              <div>
                <h4 className="phc-h-h4">INDUSTRY</h4>
                <p className="phc-h-p">Fintech</p>
              </div>
            </div>
          </section>

          <section class="theChallenge">
            <div className="phc-bcont ms-padding">
              <h2 className="phc-heading2">The Challenge</h2>
              <p className="phc-bodyp">
                <span>
                  Receiving payments for services can be rather burdensome when
                  there is a delay in confirming the transaction, especially
                  when it involves a foreign payment, since many firms struggle
                  to carry out transactions smoothly.
                </span>
                <span>
                  A unified accounting system is tough to implement when you
                  have several business outlets in different states and
                  countries. Businesses also struggle with documenting their
                  transactions, keeping accurate financial records and properly
                  balancing their accounts. All of these stand in the way of
                  businesses and organizations reaching their full potential.
                </span>
              </p>
            </div>
            <div className="phc-bimage nopad">
              <div className="flex flex-col justify-center items-center">
                <Image
                  className="w-full h-auto"
                  src={challenge}
                  alt="Collect Africa"
                  placeholder="blur"
                />
              </div>
            </div>
          </section>

          <section class="theObjective ms-padding">
            <div className="phc-bcont">
              <h2 className="phc-heading2">The Objective</h2>
              <p className="phc-bodyp">
                <span>
                  The objective was to develop a unique solution that would
                  target businesses and provide them with a one-stop solution to
                  assist them manage their financial operations, make sending
                  money anywhere in the globe simple and make receiving money
                  from clients in any location as effortless as possible.
                </span>
                <span>
                  We want to make it easier for businesses with multiple
                  locations to manage their finances and swiftly account for all
                  of their transactions in one location rather than always
                  having to visit the bank and go through the tedious signatory
                  to account routine. You may quickly monitor and balance your
                  account with its assistance, growing and elevating your
                  company as a result.
                </span>
                <span>
                  Last but not least, what is a business without customers? We
                  want to assist you in managing and building relationships with
                  them.
                </span>
              </p>
            </div>
          </section>

          <section class="designProcess">
            <div className="phc-bcont ms-padding">
              <h2 className="phc-heading2">Design Process</h2>
            </div>
            <div className="phc-bimage nopad">
              <div className="flex overflow-hidden lg:rounded-[25px]">
                <Image
                  className="w-full h-auto"
                  src={despro}
                  alt="Design Process"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Collect;
