import React from "react";
import { connect } from "react-redux";
import * as BooksActions from "../../redux/actions/booksActions";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BooksInfoRecordList from "./book-info-record-list";
import Spinner from "../spinner/Spinner";

class BooksPage extends React.Component {
  componentDidMount() {
    console.log("this.props", this.props);
    const { books, actions } = this.props;
    console.log("books", books);
    console.log("actions", actions);

    if (books.length === 0) {
      actions.loadBooks().catch((error) => {
        alert("Loading books failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <BooksInfoRecordList books={this.props.books} />
          </>
        )}
      </>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books.length === 0 ? [] : state.books,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBooks: bindActionCreators(BooksActions.loadBooks, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
