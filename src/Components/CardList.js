import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardList = (props) => (
  <div>
    {
      props.robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id.toString()}
          name={robot.name}
          email={robot.email}
        />
      ))
    }
  </div>
);

CardList.propTypes = {
    robots: PropTypes.array.isRequired
};

export default CardList;
