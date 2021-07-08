import React, { Component } from "react";
import PropTypes from "prop-types";
import ViewBooks from "./ViewBooks";

class SectionOfBook extends Component {
  state = {
    books_Sections: [
      {
        title: "Currently Reading",
        section: "currentlyReading",
      },
      {
        title: "Want To Read",
        section: "wantToRead",
      },
      {
        title: "Read",
        section: "read",
      },
    ],
  };
  static proptypes = {
    books: PropTypes.array.isRequired,
    updateSection: PropTypes.func.isRequired,
  };
  render() {
    const { books } = this.props;
    return (
      <div>
        {this.state.books_Sections.map((section) => (
          <ViewBooks
            key={section.section}
            books={books}
            shelf={section.section}
            title={section.title}
            updateSection={this.props.updateSection}
          />
        ))}
      </div>
    );
  }
}

export default SectionOfBook;
