import React from 'react';
import PropTypes from 'prop-types';

function Card (props) {
  return (
    <div className="bg-light-green dib pa3 ma2 tc br3 grow">
      <img
        alt=""
        role="presentation"
        src={`//robohash.org/${props.id}?size=200x200`}
      />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default Card;
