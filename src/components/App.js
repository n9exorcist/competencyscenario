import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalHeader from "./global-header/global-header";
import GlobalFooter from "./global-footer/global-footer";
import NewRelease from "./new-release/new-release";
import BooksContainer from "./books-container/books-container";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <GlobalHeader />

      <Routes>
        <Route path="/" element={<NewRelease />} />
        <Route path="/about" element={<BooksContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ToastContainer autoClose={3000} hideProgressBar />
      <GlobalFooter />
    </div>
  );
}

export default App;
