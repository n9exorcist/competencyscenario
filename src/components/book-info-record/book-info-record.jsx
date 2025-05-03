import React, { useState } from "react";
import "./book-info-record.css";
import StarRating from "../star-rating/star-rating";
import moment from "moment";
import NotificationModal from "../notification-modal/notification-modal";

// 2. Integrate the Popup in book-info-record.jsx
// Update the BookInfoRecord component to trigger the popup when the star rating or "ratings" link is clicked.
const BookInfoRecord = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  console.log("book in book info record", book);
  return (
    <>
      <div className="each-row book-info" id={book.id} key={book.id}>
        <div className="content-book">
          <div className="books-photo">
            <div>
              <a href="# " onClick={(e) => e.preventDefault()}>
                <img src={book.photo} className="book-image" alt="book" />
              </a>
            </div>
          </div>
        </div>
        <div className="content-book-name">
          <div className="books-content-info-book-record">
            <a href="# " onClick={(e) => e.preventDefault()}>
              {book.name}
            </a>
            <p className="book-name-description">
              {book.description.substr(0, 100) + "..."}
            </p>

            <div className="row review-rating" onClick={handleShowModal}>
              <div className="col-sm-6">
                <StarRating rating="3.5"></StarRating>
                <span>&nbsp; 3.5&nbsp;/&nbsp; 10&nbsp;ratings</span>
              </div>
              <div className="col-sm-6">
                <img src="./assets/Comments.png" alt="comments" />
                &nbsp; {book.reviews.length}&nbsp; customer reviews
              </div>
            </div>

            {/* Enhanced Modal */}
            <NotificationModal
              show={showModal}
              onClose={handleCloseModal}
              book={book}
            />
            <div className="price">&#8377;&nbsp;{book.price}</div>
            <div className="cart-div">
              <a
                className="cart"
                id="cart"
                href="# "
                onClick={(e) => e.preventDefault()}
              >
                <img src="../../assets/cart.png" alt="cart" />
              </a>
              <a
                href="# "
                onClick={(e) => e.preventDefault()}
                className="favourite"
                id="favourite"
              >
                <img src="../../assets/favorites.png" alt="favourites" />
              </a>
              <a
                href="# "
                onClick={(e) => e.preventDefault()}
                className="view-details"
                id="view-details"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="content-category">
          <div className="category-td">{book.categories.join(", ")}</div>
        </div>
        <div className="content-author">
          <div className="author-td">{book.author}</div>
        </div>
        <div className="content-difficulty-level">
          <div className="difficulty-level-td">{book.difficultyLevel}</div>
        </div>
        <div className="content-published-on">
          <div className="published-on-td">
            {moment(book.publishedOn).format("DD MMM YYYY")}
          </div>
        </div>
      </div>
      <NotificationModal
        show={showModal}
        onClose={handleCloseModal}
        book={book}
      />
    </>
  );
};

export default BookInfoRecord;
