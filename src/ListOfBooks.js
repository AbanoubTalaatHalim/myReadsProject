import React, { Component } from "react";
import PropTypes from "prop-types";

class ListOfBooks extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    section: "",
  };

  handleChange(event) {
    this.setState({ section: event.target.value });
    this.props.updateSection(this.props.book, event.target.value);
  }

  render() {
    const { book, currentSection } = this.props;
    return (
      <div>
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${
                    book.imageLinks && book.imageLinks.smallThumbnail
                  })`,
                }}
              ></div>

              <div className="book-shelf-changer">
                <select value={currentSection} onChange={this.handleChange}>
                  <option value="move" disabled>
                    {" "}
                    Move to...{" "}
                  </option>
                  <option value="none">None</option>
                  <option value="read">Read</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="currentlyReading">Currently Reading</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
      </div>
    );
  }
}

export default ListOfBooks;

ListOfBooks.propTypes = {
  book: PropTypes.object.isRequired,
  updateSection: PropTypes.func.isRequired,
};
