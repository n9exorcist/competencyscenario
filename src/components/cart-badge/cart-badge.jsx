import React from 'react';
import './cart-badge.css';
class CartBadge extends React.Component {
    render() {
        return <>
            <img src="/assets/cart-white.png" alt="cart"/>            
            {/* <label className="cart-notificaton-count">0</label> */}
        </>;
    }
}

export default CartBadge;