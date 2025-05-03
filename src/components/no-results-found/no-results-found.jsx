import React from 'react';
import './no-results-found.css';

const NoResultsFound = () => {
    return (
        <>
            <div class="no-results-found-container">
                <img src="/assets/no-results-found.png" alt="no results found" />
                <span>No results found!</span>
                <span>Search again with another keyword.</span>
            </div>
        </>
    )
}

export default NoResultsFound;