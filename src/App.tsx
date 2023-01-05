import Mission from "./components/Mission";
import Portfolio from "./components/Portfolio";

import quote from "./assets/quote.jpg";
import { Fragment } from "react";
import Experiance from "./components/Experiance";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Mission
        title="Mission"
        message="Pursue oppurtunities that amplify my development skills and interests hand in hand while satisfying my desire for achievement in everything I pursue. Once I set my mind to it, consider it done."
        image={quote}
        altImage="Gurren Lagann mecha engulfed in a flame with text behind reading 'Go beyond the impossible and kick reason to the curb! Whether its impossible or laughable. This is the path that all great men walk! If there's a wall in our way we'l break it down! If there's no path, We --- it with these hands! The magma in our hearts is blazing like flames! Everlasting combustion! Gurren Lagann! Who the hell do you think we are?! Believe in yourself. Not you, who believes in me not me who believes in you. Believe in you, who believes in yourself! Tegen Toppa Gurren Lagann. Isn't your drill the one that will pierce the heavens, the earth and through to tomorrow?'"
      />
      <Portfolio />
      <Experiance />
    </Fragment>
  );
}

export default App;
