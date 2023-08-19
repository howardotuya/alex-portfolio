import NavbarDark from "@/components/navbar-dark";
import Image from "next/image";
import Link from "next/link";
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

import one1 from "@/public/images/collect-africa/1-1.png";
import one2 from "@/public/images/collect-africa/1-2.png";
import one3 from "@/public/images/collect-africa/1-3.png";
import one4 from "@/public/images/collect-africa/1-4.png";
import one5 from "@/public/images/collect-africa/1-5.png";
import one6 from "@/public/images/collect-africa/1-6.png";
import one7 from "@/public/images/collect-africa/1-7.png";
import two1 from "@/public/images/collect-africa/dashboard.png";
import three1 from "@/public/images/collect-africa/3-1.png";
import three2 from "@/public/images/collect-africa/3-2.png";
import three3 from "@/public/images/collect-africa/3-3.png";
import three4 from "@/public/images/collect-africa/3-4.png";
import three5 from "@/public/images/collect-africa/3-5.png";
import four from "@/public/images/collect-africa/4-1.svg";
import five1 from "@/public/images/collect-africa/5-1.png";
import five2 from "@/public/images/collect-africa/5-2.png";
import five3 from "@/public/images/collect-africa/5-3.png";
import six1 from "@/public/images/collect-africa/6-1.png";
import six2 from "@/public/images/collect-africa/6-2.png";
import six3 from "@/public/images/collect-africa/6-3.png";
import six4 from "@/public/images/collect-africa/6-4.png";
import six5 from "@/public/images/collect-africa/6-5.png";
import six6 from "@/public/images/collect-africa/6-6.png";
import six7 from "@/public/images/collect-africa/6-7.png";
import seven1 from "@/public/images/collect-africa/7-1.png";
import seven2 from "@/public/images/collect-africa/7-2.png";
import seven3 from "@/public/images/collect-africa/7-3.png";
import seven4 from "@/public/images/collect-africa/7-4.png";
import eight1 from "@/public/images/collect-africa/8-1.png";
import eight2 from "@/public/images/collect-africa/8-2.png";
import eight3 from "@/public/images/collect-africa/8-3.png";
import eight4 from "@/public/images/collect-africa/8-4.png";
import eight5 from "@/public/images/collect-africa/8-5.png";
import arrow from "@/public/images/cta-arrow.png";

function Collect() {
  return (
    <div className="bg-[#252627]">
      <NavbarDark className="fixed" />
      <header className="bg-[#161718] phc pt-20 lg:pt-[135px]">
        <div className="phc-content">
          <Link href="/" className="phc-x1">
            <div>
              <Image
                className="w-3 h-3"
                placeholder="blur"
                src={arrowleft}
                alt="arrow-left"
              />
            </div>
            <h6>Back to home</h6>
          </Link>
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

      <main className="minusSect setbody">
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

          <div className="flex flex-col gap-20 lg:gap-[84px]">
            <section class="research ms-padding">
              <div className="phc-bcont">
                <h2 className="phc-heading2">Research</h2>
                <p className="phc-bodyp max-w-[913px]">
                  <span className="text-[#989999]">
                    Despite having been given a brief, the product manager and
                    we on the design team did some research to figure out what
                    we were creating. We did this to test our assumptions, gain
                    a deeper understanding of the users&apos; problems and
                    connect it to the company&apos;s objectives. The UX phase
                    started with getting to know the consumers and their habits.
                  </span>
                  <span>
                    The goal of the research was to gain a comprehensive
                    understanding of the issue as it directly impacts the users,
                    discovering their requirements and frustrations and
                    improving their experience. As a result, I was better able
                    to relate to and comprehend the problems that our users were
                    experiencing. Interviews were conducted as part of the
                    research to obtain some qualitative data.
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
                        Having trouble managing business clients and preserving
                        a relationship.
                      </li>
                      <li>
                        Having trouble maintaining a single company account
                        across many branches of the same firm.
                      </li>
                      <li>Having trouble collecting funds from abroad.</li>
                    </ul>
                  </span>
                </p>
              </div>
            </section>
          </div>

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
                          doesn&apos;t show the credit alert, thereby delaying
                          the customer from leaving
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
                          Customers can&apos;t purchase from his business
                          website easily without the agents always having to
                          send the account details for each payment
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
                  emphasizing their pains and gains; it is used to track
                  users&apos; demands and position the organization to learn
                  more about the customers&apos; wants in order to correctly
                  generate value.
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
              <p className="phc-bodyp-alt">
                User flows assisted me in patterning the flow of the user&apos;s
                activities in the product from the entry point to the
                user&apos;s decisions and the resulting actions in order to
                account for each phase of the user&apos;s journey.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[755px]">
              <Image
                className="self-center w-full h-auto"
                src={userflow}
                alt="Userflow"
              />
            </div>
          </section>
        </div>

        <div className="sitemap ms-padding pt-20 lg:pt-[93px]">
          <section className="max-w-[891px] flex flex-col gap-6 lg:gap-[72px]">
            <div className="phc-bcont-alt">
              <h6 className="phc-heading2-alt">Sitemap</h6>
              <p className="phc-bodyp-alt ">
                After reviewing my personas and user journeys and keeping key
                features in mind, I began to consider the app&apos;s structure.
                I had a basic notion of keeping the structure simple with
                coexisting tiers because there is a lot of overlapping content
                and I wanted my visitors to be able to go easily from one page
                to the next.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[637px]">
              <Image
                className="self-center w-full h-auto"
                src={sitemap}
                alt="sitemap"
              />
            </div>
          </section>
        </div>

        <div className="solution ms-padding pt-20 lg:pt-[93px]">
          <section className="flex flex-col gap-8 lg:gap-[72px]">
            <div className="phc-bcont-alt max-w-[790px]">
              <h2 className="phc-heading2-alt">Solution</h2>
              <p className="phc-bodyp-alt2">
                The solution had to include a mobile app and a dashboard; they
                both give comparable solutions but with minor differences based
                on the target audience and what they have available to work with
                in order to better meet their demands.
              </p>
            </div>

            <div className="list-of-solutions flex flex-col gap-14 lg:gap-[184px]">
              <div className="flex flex-col gap-14 lg:gap-[120px]">
                <div className="ls-cover-cont solution-1">
                  <div className="ls-cont">
                    <h3>1. Onboarding Screens</h3>
                    <p className="max-w-[790px]">
                      The onboarding process is designed to be quick and easy in
                      order to improve the user experience by accounting for
                      various business categories, including small, large, and
                      freelancers. All extraneous steps were deleted to lower
                      the rate of drop-off by clients who did not have the
                      requisite documentation to complete the procedure. So,
                      after signing up, you have restrictions on certain
                      transaction actions until you have submitted the proper
                      paperwork, so we always give you value.
                    </p>
                  </div>
                  <div className="one-image">
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={one4}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={one1}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={one3}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={one2}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={one7}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={one6}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={one5}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="lscc-alt solution-2">
                  <div className="max-w-[153px] order-2 lg:order-1 flex flex-col justify-center items-center">
                    <Image
                      className="w-full h-auto"
                      placeholder="blur"
                      quality={100}
                      src={two1}
                      alt=""
                    />
                  </div>
                  <div className="ls-cont  order-1 lg:order-2">
                    <h3>2. Simplified Dashboard</h3>
                    <p className="max-w-[500px]">
                      As a user, your first daily interaction is with the
                      dashboard where you receive a summary of reports and
                      latest activities that have happened in your company as
                      regards financial activities, hence the design of the
                      dashboard had to be optimized to be easy to read,
                      prioritize the data visualization to display info from the
                      highest priority to the least and still give room to take
                      major actions in the product.
                    </p>
                  </div>
                </div>
                <div className="ls-cover-cont solution-3">
                  <div className="ls-cont">
                    <h3>3. My Business</h3>
                    <p className="max-w-[790px]">
                      During design iteration, one of the solutions we came up
                      with was this section that would house features that
                      businesses would require. It would also be a place for
                      upcoming features for businesses as the navigation was
                      already full. This section is where businesses access
                      revenue, customers, invoice, paylinks and POS.
                    </p>
                  </div>
                  <div className="one-image">
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={three1}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={three2}
                        alt=""
                      />
                    </div>
                    <div className="w-[181px!important]">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={three3}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={three4}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Image
                        placeholder="blur"
                        quality={100}
                        src={three5}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="solution-4">
                <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                  <Image
                    className="w-full h-auto"
                    quality={100}
                    src={four}
                    alt=""
                  />
                </div>
                <div className="ls-cont order-1 lg:order-2">
                  <h3> 4. Collect Call - To -Action</h3>
                  <p className="max-w-[487px]">
                    The Collect CTA button is a quick action button that opens a
                    modal with actions that any business would most likely want
                    to perform quickly on the go. There is no need to dig deeper
                    into the app to find the necessary actions. We discovered
                    what users would most likely want to do during research and
                    curated them here.
                  </p>
                </div>
              </div>
              <div className="solution-5">
                <div className="ls-cont">
                  <h3>5. Customer Management</h3>
                  <p className="max-w-[506px]">
                    <span>
                      A good customer and business relationship strengthens the
                      bonds that customers have with businesses, causing them to
                      stay longer with a business that relates to them better,
                      and the business would know how best to serve the
                      customers because you can directly message the customers
                      and they receive the messages in the mails and SMS, and
                      every reply you receive in the customer&apos;s thread on
                      your dashboard.
                    </span>
                    <span>
                      You may add new clients, delete customers, place them on
                      services, and even send them messages on special occasions
                      such as popular holidays and birthdays to strengthen your
                      bond even further.
                    </span>
                  </p>
                </div>
                <div className="five-image">
                  <div className="">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={five1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={five2}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={five3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="ls-cover-cont solution-6">
                <div className="ls-cont">
                  <h3> 6. Bank Transfer (Receiving & Sending)</h3>
                  <p className="max-w-[790px]">
                    Every business, even freelancers, must make payments as well
                    as receive them. To accomplish this, we provide you with the
                    ability to receive and transfer funds from your dashboard to
                    any bank account in Africa and beyond for any of your
                    business branches. For example, a branch in Abuja and
                    another in New York can both initiate a business transaction
                    from the same business account for a service required by the
                    company, and if an approval chain is established, necessary
                    parties would approve before payment is sent to anywhere in
                    the world, and you would be able to both monitor the status
                    of the transaction.
                  </p>
                </div>
                <div className="one-image">
                  <div className="">
                    <Image placeholder="blur" quality={100} src={six1} alt="" />
                  </div>
                  <div className="">
                    <Image placeholder="blur" quality={100} src={six2} alt="" />
                  </div>
                  <div className="">
                    <Image placeholder="blur" quality={100} src={six3} alt="" />
                  </div>
                  <div className="">
                    <Image placeholder="blur" quality={100} src={six4} alt="" />
                  </div>
                  <div className="">
                    <Image placeholder="blur" quality={100} src={six5} alt="" />
                  </div>
                  {/* <div className="">
                    <Image placeholder="blur" quality={100} src={six6} alt="" />
                  </div> */}
                  <div className="">
                    <Image placeholder="blur" quality={100} src={six7} alt="" />
                  </div>
                </div>
              </div>
              <div className="ls-cover-cont solution-7">
                <div className="ls-cont">
                  <h3> 7. Payment Link</h3>
                  <p className="max-w-[790px]">
                    <span>
                      A pay link is a one-time link produced by an organization
                      that customers can use to make payments repeatedly or that
                      can be shared with several customers to make payments
                      using several payment methods that the customer(s) feels
                      comfortable with, saving the business time and hassle. The
                      amount to be paid can be specified by the company, or it
                      can be left up to the client.
                    </span>
                    <span>
                      This is also widely utilized and integrated with
                      e-commerce systems, where it is used as a payment portal
                      for purchased goods that is integrated into the eCommerce
                      platforms.
                    </span>
                  </p>
                </div>
                <div className="one-image">
                  <div className="w-[138px!important]">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={seven1}
                      alt=""
                    />
                  </div>
                  <div className="w-[138px!important]">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={seven2}
                      alt=""
                    />
                  </div>
                  <div className="w-[138px!important]">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={seven3}
                      alt=""
                    />
                  </div>
                  <div className="w-[138px!important]">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={seven4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="ls-cover-cont solution-8">
                <div className="ls-cont">
                  <h3> 8. Rewards & Referrals</h3>
                  <p className="max-w-[790px]">
                    We wanted to find a way to reward users for performing
                    several actions within the app. It was also a way to keep
                    users constantly engaged with our app. The result was this
                    rewards and referrals feature. Users can see their points
                    and badges on the dashboard, clicking on it will take them
                    to the rewards & referrals page.
                  </p>
                </div>
                <div className="one-image">
                  <div className="w-[156px!important]">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={eight1}
                      alt=""
                    />
                  </div>
                  <div className="w-[156px!important]">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={eight2}
                      alt=""
                    />
                  </div>
                  <div className="w-[156px!important]">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={eight3}
                      alt=""
                    />
                  </div>
                  <div className="w-[156px!important]">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={eight4}
                      alt=""
                    />
                  </div>
                  <div className="w-[156px!important]">
                    <Image
                      placeholder="blur"
                      quality={100}
                      src={eight5}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="ms-padding">
          <section className="conclusion">
            <h5>Conclusion</h5>
            <p>
              <span>
                It&apos;s difficult enough to get the trust of a single person
                or business to help manage their funds when dealing with
                businesses and financial operations. I&apos;ve noticed that
                transparency and ease of use are the most important factors in
                achieving the best results and retaining users. Also,
                understanding business goals to ensure the business generates a
                profit must be prioritized, which necessitates numerous calls
                with stakeholders and the alignment of design and business goals
                from the outset.
              </span>
              <span>
                I appreciated working on this project since it helped me
                understand how we might assist business owners because doing so
                will give them more time and energy to concentrate on growing
                their company.
              </span>
            </p>
          </section>
        </div>

        <div className="flex px-5 lg:justify-center lg:items-center pb-20 lg:pb-[243px]">
          <Link href="" className="project-ctas">
            <span>Next Project</span>
            <Image className="w-4 h-4" src={arrow} alt="Arrow Right" />
          </Link>
        </div>
      </main>

      <footer className="setbody d-140">
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
  );
}

export default Collect;
