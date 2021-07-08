import React from "react";
import "./App.css";
import SectionOfBook from "./SectionOfBook";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MainPage(props) {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      </div>
      <SectionOfBook books={props.books} updateSection={props.updateSection} />
      <div className="open-search">
        <Link to="/Search">Add a book</Link>
      </div>
    </div>
  );
}

export default MainPage;

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateSection: PropTypes.func.isRequired,
};
