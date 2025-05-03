import React from 'react';
import './star-rating.css';

const StarRating = ({ rating }) => {
    console.log("rayting in star rating", rating)
    let ratingPercent = 0;
    ratingPercent = rating / 5 * 100;
    console.log("ratingPercent" , ratingPercent);

    return (
        <>
            <div className="star-rating-container">
                <div className="stars-highlighter" style={{ width: `${ratingPercent}%`, }}></div>
                <img src="/assets/star-transparent.png" alt="star" />
                <img src="/assets/star-transparent.png" alt="star"/>
                <img src="/assets/star-transparent.png" alt="star"/>
                <img src="/assets/star-transparent.png" alt="star"/>
                <img src="/assets/star-transparent.png" alt="star"/>
            </div>
        </>
    )
}

export default StarRating;