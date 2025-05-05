import React from "react";
import "./star-rating.css";

const StarRating = ({ rating }) => {
  let ratingPercent = 0;
  ratingPercent = (rating / 5) * 100;

  return (
    <>
      <div className="star-rating-container">
        <div
          className="stars-highlighter"
          style={{ width: `${ratingPercent}%` }}
        ></div>
        <img src="/assets/star-transparent.png" alt="star" />
        <img src="/assets/star-transparent.png" alt="star" />
        <img src="/assets/star-transparent.png" alt="star" />
        <img src="/assets/star-transparent.png" alt="star" />
        <img src="/assets/star-transparent.png" alt="star" />
      </div>
    </>
  );
};

export default StarRating;
