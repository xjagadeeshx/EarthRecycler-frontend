/* eslint-disable react/prop-types */
import React from 'react';

const FlexRowContainer = ({ children, style }) => {
  const flexStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...style,
  };

  return <div style={flexStyle}>{children}</div>;
};

const FlexColumnContainer = ({ children, style }) => {
  const flexStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...style,
  };

  return <div style={flexStyle}>{children}</div>;
};

export { FlexRowContainer, FlexColumnContainer };
export default FlexRowContainer;
