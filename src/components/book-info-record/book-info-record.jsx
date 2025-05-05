import React, { useState } from "react";
import "./book-info-record.css";
import StarRating from "../star-rating/star-rating";
import moment from "moment";
import NotificationModal from "../notification-modal/notification-modal";
import { connect } from "react-redux";
import * as BooksActions from "../../redux/actions/booksActions";

// 2. Integrate the Popup in book-info-record.jsx
// Update the BookInfoRecord component to trigger the popup when the star rating or "ratings" link is clicked.
const BookInfoRecord = ({ book, updateBookRating }) => {
  const [showModal, setShowModal] = useState(false);

  const handleNewRating = (bookId, newRating) => {
    updateBookRating(bookId, newRating);
  };

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

            <div className="row review-rating">
              <div className="col-sm-6">
                <StarRating rating="3.5"></StarRating>
                <span>&nbsp; 3.5&nbsp;/&nbsp; 10&nbsp;ratings</span>
              </div>
              <div className="col-sm-6">
                <a href="# " onClick={() => setShowModal(true)}>
                  <img src="./assets/Comments.png" alt="comments" />
                  &nbsp; {book.reviews?.length || 0} customer reviews
                </a>
              </div>
            </div>

            {/* Enhanced Modal */}
            <NotificationModal
              show={showModal}
              onHide={() => setShowModal(false)}
              book={book}
              onSubmitRating={handleNewRating}
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
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateBookRating: (bookId, newRating) =>
    dispatch(BooksActions.updateBookRating(bookId, newRating)),
});

export default connect(null, mapDispatchToProps)(BookInfoRecord);
