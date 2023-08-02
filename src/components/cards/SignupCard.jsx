import { Link } from "react-router-dom";
import Checkmark from '../Checkmark'

function SignupCard() {
return (
  <main>
    <section className="flex justify-center">
      <aside className="bg-white w-[60%] rounded-md flex absolute top-[15%]">
        {/* Signup instruction */}
        <div className="w-[80%] mx-4 my-6">
          <div>
            <h1 className="text-2xl font-bold font-raleway mb-12">
              Sign up and start enjoying Theatre
            </h1>
          </div>
          <div>
            <p className="font-raleway pb-8">
              <Checkmark SvgWeight="18" SvgHeight="18" />
              <em className="pl-[10px] not-italic">
                Cancel at any time YOU want.
              </em>
            </p>
            <p className="font-raleway pb-8">
              <Checkmark SvgWeight="18" SvgHeight="18" />
              <em className="pl-[10px] not-italic">
                Change plans at any time.
              </em>
            </p>
            <p className="font-raleway">
              <Checkmark SvgWeight="18" SvgHeight="18" />
              <em className="pl-[10px] not-italic">
                Only a few steps ahead to watch.
              </em>
            </p>
          </div>
        </div>

        {/* Create acount and Singin  */}
        <div className="bg-zinc-100 pb-8">
          <div className="mb-4">
            <p className="text-1xl font-bold font-raleway inline-block px-8 py-4 bg-zinc-100 w-[50%]">
              Create account
            </p>

            <Link className="font-bold font-raleway inline-block px-8 py-4 bg-white w-[50%]">
              <p>Sign up</p>
            </Link>
          </div>
          <div className="w-[85%] mx-auto mt-8">
            {/* Email */}
            <span className="block mb-4">
              <label htmlFor="email" className="block font-raleway mb-2">
                Email
              </label>
              <input
                type="text"
                name=""
                id="email"
                className="py-3 px-4 [outline:_1px_solid_rgb(161_161_170)] rounded-md focus:outline-2 focus:outline-emerald-500 border-none w-full text-emerald-500"
                placeholder="your_email@exampl.com"
              />
            </span>

            {/* Password */}
            <span className="block mb-4">
              <label className="block font-raleway pb-2">
                Password
                <em className="font-raleway text-zinc-500 pl-1">
                  (enter at least 6 characters)
                </em>
              </label>
              <input
                type="password"
                name=""
                id=""
                className="py-3 px-4 outline-zinc-200 [outline:_1px_solid_rgb(161_161_170)] outline-4 rounded-md focus:outline-2 focus:outline-emerald-500 border-none w-full text-emerald-500"
                placeholder="password"
              />
            </span>

            {/* Show password */}
            <span className="block mb-4">
              <input
                type="checkbox"
                name=""
                id="checkbox"
                className="accent-emerald-500"
              />
              <label htmlFor="checkbox" className="font-raleway pl-2">
                Show password
              </label>
            </span>

            {/* Term of Agreement */}
            <span className="block mb-4">
              <p className="font-raleway text-sm text-zinc-500">
                By clicking Create new account, you have read, understood and
                agree to be bound by the
                <Link className="text-emerald-500">
                  Service Terms and Conditions, Privacy Policy
                </Link>
                and
                <Link className="text-emerald-500">Licence Agreement.</Link>
              </p>
            </span>

            {/* Button */}
            <span>
              <Link className="block bg-emerald-500 text-white font-raleway w-[fit-content] rounded-full py-4 px-8 hover:opacity-80">
                create new account
              </Link>
            </span>
          </div>
        </div>
      </aside>

      <div>
        <Link
          className="text-4xl text-white absolute top-[2em] right-64 [line-height:50px] px-4 rounded-full bg-red-500 hover:bg-white hover:text-red-500 trnasition-color duration-500 ease-linear"
          to="/"
          // onClick={
          //   (document.getElementById("root"),
          //   document.getElementById("root").classList.remove("root"))
          // }
        >
          <button>X</button>
        </Link>
      </div>
    </section>
  </main>
);
}

export default SignupCard;
