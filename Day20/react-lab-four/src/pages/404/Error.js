import React from "react";
import "../404/style.css";
import { Link, useRouteError } from "react-router-dom";

const NotFound = (err) => {
  const error = useRouteError();
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404"></div>
        <h1>Error</h1>
        <h2>There might be somethig wrong</h2>
        {err ? <p>{err.err}</p> : <p>{error.message}</p>}
        <Link to="/">Back to homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
