import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Good,
  Neutral,
  Bad,
  Total,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <List>
        <Good>Good:{good}</Good>
        <Neutral>Neutral:{neutral}</Neutral>
        <Bad>Bad:{bad}</Bad>
      </List>
      <Total>Total:{total}</Total>
      <Percentage>Positive Feedback:{percentage}%</Percentage>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
