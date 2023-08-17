import { Link } from "react-router-dom";
import NavLogo from "../../assets/threatre.png";
import SocialIcons from "./SocialIcons";


function Footer() {
  return (
    <>
      <main>
        <section className="grid md:grid-cols-3 grid-cols-1  w-[80%] mx-auto my-2">
          <div>
            <ul className="[&_li]:m-8 [&_li]:text-zinc-400 font-medium tracking-wide font-raleway pt-4">
              {/* FAQ */}
              <li>
                <Link className="hover:text-zinc-50 hover:underline">FAQ</Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Media Center
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Ways to Watch
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Speed Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <ul className="[&_li]:m-8 [&_li]:text-zinc-400 font-medium tracking-wide font-raleway text-white pt-4">
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Corporate Information
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Legal Notices
                </Link>
              </li>
            </ul>
          </div>
          {/* Account Section */}
          <div>
            <ul className="[&_li]:m-8 [&_li]:text-zinc-400 font-medium tracking-wide font-raleway text-white pt-4">
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Account
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">Jobs</Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-50 hover:underline">
                  Only on Theatre
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <hr />

        {/* Logo  and Social Icons */}
        <section className="md:flex md:justify-between w-[80%] mx-auto mt-8">
          {/* Logo */}
          <div>
            <Link to="/">
              <img src={NavLogo} alt="" className="w-40 mt-4" />
            </Link>
          </div>
          {/* Social Icons */}
          <div className="mt-4">
            <SocialIcons />
          </div>
        </section>

        {/* All Reight */}
        <section className="md:flex md:justify-between w-[80%] mx-auto mt-8">
          {/* All right */}
          <div>
            <p className="text-zinc-400 font-medium tracking-wide font-raleway pt-4">
              © 2023 Theatre. All rights reserved.
            </p>
          </div>

          {/* Build with Love */}
          <div className="mb-12 mt-4 p-2">
            <p className="inline-block pr-2">
              <span className="text-zinc-400 font-medium tracking-wide font-raleway pt-4">
                Made with
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="main-grid-item-icon inline-block"
                fill="#34d399"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>

              <span className="text-zinc-400 font-medium tracking-wide font-raleway pt-4">
                In React By,
              </span>
              <Link
                className="text-emerald-500 font-medium tracking-wide font-raleway p2-2"
                to="https://www.twitter.com/ocxigin"
                target="_blank"
              >
                Alex Anie
              </Link>
              <span className="text-zinc-400 font-medium tracking-wide font-raleway pt-2">
                Lagos, Nigeria.
              </span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Footer;
