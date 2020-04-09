import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  const { title, text } = props;
  return (
    <div
      className="ui card"
      style={({ width: `${15}rem` }, { marginBottom: `${70}px` })}
    >
      {props.children}
      <div className="card-body">
        <h2 className="header" style={{ margin: `${20}px` }}>
          {title}
        </h2>
        <div className="description" style={{ margin: `${20}px` }}>
          {text}
        </div>
        <a href="/" className="ui primary button" style={{ margin: `${20}px` }}>
          Go somewhere
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
