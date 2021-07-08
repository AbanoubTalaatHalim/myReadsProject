import React from "react";
import "./App.css";

export default function NotFound() {
  return (
    <div className="all">
      <h1 className="display-4">
        <span className="notFound">404</span> Page Not Found
      </h1>
      <br />
      <p className="lead">Sorry, that page does not exist</p>
      <a className="btn btn-secondary btn-block" href="/">
        Go To Home Page
      </a>
    </div>
  );
}
