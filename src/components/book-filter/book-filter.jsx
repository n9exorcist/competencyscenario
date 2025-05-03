import React from "react";
import './book-filter.css';

class BookFilter extends React.Component {
    render() {
        return <>
            <a href="# " onClick={e => e.preventDefault()}>
                <img src="/assets/filter.png" alt="filter"/>
            </a>

            <section className="sort-container" id="sort-container" style={{ display: "none"}}>
                <ul>
                    <li>
                        <input type="checkbox" name="sorting" id="option1" />
                        <label htmlFor="category">option1</label>
                    </li>
                    <li>
                        <input type="checkbox" name="sorting" id="option2" />
                        <label htmlFor="option2">option2</label>
                    </li>
                    <li>
                        <input type="checkbox" name="sorting" id="option3" />
                        <label htmlFor="option3">option3</label>
                    </li>
                    <li>
                        <input type="checkbox" name="sorting" id="option4" />
                        <label htmlFor="option4">option4</label>
                    </li>
                    <li>
                        <input type="checkbox" name="sorting" id="option5" />
                        <label htmlFor="option5">option5</label>
                    </li>
                    <li>
                        <input type="checkbox" name="sorting" id="option6" />
                        <label htmlFor="option6">option6</label>
                    </li>
                </ul>
            </section>

        </>;
    }
}

export default BookFilter;