import { Link } from "react-router-dom";
import Payment from "../components/cards/Payment";
import Badge from "../components/Badge";
import Checkmark from "../components/Checkmark";
import { Minus } from "../components/Minus";
import Footer from "../components/cards/Footer";


function Plan() {
  return (
    <>
      <main className="bg-white">
        {/* Payment CTAs and Partners */}
        <main>
          <section>
            <aside className="mt-20 flex justify-center">
              <div className="w-[50%] mb-4 mx-auto">
                <div>
                  <div className="mb-4 flex justify-center">
                    <Badge />
                  </div>
                </div>
                <p className="font-bold tracking-wide font-raleway uppercase text-[#34d399] text-center pb-4">
                  Switch plan or cancel anytime
                </p>
                <h1 className="tracking-wide font-raleway text-black font-black text-4xl capitalize text-center">
                  Select your plan
                </h1>
                <p className="font-medium tracking-wide font-raleway text-black text-center">
                  No hidden fees, equiptment rentals, or installation
                  appointments
                </p>
                <p className=" tracking-wide font-raleway text-black text-center text-xs">
                  Debit and Credit card, pre-paid vouchers or add to a partner
                  bill. You choose, Cancel online, anytime.
                </p>
              </div>
            </aside>
          </section>
        </main>

        <main>
          {/* Payment Companies Logo */}
          <div className="mb-8">
            <div className="w-[90%] mt-4 mx-auto flex justify-center">
              <Payment />
            </div>

            {/* button */}
            <div className="flex justify-center mt-4">
              <Link
                className="bg-zinc-600 [width:fit-content] leading-8 text-[#fff] font-bold px-4 rounded-sm hover:outline hover:outline-slate-600 hover:bg-transparent hover:text-black transition-colors duration-500 ease-linear"
                to="../Signup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="main-grid-item-icon inline"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <line x1="12" x2="12" y1="5" y2="19" />
                  <line x1="5" x2="19" y1="12" y2="12" />
                </svg>
                <button>Add Plan</button>
              </Link>
            </div>
          </div>
        </main>

        {/* Plan Table */}
        <main className="w-[90%] my-12 mx-auto">
          <section className="grid grid-cols-1 md:grid md:grid-cols-3 gap-8 mb-8">
            {/* Basic Plan */}
            <aside className="outline-6 outline-zinc-300 outline mb-8 py-8 rounded-sm">
              <div>
                <h1 className="tracking-wide font-raleway text-black font-black text-2xl text-center capitalize">
                  Basic plan
                </h1>

                {/* button */}
                <div className="flex justify-center mt-4">
                  <Link
                    className="bg-zinc-600 [width:fit-content] leading-8 text-[#fff] font-bold px-4 rounded-sm hover:outline hover:outline-slate-600 hover:bg-transparent hover:text-black transition-colors duration-500 ease-linear mb-8"
                    to="../Signup"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="main-grid-item-icon inline"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <line x1="12" x2="12" y1="5" y2="19" />
                      <line x1="5" x2="19" y1="12" y2="12" />
                    </svg>
                    <button>$12.99 / Month</button>
                  </Link>
                </div>

                {/* Price Details */}
                <div className="[&>*:nth-child(odd)]:bg-zinc-100 [line-height:60px] [&>p]:h-[fit-content] [&>p]:text-center">
                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Monthly price. Save up to $15.98/mo.*
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Theatre Streaming library with tons of episodes and movies
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Most new episodes the day after they air
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Access to award-winning Theatre Originals
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Minus SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Watch on your favorite devices, including TV, laptop,
                      phone, or tablet
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Minus SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Download and watch on Theatre
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Minus SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Live TV with 90+ top channels. No cable required.
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Minus SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Live TV guide to navigate channels
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Record Live TV with Unlimited DVR
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>
                </div>
              </div>
            </aside>

            {/* Premium Plan
              :: Here is for the second section
            */}
            <aside className="outline-6 outline-zinc-300 outline mb-8 py-8 rounded-sm">
              <div>
                <h1 className="tracking-wide font-raleway text-black font-black text-2xl text-center capitalize">
                  Premium plan
                </h1>

                {/* button */}
                <div className="flex justify-center mt-4">
                  <Link
                    className="bg-zinc-600 [width:fit-content] leading-8 text-[#fff] font-bold px-4 rounded-sm hover:outline hover:outline-slate-600 hover:bg-transparent hover:text-black transition-colors duration-500 ease-linear mb-8"
                    to="../Signup"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="main-grid-item-icon inline"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <line x1="12" x2="12" y1="5" y2="19" />
                      <line x1="5" x2="19" y1="12" y2="12" />
                    </svg>
                    <button>$19.99 / Month</button>
                  </Link>
                </div>

                {/* Price Details */}
                <div className="[&>*:nth-child(odd)]:bg-zinc-100 [line-height:60px] [&>p]:h-[fit-content] [&>p]:text-center">
                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Monthly price. Save up to $15.98/mo.*
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Theatre Streaming library with tons of episodes and movies
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Most new episodes the day after they air
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Access to award-winning Theatre Originals
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Watch on your favorite devices, including TV, laptop,
                      phone, or tablet
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Download and watch on Theatre
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Minus SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Live TV with 90+ top channels. No cable required.
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Minus SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Live TV guide to navigate channels
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Record Live TV with Unlimited DVR
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>
                </div>
              </div>
            </aside>

            {/* Ultimate Plan
              :: Here is for the third section
            */}
            <aside className="outline-6 outline-zinc-300 outline mb-8 py-8 rounded-sm">
              <div>
                <h1 className="tracking-wide font-raleway text-black font-black text-2xl capitalize text-center">
                  Ultimate plan
                </h1>

                {/* button */}
                <div className="flex justify-center mt-4">
                  <Link
                    className="bg-zinc-600 [width:fit-content] leading-8 text-[#fff] font-bold px-4 rounded-sm hover:outline hover:outline-slate-600 hover:bg-transparent hover:text-black transition-colors duration-500 ease-linear mb-8"
                    to="../Signup"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="main-grid-item-icon inline"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <line x1="12" x2="12" y1="5" y2="19" />
                      <line x1="5" x2="19" y1="12" y2="12" />
                    </svg>
                    <button>$69.99 / Month</button>
                  </Link>
                </div>

                {/* Price Details */}
                <div className="[&>*:nth-child(odd)]:bg-zinc-100 [line-height:60px] [&>p]:h-[fit-content] [&>p]:text-center">
                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Monthly price. Save up to $15.98/mo.*
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Theatre Streaming library with tons of episodes and movies
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Most new episodes the day after they air
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Access to award-winning Theatre Originals
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Watch on your favorite devices, including TV, laptop,
                      phone, or tablet
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Download and watch on Theatre
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Live TV with 90+ top channels. No cable required.
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Live TV guide to navigate channels
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>

                  <p className="font-raleway">
                    <em className="pl-[10px] not-italic">
                      Record Live TV with Unlimited DVR
                    </em>
                    <em className="not-italic inline-block ml-2">
                      <Checkmark SvgWeight="18" SvgHeight="18" />
                    </em>
                  </p>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </main>

      {/* Line button*/}
      <div className="w-screen h-2 [background-color:rgba(255,255,255,.2);]"></div>

      {/* Footer */}
      <main>
        <Footer />
      </main>
    </>
  );
}

export default Plan;
