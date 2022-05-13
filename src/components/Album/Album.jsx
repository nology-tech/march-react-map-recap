import React from "react";

const Album = props => {
  const { title, imgURL } = props;
  return (
    <div>
      <img src={imgURL} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Album;
