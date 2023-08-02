import { Link } from "react-router-dom";

function Summer(props) {
  return (
    <>
      <Link>
        <main className="relative">
          <aside className="group w-72 rounded-md cursor-pointer hover:ring-4 hover:ring-[#34d399] transition-all duration-500 ease-in-out relative before:content-[''] before:block before:w-full before:h-0 before:rounded-md before:absolute before:left-0 before:bottom-0 before:bg-white/50 before:backdrop-blur-sm before:transition-all before:duration-500 before:ease-in-out hover:before:h-full [&_h1]:hover:opacity-100">
            <img src={props.moviePoster} alt="" className="rounded-md" />

            <div className="absolute bottom-0 left-4">
              <p className="font-medium tracking-wide font-raleway m-0 p-0 uppercase opacity-0 transition-opacity duration-500 ease-in-out delay-300 group-hover:opacity-100">
                <span className="bg-white p-1 text-[10px] rounded-tl-md rounded-bl-md">
                  Movies
                </span>
                <span className="bg-emerald-500 p-1 text-[10px] rounded-tr-md rounded-br-md">
                  `{props.date} {props.month}, {props.year}`
                </span>
              </p>
              <h1 className="font-medium tracking-wide font-raleway text-black text-2xl transition-opacity duration-500 ease-in-out opacity-0">
                {props.movieTitle}
              </h1>
            </div>
          </aside>
        </main>
      </Link>
    </>
  );
}

export default Summer;
