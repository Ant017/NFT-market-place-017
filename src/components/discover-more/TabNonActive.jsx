import PropTypes from "prop-types";
import React from "react";
import "./TabNonActive.css";

export const TabNonActive = ({ text = "Art" }) => {
  return (
    <a href="#" className="tab-non-active">{text}</a>
  );
};

TabNonActive.propTypes = {
  text: PropTypes.string,
};
