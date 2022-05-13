import "./App.scss";

import cardDeck from "./data/cardDeck";
import albums from "./data/albums";

import Card from "./components/Card/Card";
import Album from "./components/Album/Album";

const App = () => {
  // MAP WILL GIVE YOU A NEW ARRAY
  // - WE WANT A NEW ARRAY OF JSX ELEMENTS / COMPONENTS

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

  // IMGURL IS EACH ONE OF THE STRINGS IN OUR IMAGES ARRAY
  const imgsJSX = images.map((imgURL, index) => {
    return <img key={imgURL + index} src={imgURL} alt="beatles" />;
  });

  // CHALLENGE
  // - MAKE <P/> TAGS WITH TEAM NAMES
  // <p>Blanche</p> etc...
  const names = ["Charlie", "Blanche", "Moni", "Soudeh", "Elham", "Maryna", "Jacintha", "Daniela"];

  // NAME IS EACH ONE OF THE STRINGS IN OUR NAMES ARRAY
  const namesJSX = names.map((name, index) => {
    const greeting = `Hello my name is ${name}`;
    return <p key={name + index}>{greeting}</p>;
  });

  // CARD IS EACH ONE OF THE CARD OBJECTS IN OUR CARD DECK ARRAY
  const cardsJSX = cardDeck.map((card, index) => {
    return <Card suit={card.suit} value={card.value} charCode={card.charCode} />;
  });

  // ALBUM IS EACH ONE OF THE ALBUM OBJECTS IN OUR ALBUMS ARRAY 
  const albumsJSX = albums.map((album, index) => {
    return <Album key={album.title + index} title={album.title} imgURL={album.imgURL} />;
  });

  return (
    <div>
      <section className="grid">{imgsJSX}</section>
      <section className="grid">{namesJSX}</section>
      <section className="grid">{albumsJSX}</section>
      <section className="grid">{cardsJSX}</section>
    </div>
  );
};

export default App;
