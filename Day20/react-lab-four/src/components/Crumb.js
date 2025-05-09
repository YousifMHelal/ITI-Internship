import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Crumb = () => {
  const location = useLocation();
  let current = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      current += `${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <NavLink to={current}>{crumb}</NavLink>
        </div>
      );
    });

  return (
    <div className="container">
      <div className="crumb">{crumbs}</div>
    </div>
  );
};

export default Crumb;
