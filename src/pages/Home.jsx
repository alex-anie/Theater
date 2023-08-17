import { Link } from "react-router-dom";
import Summer from "../components/Summer";
import Badge from "../components/Badge";
import SidebarTitle from "../components/SidebarTitle";
import FavMovieCard from "../components/cards/FavMovieCard";
import StarSolid from "../components/StarSolid";
import StarOutline from "../components/StarOutline";
import Payment from "../components/cards/Payment";
import Accordion from "../components/cards/Accordion";
import EmailField from "../components/cards/EmailField";
import Footer from "../components/cards/Footer";

import moviesApi from "../apis/moviesApi";

function Home() {
  // CSS Styles for Background-image for Home page
  const heroBg = {
      "background-image": `url(
        "https://user-images.githubusercontent.com/78242022/255400151-e6dc5fd7-f340-4d97-9d2b-4c735f747d18.jpg"
      )`,
      color: "white",
      "background-color": "#000",
      "background-size": `cover`,
      "background-position": "center center",
      "-webkit-mask": `linear-gradient(to bottom, transparent 0%, black 100%)`,
      'mask': `linear-gradient(to bottom, transparent 0%, black 100%)`,
    };

    return (
      <>
        <main>
          {/* Hero Page */}
          <main className="w-screen h-screen">
            <div
              style={heroBg}
              className="w-full h-full relative before:content-[''] before:block before:w-full before:h-full before:bg-gradient-to-tr before:from-[#000] before:to-[transparent] before:absolute before:inset-0"
            ></div>
            <header className="w-[38%] absolute left-8 top-40 text-white">
              <section className="absolute">
                {/* Name of Movie */}
                <div className="">
                  <p className="uppercase text-3xl font-black font-raleway">
                    House of the Dragon
                  </p>
                </div>

                {/* Category of movie */}
                <div className="mt-4">
                  <p className="font-medium tracking-wide font-raleway">
                    <span className="font-bold font-raleway text-emerald-500">
                      Genre:
                    </span>
                    Action | Adventure | Fantasy | Serial drama;
                  </p>
                  <p className="font-medium  tracking-wide font-raleway">
                    <span className="font-bold font-raleway text-[#34d399]">
                      First episode date:
                    </span>
                    21 August 2022 (USA)
                  </p>
                  <p className="flex font-medium tracking-wide font-raleway">
                    <span className="font-bold text-[#34d399]">
                      Star Ratings:
                    </span>
                    <StarSolid svgIconsWidthSize="24" svgIconsHeightSize="24" />
                    <StarSolid svgIconsWidthSize="24" svgIconsHeightSize="24" />
                    <StarSolid svgIconsWidthSize="24" svgIconsHeightSize="24" />
                    <StarSolid svgIconsWidthSize="24" svgIconsHeightSize="24" />
                    <StarOutline
                      svgIconsWidthSize="24"
                      svgIconsHeightSize="24"
                    />
                  </p>
                </div>

                {/* About movie */}
                <div className="mt-4">
                  <p className="font-medium tracking-wide font-raleway">
                    {`" The reign of House Targaryen begins with this prequel to
                    popular HBO series "Game of Thrones." Based on George R.R.
                    Martin's "Fire & Blood," "House of the Dragon" is set nearly
                    200 years before the events of "Game of Thrones," telling
                    the story of the Targaryen civil war with King Viserys I
                    Targaryen's children battling for control of the Iron
                    Throne.`}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-8">
                  <div>
                    {/* Add to Watchlist Button */}
                    <Link
                      className="mr-4 px-[2em] py-[1em] bg-white text-black hover:bg-emerald-400 hover:text-black rounded-full transition-all duration-700 ease font-raleway"
                      to="/Signup"
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
                      <button>Add to Watchlist</button>
                    </Link>

                    {/*Trailer Button  */}
                    <Link className="px-[2em] py-[1em] bg-white text-black hover:bg-emerald-400 hover:text-black rounded-full transition-all duration-700 ease font-raleway">
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
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <button>Play Trailer</button>
                    </Link>
                  </div>
                </div>
              </section>
            </header>

            {/* Youtube Embed */}
            <section>
              <div className="absolute right-12 top-40">
                <iframe
                  src="https://www.youtube.com/embed/DotnJ7tTA34?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&fs=0&color=white&controls=0&disablekb=1&playlist=DotnJ7tTA34"
                  width="560"
                  height="315"
                  title="House of the Dragon | Official Trailer | Max"
                  frameBorder="0"
                ></iframe>
              </div>
            </section>

            {/* Scroll down Icons */}
            <section>
              <div className="absolute right-[50%] bottom-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  className="main-grid-item-icon animate-bounce"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </section>
          </main>

          {/* Coming Soon Movies */}
          <main className="bg-[#0b0c0f] mb-12">
            <section className="flex justify-center ">
              <aside className="w-[50%] text-center mt-8 [&_p]:mb-4 [&_h1]:mb-4">
                <p className="font-bold tracking-wide font-raleway uppercase text-[#34d399]">
                  included in all plans
                </p>
                <h1 className="tracking-wide font-raleway text-white font-black text-6xl capitalize">
                  Coming soon this summer
                </h1>
                <p className="font-medium tracking-wide font-raleway text-white">
                  Watch full seasons of exclusive streaming series,
                  current-seasons episodes, hit movies, Theatre Originals, kids
                  shows, and more
                </p>
              </aside>
            </section>

            {/* Next coming movies series */}
            <section>
              <div className="grid grid-cols-4 mx-12 pb-12">
                <Summer
                  key={moviesApi[10].id}
                  movieTitle={moviesApi[10].movieTitle}
                  moviePoster={moviesApi[10].moviePoster}
                  date={moviesApi[10].date}
                  month={moviesApi[10].month}
                  year={moviesApi[10].year}
                  link="movies"
                />

                <Summer
                  key={moviesApi[5].id}
                  movieTitle={moviesApi[5].movieTitle}
                  moviePoster={moviesApi[5].moviePoster}
                  date={moviesApi[5].date}
                  month={moviesApi[5].month}
                  year={moviesApi[5].year}
                />

                <Summer
                  key={moviesApi[6].id}
                  movieTitle={moviesApi[6].movieTitle}
                  moviePoster={moviesApi[6].moviePoster}
                  date={moviesApi[5].date}
                  month={moviesApi[5].month}
                  year={moviesApi[5].year}
                />

                <Summer
                  key={moviesApi[16].id}
                  movieTitle={moviesApi[16].movieTitle}
                  moviePoster={moviesApi[16].moviePoster}
                  date={moviesApi[16].date}
                  month={moviesApi[16].month}
                  year={moviesApi[16].year}
                />
              </div>
            </section>
          </main>

          {/* Feature Movies */}
          <main>
            <section>
              <aside className="mb-4 flex justify-center">
                <div>
                  <div className="mb-4 flex justify-center">
                    <Badge />
                  </div>
                  <div>
                    <h4 className="font-bold tracking-wide font-raleway text-white text-center">
                      Sign in to access your Watchlist
                    </h4>
                    <p className="font-normal tracking-wide font-raleway text-white text-center">
                      Save shows, series, movie to keep track of what you want
                      to watch.
                    </p>
                    {/* button Signin to watchlist */}
                    <Link className="flex justify-center my-8">
                      <button className="[background-color:rgba(255,255,255,.2);] [width:fit-content] leading-8 text-[#34d399] font-bold px-4 rounded-sm hover:[background-color:rgba(255,255,255,.9);] hover:text-black transition-colors duration-500 ease-linear">
                        Sign in to theatre
                      </button>
                    </Link>
                  </div>
                </div>
              </aside>
              <aside>
                <div className="w-[90%] mt-8 mb-4 mx-auto ">
                  <SidebarTitle
                    styleHeading="inline font-bold tracking-wide font-raleway text-white text-2xl"
                    styleBody="font-normal tracking-wide font-raleway text-white"
                    heading="Top on theatre this week"
                    body="See what eveyone is talking about on box-office this week"
                  />
                </div>
              </aside>
              <aside className="mt-4 mb-8">
                <div className="w-[90%] mt-8 mb-4 mx-auto flex gap-x-4">
                  <FavMovieCard
                    moviePoster={moviesApi[0].moviePoster}
                    movieTitle={moviesApi[0].movieTitle}
                    star={moviesApi[0].star}
                    watchlist="Signup"
                    trailer="Barbie"
                    // heading="Top 10 on theatre this week"
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[1].moviePoster}
                    movieTitle={moviesApi[1].movieTitle}
                    star={moviesApi[1].star}
                    watchlist="Signup"
                    trailer="Napoleon"
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[2].moviePoster}
                    movieTitle={moviesApi[2].movieTitle}
                    star={moviesApi[2].star}
                    trailer="TheEqualizer3"
                    watchlist="Signup"
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[3].moviePoster}
                    movieTitle={moviesApi[3].movieTitle}
                    star={moviesApi[3].star}
                    trailer="Oppenheimer"
                    watchlist="Signup"
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[4].moviePoster}
                    movieTitle={moviesApi[4].movieTitle}
                    star={moviesApi[4].star}
                    trailer="TheLittleMermaid"
                    watchlist="Signup"
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[5].moviePoster}
                    movieTitle={moviesApi[5].movieTitle}
                    star={moviesApi[5].star}
                    watchlist="Signup"
                    trailer="TheNunII"
                  />
                </div>
              </aside>
            </section>

            {/* Second Card [Movies] */}
            <section>
              <aside>
                <div className="w-[90%] mt-12 mb-4 mx-auto ">
                  <SidebarTitle
                    styleHeading="inline font-bold tracking-wide font-raleway text-white text-2xl"
                    styleBody="font-normal tracking-wide font-raleway text-white"
                    heading="Fan favorites"
                    body="Yeah! Exactly what you think, here is what your frends are seeing this weekend"
                  />
                </div>
              </aside>
              <aside className="mt-4 mb-8">
                <div className="w-[90%] mt-8 mb-4 mx-auto flex gap-x-4">
                  <FavMovieCard
                    moviePoster={moviesApi[6].moviePoster}
                    movieTitle={moviesApi[6].movieTitle}
                    star={moviesApi[6].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[7].moviePoster}
                    movieTitle={moviesApi[7].movieTitle}
                    star={moviesApi[7].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[8].moviePoster}
                    movieTitle={moviesApi[8].movieTitle}
                    star={moviesApi[8].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[9].moviePoster}
                    movieTitle={moviesApi[9].movieTitle}
                    star={moviesApi[9].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[10].moviePoster}
                    movieTitle={moviesApi[10].movieTitle}
                    star={moviesApi[10].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[11].moviePoster}
                    movieTitle={moviesApi[11].movieTitle}
                    star={moviesApi[11].star}
                  />
                </div>
              </aside>
            </section>

            {/* Third section [] */}
            <section>
              <aside>
                <div className="w-[90%] mt-12 mb-4 mx-auto ">
                  <SidebarTitle
                    styleHeading="inline font-bold tracking-wide font-raleway text-white text-2xl"
                    styleBody="font-normal tracking-wide font-raleway text-white"
                    heading="Explore what’s streaming"
                    body="There are some hand pick series just for you"
                  />
                </div>
              </aside>
              <aside className="mt-4 mb-8">
                <div className="w-[90%] mt-8 mb-4 mx-auto flex gap-x-4">
                  <FavMovieCard
                    moviePoster={moviesApi[41].moviePoster}
                    movieTitle={moviesApi[41].movieTitle}
                    star={moviesApi[41].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[42].moviePoster}
                    movieTitle={moviesApi[42].movieTitle}
                    star={moviesApi[42].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[43].moviePoster}
                    movieTitle={moviesApi[43].movieTitle}
                    star={moviesApi[43].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[44].moviePoster}
                    movieTitle={moviesApi[44].movieTitle}
                    star={moviesApi[44].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[45].moviePoster}
                    movieTitle={moviesApi[45].movieTitle}
                    star={moviesApi[45].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[46].moviePoster}
                    movieTitle={moviesApi[46].movieTitle}
                    star={moviesApi[46].star}
                  />
                </div>
              </aside>
            </section>

            {/* Fourth */}
            <section>
              <aside>
                <div className="w-[90%] mt-12 mb-4 mx-auto ">
                  <SidebarTitle
                    styleHeading="inline font-bold tracking-wide font-raleway text-white text-2xl"
                    styleBody="font-normal tracking-wide font-raleway text-white"
                    heading="Cartoons for kids"
                    body="Kids are not left out, check out this new cartoons now on theatre"
                  />
                </div>
              </aside>
              <aside className="mt-4 mb-8">
                <div className="w-[90%] mt-8 mb-4 mx-auto flex gap-x-4">
                  <FavMovieCard
                    moviePoster={moviesApi[31].moviePoster}
                    movieTitle={moviesApi[31].movieTitle}
                    star={moviesApi[31].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[32].moviePoster}
                    movieTitle={moviesApi[32].movieTitle}
                    star={moviesApi[32].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[33].moviePoster}
                    movieTitle={moviesApi[33].movieTitle}
                    star={moviesApi[33].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[34].moviePoster}
                    movieTitle={moviesApi[34].movieTitle}
                    star={moviesApi[34].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[35].moviePoster}
                    movieTitle={moviesApi[35].movieTitle}
                    star={moviesApi[35].star}
                  />
                  <FavMovieCard
                    moviePoster={moviesApi[36].moviePoster}
                    movieTitle={moviesApi[36].movieTitle}
                    star={moviesApi[36].star}
                  />
                </div>
              </aside>
            </section>
          </main>

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
                  <h1 className="tracking-wide font-raleway text-white font-black text-4xl capitalize text-center">
                    Select your plan
                  </h1>
                  <p className="font-medium tracking-wide font-raleway text-white text-center">
                    No hidden fees, equiptment rentals, or installation
                    appointments
                  </p>
                  <p className="font-thin tracking-wide font-raleway text-white text-center text-xs">
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
                <Link className="[background-color:rgba(255,255,255,.2);] [width:fit-content] leading-8 text-[#34d399] font-bold px-4 rounded-sm hover:[background-color:rgba(255,255,255,.9);] hover:text-black transition-colors duration-500 ease-linear">
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

          {/* Devices */}
          {/* Line top*/}
          <div className="w-screen h-2 [background-color:rgba(255,255,255,.2);]"></div>
          <main>
            <aside className="mt-20 flex justify-start">
              <div>
                <div className="[transform:translate(100px,100px)]">
                  <h1 className="w-[28em] tracking-wide font-raleway text-white font-black text-4xl capitalize">
                    Enjoy on your TV
                  </h1>
                  <p className="w-[28em] font-medium tracking-wide font-raleway text-white pt-4">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                    Blu-ray players, and more.
                  </p>
                  <p className="w-[28em] font-thin tracking-wide font-raleway text-white text-sm pt-3">
                    Stream unlimited movies and TV shows on your phone, tablet,
                    laptop, and TV.
                  </p>
                </div>

                {/* Video */}
                <section className="relative">
                  <div className="[transform:translate(600px,-100px)]">
                    <iframe
                      src="https://www.youtube.com/embed/r51cYVZWKdY?vq=hd1080&autoplay=1&loop=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=r51cYVZWKdY"
                      width="560"
                      height="315"
                      title="The Flash - Official Trailer 2"
                      className=""
                    ></iframe>
                  </div>
                </section>
              </div>
            </aside>
          </main>
          {/* Line button*/}
          <div className="w-screen h-2 [background-color:rgba(255,255,255,.2);]"></div>

          {/* Stream from Phone */}
          {/* Line top*/}
          <div className="w-screen h-2 [background-color:rgba(255,255,255,.2);]"></div>
          <main>
            <aside className="flex justify-start">
              <div>
                {/* Image */}
                <div className="[transform:translate(200px,40px)]">
                  <img
                    src="https://user-images.githubusercontent.com/78242022/256237439-4a2a2492-02f5-4e70-9699-ed2fd355a710.png"
                    alt=""
                  />
                </div>

                <div className="[transform:translate(600px,-240px)]">
                  <h1 className="w-[18em] mt-4 tracking-wide font-raleway text-white font-black text-4xl capitalize">
                    Download your shows to watch offline
                  </h1>
                  <p className="w-[28em] font-medium tracking-wide font-raleway text-white pt-4">
                    Save your favorites easily and always have something to
                    watch.
                  </p>
                </div>

                {/* Nested image */}
                <div className="[transform:translate(150px,-200px)] w-[25em] bg-black border-2 rounded-lg border-zinc-500 flex p-4">
                  <img
                    src="https://user-images.githubusercontent.com/78242022/256252746-9621f076-d48b-466c-a0fb-6179d2cdde0b.jpg"
                    alt=""
                    className="w-20"
                  />
                  <div className="ml-4">
                    <p className="mt-8 tracking-wide font-raleway text-white font-bold text-xl capitalize">
                      The Last of Us
                    </p>
                    <p className="font-thin tracking-wide font-raleway text-[#34d399]">
                      Downloading...
                    </p>
                  </div>

                  <div className="[transform:translate(30px,10px)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="80"
                      height="80"
                      className="main-grid-item-icon"
                      fill="none"
                      stroke="#34d399"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <line x1="12" x2="12" y1="5" y2="19" />
                      <polyline points="19 12 12 19 5 12" />
                    </svg>
                  </div>

                  <div className="[transform:translate(-35px,54px)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="50"
                      height="50"
                      className="main-grid-item-icon"
                      fill="none"
                      stroke="#34d399"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <line x1="5" x2="19" y1="12" y2="12" />
                    </svg>
                  </div>
                </div>
              </div>
            </aside>
          </main>
          {/* Line button*/}
          <div className="w-screen h-2 [background-color:rgba(255,255,255,.2);]"></div>

          {/* Cartoon */}
          {/* Line top*/}
          <div className="w-screen h-2 [background-color:rgba(255,255,255,.2);]"></div>
          <main>
            <aside className="flex justify-start">
              <div>
                {/* Image */}
                <div className="[transform:translate(2px,5px)]">
                  <img
                    src="https://user-images.githubusercontent.com/78242022/256215710-78094071-4b47-4352-807e-91e486c9b3e2.png"
                    alt=""
                    className="w-[40em]"
                  />
                </div>

                <div className="[transform:translate(700px,-240px)]">
                  <h1 className="w-[18em] mt-4 tracking-wide font-raleway text-white font-black text-4xl capitalize">
                    Create profiles for kids
                  </h1>
                  <p className="w-[28em] font-medium tracking-wide font-raleway text-white pt-4">
                    Send kids on adventures with their favorite characters in a
                    space made just for them—free with your membership.
                  </p>
                </div>
              </div>
            </aside>
          </main>
          {/* Line button*/}
          <div className="w-screen h-2 [background-color:rgba(255,255,255,.2);]"></div>

          {/* Accordion */}
          <main>
            <section className="w-[70%] mt-12 mb-4 mx-auto ">
              <div className="mb-4 flex justify-center">
                <Badge />
              </div>
              <div>
                <h4 className="font-bold tracking-wide font-raleway text-white text-center text-4xl mb-4">
                  Frequently Asked Questions
                </h4>
              </div>
              <Accordion />
            </section>

            <div className="mt-12 mb-4 mx-auto flex justify-center">
              <div>
                <p className="font-medium tracking-wide font-raleway text-white text-center">
                  Enter your email to create or restart your membership.
                </p>
                <EmailField />
              </div>
            </div>
          </main>

          {/* Line button*/}
          <div className="w-screen h-2 [background-color:rgba(255,255,255,.2);]"></div>

          {/* Footer */}
          <main>
            <Footer />
          </main>
        </main>
      </>
    );
}

export default Home;
