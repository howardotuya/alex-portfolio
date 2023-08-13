import NavbarDark from "@/components/navbar-dark";
import Image from "next/image";
import arrowleft from "@/public/images/arrow-left.png";
import headerlg from "@/public/images/collect-africa/header-lg.png"
import headersm from "@/public/images/collect-africa/header-sm.png"

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
        <div className="phc-image" >
          <div className="hidden lg:flex flex-col justify-center items-center max-w-[1004px]">
            <Image className=" w-full h-auto" placeholder="blur" src={headerlg} alt="" />
          </div>
          <div className="flex lg:hidden flex-col justify-center items-center">
            <Image className="w-full h-auto" placeholder="blur" src={headersm} alt="" />
          </div>
        </div>
      </header>

      <main>
        <section id="highlights">
          <h2>Highlights</h2>
          <div></div>
        </section>
      </main>
    </>
  );
}

export default Collect;
