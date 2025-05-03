import React from "react";
import { Link } from "react-router-dom";
import "./global-header.css";
import CartBadge from "../cart-badge/cart-badge";
import FavoriteBadge from "../favorite-badge/favorite-badge";

const GlobalHeader = () => {
    return (
        <nav className="d-block clearfix" id="navigation">
            <div className="container">
                <div className="clearfix" id="navigation-item">
                    <ul className="float-left nav-item-left">
                        <li className="">
                            <Link to="/bookmark" className="page-logo"> <span className="float-left page-logo"><img src="/assets/logo.png" alt="BooksMark" />BooksMark
                            </span>
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/books"><span className="nav-books-link">Books</span></Link>
                        </li>
                        <li className="">
                            <span className="menu-item" href="# " id="new-releases">New Releases</span>
                        </li>
                        <li className="">
                            <span className="menu-item" href="# " id="best-sellers">Best Sellers</span>
                        </li>

                        <li className="">
                            <span className="menu-item" href="# " id="languages">Languages</span>
                        </li>
                        <li className="">
                            <span className="menu-item" href="# " id="support">Support</span>
                        </li>
                    </ul>
                    <ul className="float-right nav-item-right" id="nav-item-right">
                        <li className="">
                            <a className="" href="# " id="cart">
                                <CartBadge></CartBadge>
                            </a>
                        </li>
                        <li className="">
                            <a className="" href="# ">
                                <FavoriteBadge></FavoriteBadge>
                            </a>
                        </li>
                        <li className="">
                            <a className="user-profile" href="# ">
                                <img src="/assets/user.png" alt="User" />
                                <img src="/assets/dropdown.png" alt="dropdown" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default GlobalHeader;
