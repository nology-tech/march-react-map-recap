import "./Card.scss";

const Card = props => {
  // OBJECT DESTRUCTURING
  const { suit, value, charCode } = props
  // GETTING THE SYMBOL
  const cardSymbol = String.fromCharCode(charCode);

  // TEMPORARY VARIABLE FOR STYLES
  let cardStyles = "card";

  // CONDTIONAL RENDERING ADDING RED OR BLACK STYLES
  if (suit === "spades" || suit === "clubs") {
    cardStyles += " card--black";
  } else {
    cardStyles += " card--red";
  }

  return (
    <div className={cardStyles}>
      <p className="card__top">{cardSymbol}</p>
      <p>{value}</p>
      <p className="card__bottom">{cardSymbol}</p>
    </div>
  );
};

export default Card;
