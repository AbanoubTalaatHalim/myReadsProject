import React from "react";
import PropTypes from "prop-types";
import ListOfBooks from "./ListOfBooks";

function ViewBooks(props) {
  const { books, title, section } = props;
  return (
    <div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.section === section)
                  .map((book) => (
                    <ListOfBooks
                      key={book.id}
                      book={book}
                      currentSection={section}
                      updateSection={props.updateSection}
                    />
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBooks;

ViewBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateSection: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
