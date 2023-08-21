import SidebarTitle from "../components/SidebarTitle";
import Summer from "../components/Summer";
import moviesApi from "../apis/moviesApi";
import FavMovieCard from "../components/cards/FavMovieCard";
import Footer from "../components/cards/Footer";
import LandingPage from "../movies/LandingPage";

function MutantNinja() {
  return (
    <>
      {/* Background Image */}
      <main className="w-screen h-screen overflow-hidden">
        {/* Desktop */}
        <div className="[background-image:url('https://user-images.githubusercontent.com/78242022/261397172-16d9691d-8d9c-484c-8b68-4a8dd5ea7dd1.jpg')] [background-size:cover] [background-position:center_center] [background-repeat:no-repeat] w-full h-full before:content-[''] before:w-full before:h-full before:block before:-inset-0 before:bg-gradient-to-tr before:from-black from-50deg to-90%"></div>
      </main>

      {/* Text and YouTube Iframe*/}
      <main>
        <LandingPage
          movieImg={moviesApi[37].movieImg}
          movieTitle={moviesApi[37].movieTitle}
          genre={moviesApi[37].genre}
          star={moviesApi[37].star}
          year={moviesApi[37].year}
          month={moviesApi[37].month}
          date={moviesApi[37].date}
          moviePosterLandscape={moviesApi[37].moviePosterLandscape}
          moviePoster={moviesApi[37].moviePoster}
          movieDescription={moviesApi[37].movieDescription}
          iframeSrc={moviesApi[37].iframeSrc}
          cast={moviesApi[37].cast}
        />
      </main>

      {/* More Movies */}
      <main className="w-[90%] mt-[6em] lg:mt-8 mb-4 mx-auto">
        {/* Sidebar Titles */}
        <div>
          <SidebarTitle
            styleHeading="inline font-bold tracking-wide font-raleway text-white text-2xl"
            styleBody="font-normal tracking-wide font-raleway text-white"
            heading="Best Cartoons To Watch"
            body="Here is a curated list of all the best series from our fans"
          />
        </div>

        {/* Movies Card */}
        <div className="mt-4  lg:grid-cols-3 lg:gap-4 md:grid-cols-3 md:gap-2 grid grid-cols-2 gap-2">
          <Summer
            key={moviesApi[32].id}
            movieTitle={moviesApi[32].movieTitle}
            moviePoster={moviesApi[32].moviePoster}
            date={moviesApi[32].date}
            month={moviesApi[32].month}
            year={moviesApi[32].year}
            link="../SpiderMan"
          />

          <Summer
            key={moviesApi[31].id}
            movieTitle={moviesApi[31].movieTitle}
            moviePoster={moviesApi[31].moviePoster}
            date={moviesApi[31].date}
            month={moviesApi[31].month}
            year={moviesApi[31].year}
            link="../Cartoon"
          />

          <Summer
            key={moviesApi[33].id}
            movieTitle={moviesApi[33].movieTitle}
            moviePoster={moviesApi[33].moviePoster}
            date={moviesApi[33].date}
            month={moviesApi[33].month}
            year={moviesApi[33].year}
            link="../Migration"
          />

          <Summer
            key={moviesApi[34].id}
            movieTitle={moviesApi[34].movieTitle}
            moviePoster={moviesApi[34].moviePoster}
            date={moviesApi[34].date}
            month={moviesApi[34].month}
            year={moviesApi[34].year}
            link="../Rango"
          />

          <Summer
            key={moviesApi[35].id}
            movieTitle={moviesApi[35].movieTitle}
            moviePoster={moviesApi[35].moviePoster}
            date={moviesApi[35].date}
            month={moviesApi[35].month}
            year={moviesApi[35].year}
            link="../TheLorax"
          />

          <Summer
            key={moviesApi[36].id}
            movieTitle={moviesApi[36].movieTitle}
            moviePoster={moviesApi[36].moviePoster}
            date={moviesApi[36].date}
            month={moviesApi[36].month}
            year={moviesApi[36].year}
            link="../PussinBoots"
          />

          <Summer
            key={moviesApi[38].id}
            movieTitle={moviesApi[38].movieTitle}
            moviePoster={moviesApi[38].moviePoster}
            date={moviesApi[38].date}
            month={moviesApi[38].month}
            year={moviesApi[38].year}
            link="../RubyGillman"
          />

          <Summer
            key={moviesApi[39].id}
            movieTitle={moviesApi[39].movieTitle}
            moviePoster={moviesApi[39].moviePoster}
            date={moviesApi[39].date}
            month={moviesApi[39].month}
            year={moviesApi[39].year}
            link="../Mavka"
          />

          <Summer
            key={moviesApi[30].id}
            movieTitle={moviesApi[30].movieTitle}
            moviePoster={moviesApi[30].moviePoster}
            date={moviesApi[30].date}
            month={moviesApi[30].month}
            year={moviesApi[30].year}
            link="../TheMonkeyKing"
          />
        </div>
      </main>

      {/* SMall Youtube iframes */}
      <main className="w-screen bg-white pb-10">
        <div className=" w-[90%] pt-8 mx-auto">
          {/* Sidebar Titles */}
          <div className="mb-4">
            <SidebarTitle
              styleHeading="inline font-bold tracking-wide font-raleway text-black text-2xl"
              styleBody="font-normal tracking-wide font-raleway text-black"
              heading="Top on theatre this week"
              body="See what eveyone is talking about on box-office this week"
            />
          </div>

          {/* Small iframe */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 sm:w-[80%] md:w-screen sm:h-40 md:h-[18em]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/ndl1W4ltcmg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1&playlist=ndl1W4ltcmg"
              title="House of the Dragon | Official Trailer | Max"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>

            <iframe
              src="https://www.youtube-nocookie.com/embed/5KyHy4KRvIc?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1&playlist=5KyHy4KRvIc"
              title="House of the Dragon | Official Trailer | Max"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </main>

      {/* Movie Series */}
      <main className="pb-20">
        <div className="w-[90%] pt-8 mx-auto">
          {/* Sidebar Titles */}
          <div className="pb-4">
            <SidebarTitle
              styleHeading="inline font-bold tracking-wide font-raleway text-white text-2xl"
              styleBody="font-normal tracking-wide font-raleway text-white"
              heading="Top on theatre this week"
              body="See what eveyone is talking about this series on box-office this week"
            />
          </div>

          {/* More Movie Cards */}
          <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-6 md:grid-cols-3 lg:gap-4">
            <FavMovieCard
              moviePoster={moviesApi[41].moviePoster}
              movieTitle={moviesApi[41].movieTitle}
              star={moviesApi[41].star}
              watchlist="../Signup"
              trailer="../Vikings"
            />
            <FavMovieCard
              moviePoster={moviesApi[42].moviePoster}
              movieTitle={moviesApi[42].movieTitle}
              star={moviesApi[42].star}
              watchlist="../Signup"
              trailer="../HouseoftheDragon"
            />
            <FavMovieCard
              moviePoster={moviesApi[43].moviePoster}
              movieTitle={moviesApi[43].movieTitle}
              star={moviesApi[43].star}
              watchlist="../Signup"
              trailer="../GameofThrones"
            />
            <FavMovieCard
              moviePoster={moviesApi[44].moviePoster}
              movieTitle={moviesApi[44].movieTitle}
              star={moviesApi[44].star}
              watchlist="../Signup"
              trailer="../IntotheBadlands"
            />
            <FavMovieCard
              moviePoster={moviesApi[45].moviePoster}
              movieTitle={moviesApi[45].movieTitle}
              star={moviesApi[45].star}
              watchlist="../Signup"
              trailer="../TheWitcher"
            />
            <FavMovieCard
              moviePoster={moviesApi[46].moviePoster}
              movieTitle={moviesApi[46].movieTitle}
              star={moviesApi[46].star}
              watchlist="../Signup"
              trailer="../Heroes"
            />
          </div>
        </div>
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

export default MutantNinja;
