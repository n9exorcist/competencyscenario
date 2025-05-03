import React from 'react';
import './favorite-badge.css';
class FavoriteBadge extends React.Component {
    render() {
        return <>
            <img src='/assets/favorites-white.png' alt="favorite" />
            {/* <label className="cart-notificaton-count">0</label> */}
        </>;
    }
}

export default FavoriteBadge;