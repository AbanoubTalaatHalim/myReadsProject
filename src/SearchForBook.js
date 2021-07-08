import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListOfBooks from "./ListOfBooks";

class SearchForBooks extends Component {
  state = {
    query: "",
    likeBooks: [],
  };

  fetchLikeBooks = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query).then((likeBooks) => {
        if (likeBooks.error) {
          this.setState({ likeBooks: [] });
        } else {
          this.setState({ likeBooks: likeBooks });
        }
      });
    } else {
      this.setState({ likeBooks: [] });
    }
  };

  updateQuery = (query) => {
    let trimQuery = query.trim();
    this.setState({
      query: trimQuery,
    });

    this.fetchLikeBooks(query);
  };
  render() {
    const { query } = this.state;

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              {" "}
              Close{" "}
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div></div>

          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.likeBooks.map((likeBook) => {
                let section = "none";

                this.props.books.forEach((book) => {
                  if (book.id !== likeBook.id) {
                    likeBook.section = "none";
                  } else {
                    section = book.section;
                  }
                });

                return (
                  <ListOfBooks
                    key={likeBook.id}
                    book={likeBook}
                    updateSection={this.props.updateSection}
                    currentSection={section}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchForBooks;

SearchForBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateSection: PropTypes.func.isRequired,
};
