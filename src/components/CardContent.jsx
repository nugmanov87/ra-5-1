import React from 'react';
import PropTypes from 'prop-types';
import CardBtn from './CardBtn';

const CardContent = ({ item }) => {
  return (
    <div className="content">
      <h2 className="header">{item.title}</h2>
      <div className="description">{item.text}</div>
      <div className="ui divider"></div>
      <CardBtn />
    </div>
  );
};

CardContent.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default CardContent;
