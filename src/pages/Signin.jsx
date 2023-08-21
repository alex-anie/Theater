import SigninCard from "../components/cards/SigninCard";
import { createPortal } from "react-dom";

import "../custom.css";

function Signup() {
  return (
    <>
      {createPortal(
        <main className="w-screen h-screen overflow-hidden">
          <div className="[background-image:url('https://user-images.githubusercontent.com/78242022/257044879-89de46db-2803-4f22-b864-9c7bbea01691.jpg')] [background-size:cover] [background-position:center_center] [background-repeat:no-repeat] w-full h-full before:content-[''] before:w-full before:h-full before:block before:-inset-0 before:bg-gradient-to-br from-emerald-950 "></div>
          <div className="">
            <SigninCard />
          </div>
        </main>,
        document.getElementById("portal"),
        document.getElementById("root").classList.add("root")
      )}
    </>
  );
}

export default Signup;
