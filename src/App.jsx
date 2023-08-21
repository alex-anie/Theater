import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Series from "./pages/Series.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Plan from "./pages/Plan.jsx";
import Error from "./pages/Error.jsx";
import Navbar from "./pages/Navbar.jsx";
import Cartoon from "./pages/Cartoon.jsx";

// Movies Pages
import Barbie from "./movies/Barbie.jsx";
import Napoleon from "./movies/Napoleon.jsx";
import TheEqualizer3 from "./movies/TheEqualizer3.jsx";
import Oppenheimer from "./movies/Oppenheimer.jsx";
import TheLittleMermaid from "./movies/TheLittleMermaid.jsx";
import Ghosted from "./movies/Ghosted.jsx"
import TheNunII from "./movies/TheNunII.jsx"
import BlueBeetle from "./movies/BlueBeetle.jsx";
import BirdBoxBarcelona from "./movies/BirdBoxBarcelona.jsx";
import TheMonkeyKing from './movies/TheMonkeyKing.jsx';
import TheyClonedTyrone from "./movies/TheyClonedTyrone.jsx";
import CreedIII from "./movies/CreedIII.jsx";
import GangsofLagos from "./movies/GangsofLagos.jsx";
import Brotherhood from "./movies/Brotherhood.jsx";
import IleOwo from "./movies/IleOwo.jsx";
import HappinessforBeginners from "./movies/HappinessforBeginners.jsx";
import LutherTheFallenSun from "./movies/LutherTheFallenSun.jsx";
import TheInvitation from "./movies/TheInvitation.jsx";
import Medellin from "./movies/Medellin.jsx";
import Asterix from "./movies/Asterix.jsx";
import TheMother from "./movies/TheMother.jsx";
import Renfield from "./movies/Renfield.jsx";
import Chupa from "./movies/Chupa.jsx";
import WeHaveaGhost from "./movies/WeHaveaGhost.jsx";
import Wonka from "./movies/Wonka.jsx";
import IndianaJones from "./movies/IndianaJones.jsx";
import Crater from "./movies/Crater.jsx";
import ShawshankRedemption from "./movies/ShawshankRedemption.jsx";
import MissionImpossible from "./movies/MissionImpossible.jsx";
import FlowerMoon from "./movies/FlowerMoon.jsx";

// Series
import Vikings from "./movies/Vikings.jsx";
import HouseoftheDragon from "./movies/HouseoftheDragon.jsx";
import GameofThrones from "./movies/GameofThrones.jsx";
import IntotheBadlands from "./movies/IntotheBadlands.jsx";
import TheWitcher from "./movies/TheWitcher.jsx";
import Heroes from "./movies/Heroes.jsx";
import Avatar from "./movies/Avatar.jsx";
import HouseofCards from "./movies/HouseofCards.jsx";
import MoneyHeist from "./movies/MoneyHeist.jsx";

// Cartoon
import TheMagician from "./movies/TheMagician.jsx";
import SpiderMan from "./movies/SpiderMan.jsx";
import Rango from "./movies/Rango.jsx";
import TheLorax from "./movies/TheLorax.jsx";
import PussinBoots from "./movies/PussinBoots.jsx";
import MutantNinja from "./movies/MutantNinja.jsx";
import RubyGillman from "./movies/RubyGillman.jsx";
import Mavka from "./movies/Mavka.jsx";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="/Cartoon" element={<Cartoon />} />

          {/* Movie Routes */}
          <Route path="/Barbie" element={<Barbie />} />
          <Route path="/Napoleon" element={<Napoleon />} />
          <Route path="/TheEqualizer3" element={<TheEqualizer3 />} />
          <Route path="/Oppenheimer" element={<Oppenheimer />} />
          <Route path="/TheLittleMermaid" element={<TheLittleMermaid />} />
          <Route path="/Ghosted" element={<Ghosted />} />
          <Route path="/TheNunII" element={<TheNunII />} />
          <Route path="/BlueBeetle" element={<BlueBeetle />} />
          <Route path="/BirdBoxBarcelona" element={<BirdBoxBarcelona />} />
          <Route path="/TheMonkeyKing" element={<TheMonkeyKing />} />
          <Route path="/TheyClonedTyrone" element={<TheyClonedTyrone />} />
          <Route path="/CreedIII" element={<CreedIII />} />
          <Route path="/GangsofLagos" element={<GangsofLagos />} />
          <Route path="/Brotherhood" element={<Brotherhood />} />
          <Route path="/IleOwo" element={<IleOwo />} />
          <Route
            path="/HappinessforBeginners"
            element={<HappinessforBeginners />}
          />
          <Route path="/LutherTheFallenSun" element={<LutherTheFallenSun />} />
          <Route path="/TheInvitation" element={<TheInvitation />} />
          <Route path="/Medellin" element={<Medellin />} />
          <Route path="/Asterix" element={<Asterix />} />
          <Route path="/TheMother" element={<TheMother />} />
          <Route path="/Renfield" element={<Renfield />} />
          <Route path="/Chupa" element={<Chupa />} />
          <Route path="/WeHaveaGhost" element={<WeHaveaGhost />} />
          <Route path="/Wonka" element={<Wonka />} />
          <Route path="/IndianaJones" element={<IndianaJones />} />
          <Route path="/Crater" element={<Crater />} />
          <Route
            path="/ShawshankRedemption"
            element={<ShawshankRedemption />}
          />
          <Route path="/MissionImpossible" element={<MissionImpossible />} />
          <Route path="/FlowerMoon" element={<FlowerMoon />} />

          {/* Series */}
          <Route path="/Vikings" element={<Vikings />} />
          <Route path="/HouseoftheDragon" element={<HouseoftheDragon />} />
          <Route path="/GameofThrones" element={<GameofThrones />} />
          <Route path="/IntotheBadlands" element={<IntotheBadlands />} />
          <Route path="/TheWitcher" element={<TheWitcher />} />
          <Route path="/Heroes" element={<Heroes />} />
          <Route path="/Avatar" element={<Avatar />} />
          <Route path="/HouseofCards" element={<HouseofCards />} />
          <Route path="/MoneyHeist" element={<MoneyHeist />} />

          {/* Cartoon */}
          <Route path="/TheMagician" element={<TheMagician />} />
          <Route path="/SpiderMan" element={<SpiderMan />} />
          <Route path="/Rango" element={<Rango />} />
          <Route path="/TheLorax" element={<TheLorax />} />
          <Route path="/PussinBoots" element={<PussinBoots />} />
          <Route path="/MutantNinja" element={<MutantNinja />} />
          <Route path="/RubyGillman" element={<RubyGillman />} />
          <Route path="/Mavka" element={<Mavka />} />
          {/* <Route path="/redirect" element={<Navigate to="/about"  />} /> */}

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
