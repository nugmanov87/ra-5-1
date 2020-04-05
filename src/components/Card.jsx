import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return <div className="ui card">{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Card;
