import Mission from "./components/Mission";
import quote from "./assets/quote.jpg";

function App() {
  return (
    <Mission
      title="Mission"
      message="Pursue oppurtunities with efficient work ethic and determination within the realms of software development, and then some. With this in mind, I continue to pursue objectives that amplify my development skills and interests hand in hand."
      image={quote}
      altImage="Gurren Lagann mecha engulfed in a flame with text behind reading 'Go beyond the impossible and kick reason to the curb! Whether its impossible or laughable. This is the path that all great men walk! If there's a wall in our way we'l break it down! If there's no path, We --- it with these hands! The magma in our hearts is blazing like flames! Everlasting combustion! Gurren Lagann! Who the hell do you think we are?! Believe in yourself. Not you, who believes in me not me who believes in you. Believe in you, who believes in yourself! Tegen Toppa Gurren Lagann. Isn't your drill the one that will pierce the heavens, the earth and through to tomorrow?'"
    />
  );
}

export default App;
