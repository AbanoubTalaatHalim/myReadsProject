import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./MainPage";
import PageNotFound from "./PageNotFound";
import SearchForBook from "./SearchForBook";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateSection = this.updateSection.bind(this);
  }

  state = {
    books: [],
  };

  componentDidMount = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ books: books });
    console.log(books);
  };

  updateSection(updatedBook, section) {
    this.setState((currentState) => ({
      books: currentState.books
        .filter((book) => {
          return book.id !== updatedBook.id;
        })
        .concat({ ...updatedBook, section }),
    }));
    BooksAPI.update(updatedBook, section);
  }

  Search = () => {
    return (
      <SearchForBook
        books={this.state.books}
        updateSection={this.updateSection}
      />
    );
  };

  MainPage = () => {
    return (
      <MainPage books={this.state.books} updateSection={this.updateSection} />
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={this.MainPage} />
          <Route exact path="/Search" render={this.Search} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
