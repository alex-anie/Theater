import {NavLink} from 'react-router-dom';
import NavLogo from '../assets/threatre.png';

function Navbar() {
    const navLinkStyles = ({isActive}) => {
        return {
            color: isActive ? "black" : "white",
            backgroundColor: isActive ? "#34d399" : "transparent",
        };
    }

    return (
      <>
        <nav className="bg-black text-white flex justify-around pt-4">
          {/* NavLinks  */}
          <section>
            <ul className="flex gap-4">
              <li>
                <NavLink
                  style={navLinkStyles}
                  to="/"
                  className="px-[8px] py-[5px] hover:bg-emerald-400 hover:text-black rounded-xl transition-all duration-700 ease font-raleway"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Movies"
                  style={navLinkStyles}
                  className="px-[8px] py-[5px] hover:bg-emerald-400 hover:text-black rounded-xl transition-all duration-700 ease font-raleway"
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Series"
                  style={navLinkStyles}
                  className="px-[8px] py-[5px] hover:bg-emerald-400 hover:text-black rounded-xl transition-all duration-700  font-raleway"
                >
                  Series
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Plan"
                  style={navLinkStyles}
                  className="px-[8px] py-[5px] hover:bg-emerald-400 hover:text-black rounded-xl transition-all duration-700 ease font-raleway"
                >
                  Plan
                </NavLink>
              </li>
            </ul>
          </section>

          {/* Site Logo */}
          <section>
            <div>
              <img src={NavLogo} alt="" className='w-[8em]'/>
            </div>
          </section>

          {/* CTA buttons */}
          <section>
            <ul className='flex gap-4 mb-4'>
              <li>
                <NavLink
                  to="/Signin"
                  className="flex px-[8px] py-[5px] bg-white text-black hover:bg-emerald-400 hover:text-black rounded-xl transition-all duration-700 ease font-raleway"
                >
                  {/* Signin Icons */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="main-grid-item-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {/* Signin Text */}
                  Signin
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/Signup"
                  className="flex px-[8px] py-[5px] bg-white text-black hover:bg-emerald-400 hover:text-black rounded-xl transition-all duration-700 ease font-raleway"
                >
                  {/* Signup Icons */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="main-grid-item-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" x2="20" y1="8" y2="14" />
                    <line x1="23" x2="17" y1="11" y2="11" />
                  </svg>
                  {/* Signup Text */}
                  Signup
                </NavLink>
              </li>
            </ul>
          </section>
        </nav>
      </>
    );
}

export default Navbar;
