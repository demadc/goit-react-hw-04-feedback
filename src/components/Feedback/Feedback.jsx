import PropTypes from 'prop-types';
import { Wrapper, List, Btn } from './Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      <List>
        {options.map((option, index) => (
          <Btn key={index} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Btn>
        ))}
      </List>
    </Wrapper>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
