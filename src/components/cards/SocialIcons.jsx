import { Link } from "react-router-dom";

function SocialIcons() {
return (
  <>
    <main className="">
      <Link className="bg-transparent outline-emerald-500 outline-1 outline mr-8 [line-height:40px] w-[fit-content] relative text-center text-white tracking-normal inline-block uppercase font-raleway py-2 px-4 select-none after:content-[''] after:inset-0 after:w-full after:h-full after:bg-gradient-to-r after:from-emerald-500 after:[z-index:-1] after:absolute after:transition-all after:duration-500 after:ease-linear hover:after:[left:10px] hover:after:[top:-10px]"
        to="https://www.twitter.com/ocxigin"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon inline-block pr-2"
          fill="none"
        >
          <path
            d="M7.548 21.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0 0 24 4.305a9.815 9.815 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.929 4.929 0 0 0-8.391 4.491A13.98 13.98 0 0 1 1.67 2.898a4.928 4.928 0 0 0 1.525 6.573A4.88 4.88 0 0 1 .96 8.855v.063a4.926 4.926 0 0 0 3.95 4.826 4.914 4.914 0 0 1-2.223.085 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.288a13.941 13.941 0 0 0 7.548 2.208"
            fill="#fff"
          />
        </svg>

        <span className="">Twitter</span>
      </Link>

      {/* Facebook */}
      <Link
        className="bg-transparent outline-emerald-500 outline-1 outline mr-8 [line-height:40px] w-[fit-content] relative text-center text-white tracking-normal inline-block uppercase font-raleway py-2 px-4 select-none after:content-[''] after:inset-0 after:w-full after:h-full after:bg-gradient-to-r  after:from-emerald-500 after:[z-index:-1] after:absolute after:transition-all after:duration-500 after:ease-linear hover:after:[left:10px] hover:after:[top:-10px]"
        to="https://www.facebook.com/ocxigin"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon inline-block pr-2"
          fill="none"
        >
          <path
            d="m17.543 13.398.661-4.31h-4.136V6.29c0-1.18.578-2.329 2.43-2.329h1.88V.291S16.673 0 15.042 0c-3.407 0-5.633 2.064-5.633 5.802v3.285H5.622v4.311h3.786v10.42a15.015 15.015 0 0 0 4.66 0v-10.42h3.475Z"
            fill="#fff"
          />
        </svg>
        <span className="">Facebook</span>
      </Link>

      {/* Linkedin */}
      <Link
        className="bg-transparent outline-emerald-500 outline-1 outline mr-8 [line-height:40px] w-[fit-content] relative text-center text-white tracking-normal inline-block uppercase font-raleway py-2 px-4 select-none after:content-[''] after:inset-0 after:w-full after:h-full after:bg-gradient-to-r after:from-emerald-500 after:[z-index:-1] after:absolute after:transition-all after:duration-500 after:ease-linear hover:after:[left:10px] hover:after:[top:-10px]"
        to="https://www.linkedin.com/in/alex-anie"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon inline-block pr-2"
          fill="none"
        >
          <path
            d="M5.372 24H.396V7.976h4.976V24ZM2.882 5.79C1.29 5.79 0 4.474 0 2.883a2.882 2.882 0 1 1 5.763 0c0 1.59-1.29 2.909-2.881 2.909ZM23.995 24H19.03v-7.8c0-1.86-.038-4.243-2.587-4.243-2.587 0-2.984 2.02-2.984 4.109V24H8.49V7.976h4.772v2.186h.07c.664-1.259 2.287-2.587 4.708-2.587 5.035 0 5.961 3.316 5.961 7.623V24h-.005Z"
            fill="#fff"
          />
        </svg>
        <span className="">Linkedin</span>
      </Link>

      {/* Github */}
      <Link
        className="bg-transparent outline-emerald-500 outline-1 outline mr-8 [line-height:40px] w-[fit-content] relative text-center text-white tracking-normal inline-block uppercase font-raleway py-2 px-4 select-none after:content-[''] after:inset-0 after:w-full after:h-full after:bg-gradient-to-r after:from-emerald-500 after:[z-index:-1] after:absolute after:transition-all after:duration-500 after:ease-linear hover:after:[left:10px] hover:after:[top:-10px]"
        to="https://www.github.com/ocxigin"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon inline-block pr-2"
          fill="#fff"
        >
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            fill="currentColor"
          />
        </svg>
        <span className="">GitHub</span>
      </Link>
    </main>
  </>
);
}

export default SocialIcons;
