import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./notification-modal.css";
import ProgressBar from "../progress-bar/progress-bar";
import StarRating from "../star-rating/star-rating";

// To implement the required features for the BooksMark portal, here’s a step-by-step breakdown of how to achieve the objectives and key requirements:

// 1. Update notification-modal.jsx for the Ratings Popup
// The notification-modal.jsx file will serve as the base for the book ratings popup. Modify it to include the following features:

// Display the average star rating.
// Show percentage star ratings using progress bars.
// Display the top 2 customer ratings.
// Allow users to submit a new rating.
// Here’s an updated version of notification-modal.jsx:

const NotificationModal = ({ show, onClose, book }) => {
  const [averageRating, setAverageRating] = React.useState(0);
  const [percentageRatings, setPercentageRatings] = React.useState([]);
  const [topRatings, setTopRatings] = React.useState([]);
  const [newRating, setNewRating] = React.useState({ stars: 0, comment: "" });
  useEffect(() => {
    if (book && book.ratings) {
      calculateRatings(book.ratings);
    }
  }, [book]);

  const calculateRatings = (ratings) => {
    const totalRatings = ratings.length;
    const ratingCounts = [0, 0, 0, 0, 0];

    ratings.forEach((rating) => {
      ratingCounts[rating.rating - 1]++;
    });

    const avgRating =
      ratings.reduce((sum, rating) => sum + rating.rating, 0) / totalRatings;

    const percentages = ratingCounts.map(
      (count) => (count / totalRatings) * 100
    );

    setAverageRating(avgRating.toFixed(1));
    setPercentageRatings(percentages);
    setTopRatings(
      ratings.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2)
    );
  };

  const handleRatingChange = (e) => {
    setNewRating({ ...newRating, stars: parseInt(e.target.value, 10) });
  };

  const handleCommentChange = (e) => {
    setNewRating({ ...newRating, comment: e.target.value });
  };

  const handleSubmit = () => {
    const updatedRatings = [
      ...book.ratings,
      {
        username: "Anonymous",
        date: new Date().toISOString(),
        rating: newRating.stars,
        comment: newRating.comment,
      },
    ];
    calculateRatings(updatedRatings);
    setNewRating({ stars: 0, comment: "" });
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} backdrop="static" size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{book.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="rating-summary">
          <h4>Average Rating: {averageRating}</h4>
          <StarRating rating={averageRating} />
          <div className="percentage-ratings">
            {percentageRatings.map((percent, index) => (
              <ProgressBar
                key={index}
                percentage={percent}
                label={`${5 - index} Stars`}
              />
            ))}
          </div>
        </div>
        <div className="top-ratings">
          <h5>Top Customer Ratings</h5>
          {topRatings.map((rating, index) => (
            <div key={index} className="rating-record">
              <StarRating rating={rating.rating} />
              <p>{rating.comment}</p>
              <small>{new Date(rating.date).toLocaleString()}</small>
            </div>
          ))}
        </div>
        <div className="new-rating">
          <h5>Rate this Book</h5>
          <select
            value={newRating.stars}
            onChange={handleRatingChange}
            className="select-rating"
          >
            <option value="0">Select Rating</option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star}
              </option>
            ))}
          </select>
          <textarea
            value={newRating.comment}
            onChange={handleCommentChange}
            placeholder="Leave a comment"
          />
          <button onClick={handleSubmit} className="btn-submit">
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationModal;
