// notification-modal.jsx
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "../progress-bar/progress-bar";
import StarRating from "../star-rating/star-rating";
import "./notification-modal.css";
import { useMemo } from "react";

const NotificationModal = ({ show, onHide, book, onSubmitRating }) => {
  const [ratingValue, setRatingValue] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStarClick = (value) => {
    setRatingValue(value);
  };

  const handleSubmit = () => {
    if (!ratingValue) return alert("Please select a rating.");
    setLoading(true);

    // Simulate delay
    setTimeout(() => {
      const newReview = {
        id: Date.now(), // unique ID
        user: "Anonymous",
        date: new Date().toISOString(),
        rating: ratingValue,
        comment,
      };
      onSubmitRating(book.id, newReview); // Notify parent component
      setLoading(false);
      setRatingValue(0);
      setComment("");
      onHide(); // Close modal
    }, 1000);
  };

  // Calculate average rating and distribution
  const calculateRatingsStats = (reviews) => {
    console.log("reviews", reviews);
    const total = reviews.length;
    // const counts = [0, 0, 0, 0, 0]; // index 0 is 1-star, index 4 is 5-star
    const counts = Array(5).fill(0);
    let sum = 0;

    for (const { rating } of reviews) {
      if (rating >= 1 && rating <= 5) {
        counts[rating - 1]++;
        // This line updates the count of how many times each star rating (1 to 5) appears.
        sum += rating;
      }
    }

    // Shortcut of above code
    // for (const review of reviews) {
    //   const rating = review.rating;
    // }

    const average = total ? (sum / total).toFixed(1) : 0;

    const distribution = counts.map((count, index) => ({
      stars: index + 1,
      percent: total ? ((count / total) * 100).toFixed(1) : 0,
    }));

    const recentReviews = [...reviews]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2);

    return { average, distribution, recentReviews };
  };

  const { average, distribution, recentReviews } = useMemo(() => {
    return calculateRatingsStats(book.reviews || []);
  }, [book.reviews]);

  return (
    <Modal show={show} onHide={onHide} size="xl" centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{book?.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Rating Summary */}
        <div className="rating-n-star-container row mb-4">
          <div className="col-3 text-center">
            <h4>{average}</h4>
            <StarRating rating={average} />
            <p>{book.reviews?.length || 0} ratings</p>
          </div>
          <div className="col-9">
            {distribution.map((item, index) => (
              <ProgressBar
                key={index} // Using `index` as the key is not ideal
                percentage={item.percent}
                label={`${item.stars} Star`}
              />
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <section className="top-custoer-reviews mb-4">
          <h5>Top Customer Reviews</h5>
          {recentReviews.length > 0 ? (
            recentReviews.map((review, index) => (
              <div
                key={`${review.id || index}-${review.date}`}
                className="review-block mb-3"
              >
                <img
                  className="user mr-3 w-25"
                  src="/assets/user-new.png"
                  alt="user"
                />
                <div className="about-reviewer-block d-inline-block">
                  <strong>{review.user}</strong>
                  <small> • {new Date(review.date).toLocaleDateString()}</small>
                </div>
                <div className="customer-rating-container mt-2">
                  <StarRating rating={review.rating} />
                  <span>{review.rating} stars</span>
                </div>
                <p className="mt-1">{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </section>

        {/* Submit Rating Section */}
        <div className="submit-rating mt-4">
          <h5>Rate this book</h5>
          <select
            className="form-control w-25 mb-2"
            value={ratingValue}
            onChange={(e) => handleStarClick(Number(e.target.value))}
          >
            <option value="0">Select Rating</option>
            {[1, 2, 3, 4, 5].map((val) => (
              <option key={val} value={val}>
                {val} stars
              </option>
            ))}
          </select>
          <StarRating rating={ratingValue} />
          <textarea
            className="form-control mt-2"
            rows="3"
            placeholder="Leave a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="btn btn-primary mt-2"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm mr-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Submitting...
              </>
            ) : (
              "Submit Rating"
            )}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationModal;
