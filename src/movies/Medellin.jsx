import SidebarTitle from "../components/SidebarTitle";
import Summer from "../components/Summer";
import moviesApi from "../apis/moviesApi";
import FavMovieCard from "../components/cards/FavMovieCard";
import Footer from "../components/cards/Footer";
import LandingPage from "../movies/LandingPage";

function Medellin() {
  return (
    <>
      {/* Background Image */}
      <main className="w-screen h-screen overflow-hidden">
        {/* Desktop */}
        <div className="[background-image:url('https://user-images.githubusercontent.com/78242022/258655917-3da1d62e-4093-4aea-a8de-292da952857b.jpg')] [background-size:cover] [background-position:center_center] [background-repeat:no-repeat] w-full h-full before:content-[''] before:w-full before:h-full before:block before:-inset-0 before:bg-gradient-to-tr before:from-black from-50deg to-90%"></div>
      </main>

      {/* Text and YouTube Iframe*/}
      <main>
        <LandingPage
          movieImg={moviesApi[17].movieImg}
          movieTitle={moviesApi[17].movieTitle}
          genre={moviesApi[17].genre}
          star={moviesApi[17].star}
          year={moviesApi[17].year}
          month={moviesApi[17].month}
          date={moviesApi[17].date}
          ordinalNumber={moviesApi[17].ordinalNumber}
          moviePosterLandscape={moviesApi[17].moviePosterLandscape}
          moviePoster={moviesApi[17].moviePoster}
          movieDescription={moviesApi[17].movieDescription}
          iframeSrc={moviesApi[17].iframeSrc}
          cast={moviesApi[17].cast}
        />
      </main>

      {/* More Movies */}
      <main className="w-[90%] mt-[6em] lg:mt-8 mb-4 mx-auto">
        {/* Sidebar Titles */}
        <div>
          <SidebarTitle
            styleHeading="inline font-bold tracking-wide font-raleway text-white text-2xl"
            styleBody="font-normal tracking-wide font-raleway text-white"
            heading="Best Movies To Watch"
            body="Here is a curated list of all the best movies from our fans"
          />
        </div>

        {/* Movies Card */}
        <div className="mt-4  lg:grid-cols-5 lg:gap-4 md:grid-cols-3 md:gap-2 grid grid-cols-2 gap-2">
          <Summer
            key={moviesApi[10].id}
            movieTitle={moviesApi[10].movieTitle}
            moviePoster={moviesApi[10].moviePoster}
            date={moviesApi[10].date}
            month={moviesApi[10].month}
            year={moviesApi[10].year}
            link="../movies"
          />

          <Summer
            key={moviesApi[0].id}
            movieTitle={moviesApi[0].movieTitle}
            moviePoster={moviesApi[0].moviePoster}
            date={moviesApi[0].date}
            month={moviesApi[0].month}
            year={moviesApi[0].year}
            link="../Barbie"
          />

          <Summer
            key={moviesApi[1].id}
            movieTitle={moviesApi[1].movieTitle}
            moviePoster={moviesApi[1].moviePoster}
            date={moviesApi[1].date}
            month={moviesApi[1].month}
            year={moviesApi[1].year}
            link="../Napoleon"
          />

          <Summer
            key={moviesApi[2].id}
            movieTitle={moviesApi[2].movieTitle}
            moviePoster={moviesApi[2].moviePoster}
            date={moviesApi[2].date}
            month={moviesApi[2].month}
            year={moviesApi[2].year}
            link="../TheEqualizer3"
          />

          <Summer
            key={moviesApi[3].id}
            movieTitle={moviesApi[3].movieTitle}
            moviePoster={moviesApi[3].moviePoster}
            date={moviesApi[3].date}
            month={moviesApi[3].month}
            year={moviesApi[3].year}
            link="../Oppenheimer"
          />

          <Summer
            key={moviesApi[4].id}
            movieTitle={moviesApi[4].movieTitle}
            moviePoster={moviesApi[4].moviePoster}
            date={moviesApi[4].date}
            month={moviesApi[4].month}
            year={moviesApi[4].year}
            link="../TheLittleMermaid"
          />

          <Summer
            key={moviesApi[29].id}
            movieTitle={moviesApi[29].movieTitle}
            moviePoster={moviesApi[29].moviePoster}
            date={moviesApi[29].date}
            month={moviesApi[29].month}
            year={moviesApi[29].year}
            link="../Ghosted"
          />

          <Summer
            key={moviesApi[5].id}
            movieTitle={moviesApi[5].movieTitle}
            moviePoster={moviesApi[5].moviePoster}
            date={moviesApi[5].date}
            month={moviesApi[5].month}
            year={moviesApi[5].year}
            link="../TheNunII"
          />

          <Summer
            key={moviesApi[6].id}
            movieTitle={moviesApi[6].movieTitle}
            moviePoster={moviesApi[6].moviePoster}
            date={moviesApi[6].date}
            month={moviesApi[6].month}
            year={moviesApi[6].year}
            link="../BlueBeetle"
          />

          <Summer
            key={moviesApi[7].id}
            movieTitle={moviesApi[7].movieTitle}
            moviePoster={moviesApi[7].moviePoster}
            date={moviesApi[7].date}
            month={moviesApi[7].month}
            year={moviesApi[7].year}
            link="../BirdBoxBarcelona"
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

          <Summer
            key={moviesApi[8].id}
            movieTitle={moviesApi[8].movieTitle}
            moviePoster={moviesApi[8].moviePoster}
            date={moviesApi[8].date}
            month={moviesApi[8].month}
            year={moviesApi[8].year}
            link="../TheyClonedTyrone"
          />

          <Summer
            key={moviesApi[9].id}
            movieTitle={moviesApi[9].movieTitle}
            moviePoster={moviesApi[9].moviePoster}
            date={moviesApi[9].date}
            month={moviesApi[11].month}
            year={moviesApi[11].year}
            link="../CreedIII"
          />

          <Summer
            key={moviesApi[11].id}
            movieTitle={moviesApi[11].movieTitle}
            moviePoster={moviesApi[11].moviePoster}
            date={moviesApi[11].date}
            month={moviesApi[11].month}
            year={moviesApi[11].year}
            link="../GangsofLagos"
          />

          <Summer
            key={moviesApi[12].id}
            movieTitle={moviesApi[12].movieTitle}
            moviePoster={moviesApi[12].moviePoster}
            date={moviesApi[12].date}
            month={moviesApi[12].month}
            year={moviesApi[12].year}
            link="../Brotherhood"
          />

          <Summer
            key={moviesApi[13].id}
            movieTitle={moviesApi[13].movieTitle}
            moviePoster={moviesApi[13].moviePoster}
            date={moviesApi[13].date}
            month={moviesApi[13].month}
            year={moviesApi[13].year}
            link="../IleOwo"
          />

          <Summer
            key={moviesApi[14].id}
            movieTitle={moviesApi[14].movieTitle}
            moviePoster={moviesApi[14].moviePoster}
            date={moviesApi[14].date}
            month={moviesApi[14].month}
            year={moviesApi[14].year}
            link="../HappinessforBeginners"
          />

          <Summer
            key={moviesApi[15].id}
            movieTitle={moviesApi[15].movieTitle}
            moviePoster={moviesApi[15].moviePoster}
            date={moviesApi[15].date}
            month={moviesApi[15].month}
            year={moviesApi[15].year}
            link="../LutherTheFallenSun"
          />

          <Summer
            key={moviesApi[16].id}
            movieTitle={moviesApi[16].movieTitle}
            moviePoster={moviesApi[16].moviePoster}
            date={moviesApi[16].date}
            month={moviesApi[16].month}
            year={moviesApi[16].year}
            link="../TheInvitation"
          />

          <Summer
            key={moviesApi[18].id}
            movieTitle={moviesApi[18].movieTitle}
            moviePoster={moviesApi[18].moviePoster}
            date={moviesApi[18].date}
            month={moviesApi[18].month}
            year={moviesApi[18].year}
            link="../Asterix"
          />

          <Summer
            key={moviesApi[19].id}
            movieTitle={moviesApi[19].movieTitle}
            moviePoster={moviesApi[19].moviePoster}
            date={moviesApi[19].date}
            month={moviesApi[19].month}
            year={moviesApi[19].year}
            link="../TheMother"
          />

          <Summer
            key={moviesApi[20].id}
            movieTitle={moviesApi[20].movieTitle}
            moviePoster={moviesApi[20].moviePoster}
            date={moviesApi[20].date}
            month={moviesApi[20].month}
            year={moviesApi[20].year}
            link="../Renfield"
          />

          <Summer
            key={moviesApi[21].id}
            movieTitle={moviesApi[21].movieTitle}
            moviePoster={moviesApi[21].moviePoster}
            date={moviesApi[21].date}
            month={moviesApi[21].month}
            year={moviesApi[21].year}
            link="../Chupa"
          />

          <Summer
            key={moviesApi[22].id}
            movieTitle={moviesApi[22].movieTitle}
            moviePoster={moviesApi[22].moviePoster}
            date={moviesApi[22].date}
            month={moviesApi[22].month}
            year={moviesApi[22].year}
            link="../WeHaveaGhost"
          />

          <Summer
            key={moviesApi[23].id}
            movieTitle={moviesApi[23].movieTitle}
            moviePoster={moviesApi[23].moviePoster}
            date={moviesApi[23].date}
            month={moviesApi[23].month}
            year={moviesApi[23].year}
            link="../Wonka"
          />

          <Summer
            key={moviesApi[24].id}
            movieTitle={moviesApi[24].movieTitle}
            moviePoster={moviesApi[24].moviePoster}
            date={moviesApi[24].date}
            month={moviesApi[24].month}
            year={moviesApi[24].year}
            link="../IndianaJones"
          />

          <Summer
            key={moviesApi[25].id}
            movieTitle={moviesApi[25].movieTitle}
            moviePoster={moviesApi[25].moviePoster}
            date={moviesApi[25].date}
            month={moviesApi[25].month}
            year={moviesApi[25].year}
            link="../Crater"
          />

          <Summer
            key={moviesApi[26].id}
            movieTitle={moviesApi[26].movieTitle}
            moviePoster={moviesApi[26].moviePoster}
            date={moviesApi[26].date}
            month={moviesApi[26].month}
            year={moviesApi[26].year}
            link="../ShawshankRedemption"
          />

          <Summer
            key={moviesApi[27].id}
            movieTitle={moviesApi[27].movieTitle}
            moviePoster={moviesApi[27].moviePoster}
            date={moviesApi[27].date}
            month={moviesApi[27].month}
            year={moviesApi[27].year}
            link="../MissionImpossible"
          />

          <Summer
            key={moviesApi[28].id}
            movieTitle={moviesApi[28].movieTitle}
            moviePoster={moviesApi[28].moviePoster}
            date={moviesApi[28].date}
            month={moviesApi[28].month}
            year={moviesApi[28].year}
            link="../FlowerMoon"
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
              src="https://www.youtube-nocookie.com/embed/2S3M1xFVdVg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1&playlist=2S3M1xFVdVg"
              title="House of the Dragon | Official Trailer | Max"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>

            <iframe
              src="https://www.youtube-nocookie.com/embed/uYPbbksJxIg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&playlist=uYPbbksJxIg&q=Oppenheimer"
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
              moviePoster={moviesApi[31].moviePoster}
              movieTitle={moviesApi[31].movieTitle}
              star={moviesApi[31].star}
              watchlist="Signup"
              trailer="../Migration"
            />
            <FavMovieCard
              moviePoster={moviesApi[32].moviePoster}
              movieTitle={moviesApi[32].movieTitle}
              star={moviesApi[32].star}
              watchlist="Signup"
              trailer="../SpiderMan"
            />
            <FavMovieCard
              moviePoster={moviesApi[33].moviePoster}
              movieTitle={moviesApi[33].movieTitle}
              star={moviesApi[33].star}
              watchlist="Signup"
              trailer="../TheMagician"
            />
            <FavMovieCard
              moviePoster={moviesApi[34].moviePoster}
              movieTitle={moviesApi[34].movieTitle}
              star={moviesApi[34].star}
              watchlist="Signup"
              trailer="../Rango"
            />
            <FavMovieCard
              moviePoster={moviesApi[35].moviePoster}
              movieTitle={moviesApi[35].movieTitle}
              star={moviesApi[35].star}
              watchlist="Signup"
              trailer="../TheLorax"
            />
            <FavMovieCard
              moviePoster={moviesApi[36].moviePoster}
              movieTitle={moviesApi[36].movieTitle}
              star={moviesApi[36].star}
              watchlist="Signup"
              trailer="../PussinBoots"
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

export default Medellin;
