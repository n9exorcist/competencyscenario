import React from "react";
import './global-footer.css';

const GlobalFooter = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div style={{
          "position": "relative",
          "height": "auto", "overflow": "hidden",

        }}>
          { /*footer link section   */}
          <section id="footer-navigation-item-I">
            <p>Format</p>
            <ul>
              <li>
                <a href="# ">Audio Books</a>
              </li>
              <li>
                <a href="# ">Kindle E Books</a>
              </li>
              <li>
                <a href="# ">Bound</a>
              </li>
              <li>
                <a href="# ">Printed Access Code</a>
              </li>
            </ul>
          </section>
          { /* .footer link section   */}
          { /* footer link section   */}
          <section id="footer-navigation-item-II">
            <p>Foregin Languages</p>
            <ul>
              <li>
                <a href="# ">German</a>
              </li>
              <li>
                <a href="# ">Italian</a>
              </li>
              <li>
                <a href="# ">Japanese</a>
              </li>
              <li>
                <a href="# ">French</a>
              </li>
            </ul>
          </section>
          { /*/footer link section   */}
          { /*copyright text section   */}
          <section className="copyright-text-container" id="copyright-text-container">
            <a className="page-logo" href="# ">
              <img src=".../../assets/logo.png" alt="logo" />&nbsp;&nbsp;BooksMark</a>
            <p className="copyright-text">Terms of Use &amp; Data Privacy Notice Feedback and Support
              <br />&copy;2017 BooksMark. All Rights Reserved.</p>
          </section>
          { /*/.copyright text section   */}
        </div>
      </div >
    </footer >
  );
};

export default GlobalFooter;
