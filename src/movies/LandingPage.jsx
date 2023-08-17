function LandingPage(props) {
  return (
    <div>
      {/* Display Background Text */}
      <main>
        {/* Movies Details */}
        <section>
          <aside className="">
            {/* Text Info */}
            <div className="absolute left-12 top-20 font-raleway text-zinc-100 md:w-[40%] w-[90%] mx-auto">
              <p className="w-[15em] lg:w-[15em]">
                <img src={props.movieImg} alt="" />
              </p>
              <p className="text-4xl mb-4">{props.movieTitle}</p>
              <p className="text-zinc-300 mb-4">
                <span className="">{props.genre} | </span>
                <span>
                  {props.date}
                  {props.ordinalNumber} {props.month}, {props.year} |{" "}
                </span>
                <span>rates: {props.star}% </span>
              </p>
              <p className="text-xl mb-4">{props.movieDescription}</p>
              <p className="text-zinc-300">
                <span className="font-semibold">Starring: </span>
                <span>{props.cast}</span>
              </p>
            </div>
          </aside>
        </section>

        {/* YouTube Iframe */}
        <section>
          <div>
            <section>
              {/* Destop */}
              <div className="absolute right-12 top-40 hidden lg:block">
                <iframe
                  src={props.iframeSrc}
                  width="660"
                  height="400"
                  title="House of the Dragon | Official Trailer | Max"
                  frameBorder="0"
                ></iframe>
              </div>

              {/* Mobile */}
              <div className="absolute right-12 top-[30em] w-[90%] mx-auto ml-12 lg:hidden">
                <iframe
                  src={props.iframeSrc}
                  width="500"
                  height="300"
                  title="House of the Dragon | Official Trailer | Max"
                  frameBorder="0"
                ></iframe>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage