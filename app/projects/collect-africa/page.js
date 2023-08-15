import NavbarDark from "@/components/navbar-dark";
import Image from "next/image";
import arrowleft from "@/public/images/arrow-left.png";
import headerlg from "@/public/images/collect-africa/header-lg.png";
import headersm from "@/public/images/collect-africa/header-sm.png";
import challenge from "@/public/images/collect-africa/challenge.png";
import despro from "@/public/images/collect-africa/despro.svg";
import brainstorming from "@/public/images/collect-africa/brainstorming.svg";
import brain1 from "@/public/images/collect-africa/strength.svg";
import brain2 from "@/public/images/collect-africa/weakness.svg";
import brain3 from "@/public/images/collect-africa/oppurtunity.svg";
import brain4 from "@/public/images/collect-africa/threat.svg";
import brain5 from "@/public/images/collect-africa/strength1.svg";
import brain6 from "@/public/images/collect-africa/weakness2.svg";
import brain7 from "@/public/images/collect-africa/oppurtunity2.svg";
import brain8 from "@/public/images/collect-africa/threat2.svg";
import munachi from "@/public/images/collect-africa/munachi.png";
import phonehub from "@/public/images/collect-africa/phonehub.png";
import vpcustomers from "@/public/images/collect-africa/vp-customers.svg";
import vpbusiness from "@/public/images/collect-africa/vp-business.svg";
import userflow from "@/public/images/collect-africa/userflow.png";
import sitemap from "@/public/images/collect-africa/sitemap.png";

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
            <div className="phc-h-cont max-w-[957px]">
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
            <div className="phc-bcont ms-padding ">
              <h2 className="phc-heading2">The Challenge</h2>
              <p className="phc-bodyp max-w-[862px]">
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
              <div className="xl:max-w-[957px] self-start">
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
              <p className="phc-bodyp max-w-[871px]">
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
              <div className="flex max-w-[964px] self-start overflow-hidden lg:rounded-[25px]">
                <Image
                  className="w-full h-auto"
                  src={despro}
                  alt="Design Process"
                />
              </div>
            </div>
          </section>

          <section class="research ms-padding">
            <div className="phc-bcont">
              <h2 className="phc-heading2">Research</h2>
              <p className="phc-bodyp max-w-[913px]">
                <span className="text-[#989999]">
                  Despite having been given a brief, the product manager and we
                  on the design team did some research to figure out what we
                  were creating. We did this to test our assumptions, gain a
                  deeper understanding of the users' problems and connect it to
                  the company's objectives. The UX phase started with getting to
                  know the consumers and their habits.
                </span>
                <span>
                  The goal of the research was to gain a comprehensive
                  understanding of the issue as it directly impacts the users,
                  discovering their requirements and frustrations and improving
                  their experience. As a result, I was better able to relate to
                  and comprehend the problems that our users were experiencing.
                  Interviews were conducted as part of the research to obtain
                  some qualitative data.
                </span>
              </p>
            </div>
          </section>

          <section class="examiningThePainPoints ms-padding">
            <div className="phc-bcont max-w-[733px]">
              <h2 className="phc-heading2">Examining the pain points</h2>
              <p className="phc-bodyp-alt">
                <span className="text-[#989999]">
                  Here are some of the paint points I highlighted during
                  research:
                </span>
                <span>
                  <ul className="phc-bodyp-ul">
                    <li>
                      Having trouble confirming customer payments when banks
                      take too long to provide the notice, especially with
                      international transfers.
                    </li>
                    <li>
                      Accepting payments from customers to businesses that do
                      e-commerce activity can be difficult.
                    </li>
                    <li>
                      Having trouble keeping business books in order and
                      maintaining accessible records.
                    </li>
                    <li>
                      Having trouble managing business clients and preserving a
                      relationship.
                    </li>
                    <li>
                      Having trouble maintaining a single company account across
                      many branches of the same firm.
                    </li>
                    <li>Having trouble collecting funds from abroad.</li>
                  </ul>
                </span>
              </p>
            </div>
          </section>

          <section class="brainstorming">
            <div className="phc-bcont ms-padding">
              <h2 className="phc-heading2">Brainstorming</h2>
              <p className="phc-bodyp-alt max-w-[871px]">
                <span>
                  We got together at this point to come up with the best
                  strategy. In order to distill the sown ideas and input
                  obtained from the team, I continued after the brainstorming by
                  drawing up some of the most intriguing concepts. This phase
                  was finalized and it included how-might-we inquiries. Mockups
                  were created during this phase.
                </span>
              </p>
            </div>
            <div className="phc-bimage nopad">
              <div className="flex self-start max-w-[964px] overflow-hidden lg:rounded-[25px]">
                <Image
                  className="w-full h-auto"
                  src={brainstorming}
                  alt="Brainstorming"
                />
              </div>
            </div>
          </section>

          <section class="competitiveAnalysis">
            <div className="phc-bcont-alt ms-padding">
              <h2 className="phc-heading2-alt">Competitive Analysis</h2>
              <p className="phc-bodyp-alt max-w-[853px]">
                <span>
                  I was able to determine what innovative solutions may be built
                  and enhanced for our product by understanding how our
                  competitors address similar customer needs.
                </span>
              </p>
            </div>
            <div className="phc-bcont-subcont ms-padding">
              <div className="pbsc">
                <div className="pbsc-text">
                  <h3>PayStack</h3>
                  <p className="phc-bodyp-alt gap-[12px] lg:gap-[30px] max-w-[752px]">
                    <span className="text-[#989999]">
                      <span className="pbsc-bold">Overview:</span> Paystack is a
                      technology company solving payments problems for ambitious
                      businesses. Our mission is to help businesses in Africa
                      become profitable, envied and loved.By providing global
                      and local payments for businesses.
                    </span>
                    <span className="pbsc-ul">
                      <span className="pbsc-bold">Key Objectives:</span>
                      <span> - Providing worldwide payment services</span>
                      <span>
                        - Enabling the integration of payment methods with all
                        commerce services
                      </span>
                    </span>
                    <span>
                      <span className="pbsc-bold">Market Advantage:</span>{" "}
                      Skillfully positioned themselves as a solution where you
                      can receive payments from customers anywhere in the world
                    </span>
                  </p>
                </div>
                <div className="pbsc-image">
                  <div>
                    <Image src={brain1} alt="Strengths" />
                  </div>
                  <div>
                    <Image src={brain2} alt="Weaknesses" />
                  </div>
                  <div>
                    <Image src={brain3} alt="Oppurtunities" />
                  </div>
                  <div>
                    <Image src={brain4} alt="Threats" />
                  </div>
                </div>
              </div>
              <div className="pbsc">
                <div className="pbsc-text">
                  <h3>Stripe</h3>
                  <p className="phc-bodyp-alt gap-[12px] lg:gap-[30px] max-w-[752px]">
                    <span className="text-[#989999]">
                      <span className="pbsc-bold">Overview:</span> Everything
                      needed to create websites and apps that accept payments
                      and send payouts internationally is included in Stripe.
                      The tools from Stripe enable payments for every type of
                      business, including online and in-person retailers,
                      marketplaces, software platforms and subscription
                      services.
                    </span>
                    <span className="pbsc-ul">
                      <span className="pbsc-bold">Key Objectives:</span>
                      <span>
                        - Providing payment gateway for eCommerce platforms
                      </span>
                      <span>
                        - Providing billing and payments for SaaS businesses
                      </span>
                      <span>
                        - Help marketplaces receive payments using their
                        custom-built API
                      </span>
                      <span>- Provide financial reporting</span>
                    </span>
                    <span>
                      <span className="pbsc-bold">Market Advantage:</span>
                      <span>
                        - Structured themselves as a solution where you can get
                        paid by customers from anywhere in the world.
                      </span>
                      <span>
                        - Strengthening brand recognition and customer loyalty
                        with their blog and posts.
                      </span>
                    </span>
                  </p>
                </div>
                <div className="pbsc-image">
                  <div>
                    <Image src={brain5} alt="Strengths" />
                  </div>
                  <div>
                    <Image src={brain6} alt="Strengths" />
                  </div>
                  <div>
                    <Image src={brain7} alt="Strengths" />
                  </div>
                  <div>
                    <Image src={brain8} alt="Strengths" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="WhoAmIDesigningFor">
            <div className="phc-bcont-alt ms-padding">
              <h2 className="phc-heading2-alt">Who am I designing for?</h2>
              <p className="phc-bodyp-alt max-w-[682px]">
                <span>
                  Based on the research I conducted, I was able to come up with
                  two personas for the project as seen below.
                </span>
              </p>
            </div>

            <div className="waidf-subcont flex flex-col gap-6 ms-padding">
              <div className="muna">
                <div className="ws-sub-left flex flex-col gap-[14px]">
                  <div className=" w-full max-w-[144.5px] lg:w-[256px] lg:max-w-[256px] h-auto overflow-hidden rounded-lg lg:rounded-[20px]">
                    <Image
                      className=" w-full h-auto"
                      src={munachi}
                      alt="Munachi Eze"
                    />
                  </div>
                  <div className="muna-cont">
                    <h6>Munachi Eze, 32</h6>
                    <div>
                      <div>
                        <h6>Occupation</h6>
                        <p>Business man</p>
                      </div>
                      <div>
                        <h6>Location</h6>
                        <p>Lagos, NG</p>
                      </div>
                      <div>
                        <h6>Tech Literacy</h6>
                        <p>Average</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ws-sub-right">
                  <div>
                    <h6>Background</h6>
                    <p>
                      <span className="max-w-[315px]">
                        Munachi is a 32 year old business man in Lagos that runs
                        a small business where he sells and delivers
                        wristwatches within and out of Lagos from his little
                        store at Obalende Market
                      </span>
                    </p>
                  </div>
                  <div>
                    <h6>Core needs</h6>
                    <p>
                      <ul className="max-w-[283px]">
                        <li>
                          needs a medium to receive payments from his customers
                          all over the country who order his watches
                        </li>
                        <li>
                          looking for a way to easily receive payments from
                          other vendors who purchase similar products from him
                          regularly to resell.
                        </li>
                        <li>
                          Receive payments from customers who want to pay with
                          card or cash and without mixing business account with
                          personal.
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <h6>Frustrations</h6>
                    <p>
                      <ul>
                        <li>
                          Customers who come to the shop to pay, sometimes bank
                          doesn't show the credit alert, thereby delaying the
                          customer from leaving
                        </li>
                        <li>
                          Inability to fully organize and handle his account.
                        </li>
                        <li>Finds it difficult to balance his account.</li>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <h6>Behaviours</h6>
                    <p>
                      <ul>
                        <li>
                          Munachi usually sends his account via WhatsApp to old
                          customers who make orders and make the delivery when
                          they pay, and always sends it when they need
                        </li>
                        <li>
                          For customers who come to his store he either receives
                          cash and or those who transfer he gives his bank
                          account number and waits for an alert before selling.
                        </li>
                      </ul>
                      <span></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="muna">
                <div className="ws-sub-left flex flex-col gap-[14px]">
                  <div className=" w-full max-w-[144.5px] lg:w-[256px] lg:max-w-[256px] h-auto overflow-hidden rounded-lg lg:rounded-[20px]">
                    <Image
                      className=" w-full h-auto"
                      src={phonehub}
                      alt="Phonehub"
                    />
                  </div>
                  <div className="muna-cont">
                    <h6>Phonehub</h6>
                    <div>
                      <div>
                        <h6 className=" self-start">Location</h6>
                        <p className="lg:max-w-[115px]">
                          Lagos, Abuja, Portharcourt, Ibadan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ws-sub-right">
                  <div>
                    <h6>Background</h6>
                    <p>
                      <span className="">
                        Phonehub is an electronics company that deals in selling
                        and repairs of all phones ranging from android to ios,
                        they have over 50 staff and 20 outlets all over the
                        country
                      </span>
                    </p>
                  </div>
                  <div>
                    <h6>Core needs</h6>
                    <p>
                      <ul className="">
                        <li>
                          needs a medium to receive payments from customers all
                          over the country who do business with them
                        </li>
                        <li>
                          looking for a way to easily balance their accounts and
                          reconcile payments in one place despite having stores
                          all over the country
                        </li>
                        <li>Create invoices for services rendered</li>
                        <li>Manage users roles</li>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <h6>Frustrations</h6>
                    <p>
                      <ul>
                        <li>
                          Customers can't purchase from his business website
                          easily without the agents always having to send the
                          account details for each payment
                        </li>
                        <li>
                          Inability to manage financial accounts, leading to
                          unbalanced records
                        </li>
                        <li>
                          Finds it difficult to manage customers and maintain
                          relationships
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <h6>Behaviours</h6>
                    <p>
                      <ul>
                        <li>
                          Phonehub staff usually just receive payments and
                          because they need to receive alerts and not all can
                          have company emails or phones to do so, each branch
                          has an account where they control and receive alerts
                          to confirm payments, and at the end of a period remit
                          to the main company account.
                        </li>
                      </ul>
                      <span></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-20 pt-20 ms-padding lg:pt-[46px]">
          <section className="value-proposition max-w-[962px]">
            <div>
              <h2>Value Proposition- Customers</h2>
              <p>
                In the customer profile,{" "}
                <span className="text-[#fafafa]">
                  you explain the work your client is attempting to do by
                  emphasizing their pains and gains; it is used to track users'
                  demands and position the organization to learn more about the
                  customers' wants in order to correctly generate value.
                </span>
              </p>
            </div>
            <div>
              <Image src={vpcustomers} alt="Value Proposition for Customers" />
            </div>
          </section>

          <section className="value-proposition max-w-[962px]">
            <div>
              <h2>Value Proposition- Business</h2>
              <p>
                Here, you list the items and services on which your value
                proposition is based, describing how the product features and
                services relieve pain and outline how they create gain.
              </p>
            </div>
            <div>
              <Image src={vpbusiness} alt="Value Proposition for Businesses" />
            </div>
          </section>

          <section class="userStories examiningThePainPoints -template">
            <div className="phc-bcont max-w-[945px]">
              <h2 className="phc-heading2">User Stories</h2>
              <p className="phc-bodyp-alt lg:gap-[0!important]">
                <span className="text-[#989999]">
                  Two of the major painpoints that some users faced are stated
                  below
                </span>
                <span>
                  <ul className="phc-bodyp-ul">
                    <li>
                      As a user I want to be able to accept payments from
                      clients so that I can be compensated for the services I
                      provide.
                    </li>
                    <li>
                      As a user I want to be able to allow my customers to set
                      recurring payments.
                    </li>
                    <li>
                      As a user I want to be able to generate paylinks that my
                      clients may use to make payments.
                    </li>
                    <li>
                      As a user I want to be able to add money to my wallet so
                      that I can complete transactions.
                    </li>
                    <li>
                      As a user I want to be able to manage and add customers to
                      my business so that we can keep a nice working
                      relationship.
                    </li>
                    <li>
                      As a user I need to be able to accept payments in other
                      currencies so that I can conduct business abroad.
                    </li>

                    <li>
                      As a user I want to be able to add my employees to my
                      business so that the team can handle activities
                      effectively.
                    </li>
                    <li>
                      As a user I need the ability to send payments from my
                      dashboard so that I may pay for any services that we might
                      require.
                    </li>
                    <li>
                      As a user I need to be able to reconcile my accounts so
                      that I can keep accurate records.
                    </li>
                    <li>
                      As a user I want to be able to send invoices to my
                      customers for payment.
                    </li>
                    <li>
                      As a user I want to be able to accept payments via
                      numerous payment methods so that users always have a way
                      to pay.
                    </li>
                    <li>
                      As a user I want to be able to issue refunds whenever a
                      customer complains about a service and demands one.
                    </li>
                  </ul>
                </span>
              </p>
            </div>
          </section>
        </div>
        
        <div className="userflow ms-padding pt-20 lg:pt-[72px]">
          <section className=" max-w-[790px] flex flex-col gap-6 lg:gap-16">
            <div className="phc-bcont-alt">
              <h6 className="phc-heading2-alt">User Flows</h6>
              <p className="phc-bodyp-alt">User flows assisted me in patterning the flow of the user's activities in the product from the entry point to the user's decisions and the resulting actions in order to account for each phase of the user's journey.</p>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[755px]">
              <Image className="self-center w-full h-auto" src={userflow} alt="Userflow" />
            </div>
          </section>
        </div>
        
        <div className="sitemap ms-padding pt-20 lg:pt-[72px]">
          <section className="max-w-[891px] flex flex-col gap-6 lg:gap-[72px]">
            <div className="phc-bcont-alt">
              <h6 className="phc-heading2-alt">Sitemap</h6>
              <p className="phc-bodyp-alt">After reviewing my personas and user journeys and keeping key features in mind, I began to consider the app's structure. I had a basic notion of keeping the structure simple with coexisting tiers because there is a lot of overlapping content and I wanted my visitors to be able to go easily from one page to the next.</p>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[637px]">
              <Image className="self-center w-full h-auto" src={sitemap} alt="sitemap" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Collect;
