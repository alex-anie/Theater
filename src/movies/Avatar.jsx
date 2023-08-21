import SidebarTitle from "../components/SidebarTitle";
import Summer from "../components/Summer";
import moviesApi from "../apis/moviesApi";
import FavMovieCard from "../components/cards/FavMovieCard";
import Footer from "../components/cards/Footer";
import LandingPage from "../movies/LandingPage";

function Avatar() {
  return (
    <>
      {/* Background Image */}
      <main className="w-screen h-screen overflow-hidden">
        {/* Desktop */}
        <div className="[background-image:url('https://user-images.githubusercontent.com/78242022/261310791-272d3d94-f8fd-4614-8522-9bf115aabf51.jpg')] [background-size:cover] [background-position:center_center] [background-repeat:no-repeat] w-full h-full before:content-[''] before:w-full before:h-full before:block before:-inset-0 before:bg-gradient-to-tr before:from-black from-50deg to-90%"></div>
      </main>

      {/* Text and YouTube Iframe*/}
      <main>
        <LandingPage
          movieImg={moviesApi[47].movieImg}
          movieTitle={moviesApi[47].movieTitle}
          genre={moviesApi[47].genre}
          star={moviesApi[47].star}
          year={moviesApi[47].releaseYear}
          month={moviesApi[47].type}
          date={moviesApi[47].seasons}
          moviePosterLandscape={moviesApi[47].moviePosterLandscape}
          moviePoster={moviesApi[47].moviePoster}
          movieDescription={moviesApi[47].movieDescription}
          iframeSrc={moviesApi[47].iframeSrc}
          cast={moviesApi[47].cast}
        />
      </main>

      {/* More Movies */}
      <main className="w-[90%] mt-[6em] lg:mt-8 mb-4 mx-auto">
        {/* Sidebar Titles */}
        <div>
          <SidebarTitle
            styleHeading="inline font-bold tracking-wide font-raleway text-white text-2xl"
            styleBody="font-normal tracking-wide font-raleway text-white"
            heading="Best Series To Watch"
            body="Here is a curated list of all the best series from our fans"
          />
        </div>

        {/* Movies Card */}
        <div className="mt-4  lg:grid-cols-3 lg:gap-4 md:grid-cols-3 md:gap-2 grid grid-cols-2 gap-2">
          <Summer
            key={moviesApi[40].id}
            movieTitle={moviesApi[40].movieTitle}
            moviePoster={moviesApi[40].moviePoster}
            date={moviesApi[40].seasons}
            month={moviesApi[40].type}
            year={moviesApi[40].releaseYear}
            link="../Series"
          />

          <Summer
            key={moviesApi[41].id}
            movieTitle={moviesApi[41].movieTitle}
            moviePoster={moviesApi[41].moviePoster}
            date={moviesApi[41].seasons}
            month={moviesApi[41].type}
            year={moviesApi[41].releaseYear}
            link="../Vikings"
          />

          <Summer
            key={moviesApi[42].id}
            movieTitle={moviesApi[42].movieTitle}
            moviePoster={moviesApi[42].moviePoster}
            date={moviesApi[42].seasons}
            month={moviesApi[42].type}
            year={moviesApi[42].releaseYear}
            link="../HouseoftheDragon"
          />

          <Summer
            key={moviesApi[43].id}
            movieTitle={moviesApi[43].movieTitle}
            moviePoster={moviesApi[43].moviePoster}
            date={moviesApi[43].seasons}
            month={moviesApi[43].type}
            year={moviesApi[43].releaseYear}
            link="../GameofThrones"
          />

          <Summer
            key={moviesApi[44].id}
            movieTitle={moviesApi[44].movieTitle}
            moviePoster={moviesApi[44].moviePoster}
            date={moviesApi[44].seasons}
            month={moviesApi[44].type}
            year={moviesApi[44].releaseYear}
            link="../IntotheBadlands"
          />

          <Summer
            key={moviesApi[45].id}
            movieTitle={moviesApi[45].movieTitle}
            moviePoster={moviesApi[45].moviePoster}
            date={moviesApi[45].seasons}
            month={moviesApi[45].type}
            year={moviesApi[45].releaseYear}
            link="../TheWitcher"
          />

          <Summer
            key={moviesApi[46].id}
            movieTitle={moviesApi[46].movieTitle}
            moviePoster={moviesApi[46].moviePoster}
            date={moviesApi[46].seasons}
            month={moviesApi[46].type}
            year={moviesApi[46].releaseYear}
            link="../Heroes"
          />

          <Summer
            key={moviesApi[48].id}
            movieTitle={moviesApi[48].movieTitle}
            moviePoster={moviesApi[48].moviePoster}
            date={moviesApi[48].seasons}
            month={moviesApi[48].type}
            year={moviesApi[48].releaseYear}
            link="../HouseofCards"
          />

          <Summer
            key={moviesApi[49].id}
            movieTitle={moviesApi[49].movieTitle}
            moviePoster={moviesApi[49].moviePoster}
            date={moviesApi[49].seasons}
            month={moviesApi[49].type}
            year={moviesApi[49].releaseYear}
            link="../MoneyHeist"
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
              src="https://www.youtube-nocookie.com/embed/RqrXhwS33yc?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1&playlist=RqrXhwS33yc"
              title="House of the Dragon | Official Trailer | Max"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>

            <iframe
              src="https://www.youtube-nocookie.com/embed/IHvzw4Ibuho?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1&playlist=IHvzw4Ibuho"
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
              body="See what eveyone is talking about on box-office this week"
            />
          </div>

          {/* More Movie Cards */}
          <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-6 md:grid-cols-3 lg:gap-4">
            <FavMovieCard
              moviePoster={moviesApi[12].moviePoster}
              movieTitle={moviesApi[12].movieTitle}
              star={moviesApi[12].star}
              watchlist="../Signup"
              trailer="../Brotherhood"
            />
            <FavMovieCard
              moviePoster={moviesApi[13].moviePoster}
              movieTitle={moviesApi[13].movieTitle}
              star={moviesApi[13].star}
              watchlist="Signup"
              trailer="../IleOwo"
            />
            <FavMovieCard
              moviePoster={moviesApi[14].moviePoster}
              movieTitle={moviesApi[14].movieTitle}
              star={moviesApi[14].star}
              watchlist="Signup"
              trailer="../HappinessforBeginners"
            />
            <FavMovieCard
              moviePoster={moviesApi[15].moviePoster}
              movieTitle={moviesApi[15].movieTitle}
              star={moviesApi[15].star}
              watchlist="Signup"
              trailer="../LutherTheFallenSun"
            />
            <FavMovieCard
              moviePoster={moviesApi[16].moviePoster}
              movieTitle={moviesApi[16].movieTitle}
              star={moviesApi[16].star}
              watchlist="Signup"
              trailer="../TheInvitation"
            />
            <FavMovieCard
              moviePoster={moviesApi[17].moviePoster}
              movieTitle={moviesApi[17].movieTitle}
              star={moviesApi[17].star}
              watchlist="Signup"
              trailer="../Medellin"
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

export default Avatar;
