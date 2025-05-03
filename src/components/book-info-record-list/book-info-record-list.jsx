import React from "react";
import PropTypes from "prop-types";
import "./book-info-record-list.css";
import BookInfoRecordComponent from "../book-info-record/book-info-record";






const BooksInfoRecordList = ({ books }) => {
  console.log("books in booksinforecordlist", books)
  function BookItem(props) {
    console.log("props in booksinforecordlist", props)
    return <BookInfoRecordComponent book={props.book} ></BookInfoRecordComponent>
  }
  return (
    <>
    
    <div className="books-gird" key={books.id}>
        <div className="table-header">
          <label className="label-book">Book</label>
          <label className="label-book-name">Book Name</label>
          <label className="label-category">Category</label>
          <label className="label-author">Author</label>
          <label className="label-difficulty-level">Difficulty Level</label>
          <label className="label-published-on">Published On</label>
        </div>
        {books &&
            books.map((book) =>
              <BookItem key={book.id.toString()} book={book}></BookItem>
             )
        }
        </div></>
  )
    };

BooksInfoRecordList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksInfoRecordList;
