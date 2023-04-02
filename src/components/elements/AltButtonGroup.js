import React from 'react';
import classNames from 'classnames';

const AltButtonGroup = ({
  className,
  ...props
}) => {

  const classes = classNames(
    // 'button-group',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    />
  );
}

export default AltButtonGroup;