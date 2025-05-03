import React from 'react';
import './book-sort.css';

const BookSort = ({ percentage, label }) => {
    return (
        <>
            <a href="/# " onClick={e => e.preventDefault()}>
                <img src="/assets/sorting.png" alt="sort" />
            </a>
            { /*
            <section className="sort-container" id="sort-container">
                <ul>
                    <li>
                        <input type="radio" name="sorting" id="option1" />
                        <label for="Cateogry">option1</label>
                    </li>
                    <li>
                        <input type="radio" name="sorting" id="option2" />
                        <label for="option2">option2</label>
                    </li>
                    <li>
                        <input type="radio" name="sorting" id="option3" />
                        <label for="option3">option3</label>
                    </li>
                </ul>
            </section>
            */ }
        </>
    )
}

export default BookSort;