import React from 'react';
import PropTypes from 'prop-types';

const CardImg = ({ item }) => {
  return (
    <div className="image">
      <img src={item.img} alt={item.title} />
    </div>
  );
};

CardImg.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default CardImg;
