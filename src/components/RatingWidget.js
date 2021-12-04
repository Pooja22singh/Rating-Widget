import { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RatingWidget = ({ settings }) => {
  const { count } = settings;
  const [rating, setRating] = useState(-1);

  const reviewLabels = { 
    "4": "Very Satisfied",
    "3": "Satisfied",
    "2": "Neutral",
    "1": "Dissatisfied",
    "0": "Very Dissatisfied",
}
  const handleClick = (event) => {
    const id = event.target.id || event.target.parentNode.id
    if(id && Number(id)<=count && Number(id)>=0)
    setRating(id);
  };

  const renderStars = () => {
    const starArray = [];
    for (let i = 0; i < count; i++) {
      starArray.push(
        <FontAwesomeIcon
          key={i}
          id={i}
          icon={i <= rating ? faStar : faStarOutline}
          className="rate"
          onMouseOver={(e) => handleClick(e)}
          onClick={(e) => handleClick(e)}
        />
      );
    }
    return starArray;
  };
  return <div className="starContainer">
    <div>{renderStars()}</div>
    <span>{reviewLabels[rating]}</span>
    <button onClick={(e)=>setRating(-1)}> Clear </button>
    </div>;
};
