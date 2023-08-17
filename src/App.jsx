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
          {/* <Route path="/redirect" element={<Navigate to="/about"  />} /> */}

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
