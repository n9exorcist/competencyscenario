import React from 'react';
import './books-container.css';
import BookFilterComponent from '../book-filter/book-filter';
import ResultLabel from '../result-label/result-label';
import BooksPage from '../book-info-record-list/books-page';
import BookSort from '../book-sort/book-sort';
import BookSearch from '../book-search/book-search';


const BooksContainer = () => {
     return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {/* books content header  */}
                        <section className="books-container-header" id="books-container-header">
                            <h3>
                                <span>Books</span>
                                <span className="books-container-header-seprator">|</span>
                                <span>Internet &amp; Web</span>
                            </h3>
                            <section className="sub-header-action-container" id="sub-header-action-container">
                                <BookSearch></BookSearch>
                                <BookFilterComponent></BookFilterComponent>
                                <BookSort></BookSort>
                            </section>

                            <ResultLabel></ResultLabel>

                        </section>
                        {/* books content header  */}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <BooksPage></BooksPage>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BooksContainer;