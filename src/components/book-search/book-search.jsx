import React from 'react';
import './book-search.css';

const BookSearch = ({ percentage, label }) => {
    return (
        <>
            <a href="# " onClick={e => e.preventDefault()}>
                <img src="/assets/search.png" alt="search" />
            </a>
            { /*
            <section className="search-input-container">
                <input type="text" className="search-input-placeholder" />
                <a href="# " className="close">X</a>
            </section> */ }
        </>
    )
}

export default BookSearch;