import React from 'react';
import PropTypes from 'prop-types';

const CalcButton = (props) => {
  const { className, children, onClick } = props;
  const extraClass = className || '';
  return (
    <button className={`calc-btn ${extraClass}`} onClick={() => onClick(children)}>{children}</button>
  );
};

CalcButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CalcButton;
