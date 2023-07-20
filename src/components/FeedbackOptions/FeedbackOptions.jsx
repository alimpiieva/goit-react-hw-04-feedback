import React, { useCallback } from "react";
import { FeedbackButton, ButtonContainer } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleFeedback = useCallback(
    (option) => {
      onLeaveFeedback(option);
    },
    [onLeaveFeedback]
  );

  return (
    <ButtonContainer>
      {options.map((option) => (
        <FeedbackButton key={option} onClick={() => handleFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </FeedbackButton>
      ))}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
