import { useState } from "react";
import StarOutline from "../StarOutline";
import StarSolid from "../StarSolid";
import { Link } from "react-router-dom";
import moviesApi from "../../apis/moviesApi";

const data = moviesApi.map(item => item)

console.log(data)

function FavMovieCard({ moviePoster, movieTitle, watchlist, trailer}) {
  const [count, setCount] = useState(0);

  // console.log(count)
  function setStarRate() {
    setCount(prevState => prevState + 1)
  }

  return (
    <main>
      <aside className="w-[12em] [height:fit-content] rounded-b-xl">
        <div>
          <img
            src={moviePoster}
            alt=""
            className="cursor-pointer hover:opacity-60 saruta"
          />
        </div>
        {/* Card Content */}
        <div className="bg-zinc-800 px-[12px] py-[10px] rounded-b-md">
          <span className="flex justify-between">
            {/* Ratings */}
            <p className="font-medium tracking-wide font-raleway text-white text-xs py-1 px-2 select-none ">
              <StarSolid svgIconsWidthSize="15" svgIconsHeightSize="15" />
              {/* {props.star}% */}
              {count}%
            </p>

            {/* BTN */}
            <p
              className="font-medium tracking-wide font-raleway text-white text-xs hover:bg-zinc-500 transition-colors duration-500 ease-linear py-1 px-2 rounded-md cursor-pointer select-none active:[transform:translateY(2px)]"
              onClick={setStarRate}
            >
              <StarOutline svgIconsWidthSize="15" svgIconsHeightSize="15" />
              Rate
            </p>
          </span>
          {/* Name of Movie */}
          <p className="font-normal tracking-wide font-raleway text-white text-center py-2">
            {movieTitle}
          </p>

          <div className="flex flex-col gap-y-4">
            <Link className="px-[5px] py-[5px] bg-white/20 text-white hover:bg-emerald-400 hover:text-black rounded-md transition-color duration-700 ease font-raleway flex justify-center gap-2"
            to={watchlist}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="main-grid-item-icon inline mt-1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <line x1="12" x2="12" y1="5" y2="19" />
                <line x1="5" x2="19" y1="12" y2="12" />
              </svg>
              <button>Watchlist</button>
            </Link>

            <Link className="px-[5px] py-[5px] bg-white/20 text-white hover:bg-emerald-400 hover:text-black rounded-md transition-color duration-700 ease font-raleway flex justify-center gap-2"
            to={trailer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="mt-1 main-grid-item-icon inline"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <button>Trailer</button>
            </Link>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default FavMovieCard;
