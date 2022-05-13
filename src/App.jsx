import "./App.scss";

import cardDeck from "./data/cardDeck";

import Card from "./components/Card/Card";
import Album from "./components/Album/Album";

// SIMPLE ARRAY
// DEMO
// - MAKE <IMG SRC={}/> WITH IMAGES
const images = [
  "https://www.theaudiodb.com/images/media/artist/fanart/xrqqqu1541458809.jpg",
  "https://www.theaudiodb.com/images/media/artist/fanart/sssrqr1341917298.jpg",
  "https://www.theaudiodb.com/images/media/artist/fanart/wwvtpp1341917310.jpg",
  "https://www.theaudiodb.com/images/media/artist/fanart/b6zl6c1613120079.jpg",
  "https://www.theaudiodb.com/images/media/artist/fanart/xrqqqu1541458809.jpg",
  "https://www.theaudiodb.com/images/media/artist/fanart/sssrqr1341917298.jpg",
];

// CHALLENGE
// - MAKE <P/> TAGS WITH TEAM NAMES
const team = ["Blanche", "Moni", "Soudeh", "Elham", "Maryna", "Jacintha", "Daniela"];

// ARRAY OF OBJECTS


const App = () => {
  return (
    <div>
      <section className="grid">{}</section>
      <section className="grid">{}</section>
      <section className="grid">{}</section>
    </div>
  );
};

export default App;
