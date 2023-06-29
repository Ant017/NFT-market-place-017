import React from "react";
import "./Filter.css";

export const Filter = ({ style }) => {
  return (
    <div className="filter" style={style}>
      <img className="filter-results" alt="Filter results" src="/static/img/filter-results-button-1.svg" />
      <a href="#" className="all-filters">All Filters</a>
    </div>
  );
};