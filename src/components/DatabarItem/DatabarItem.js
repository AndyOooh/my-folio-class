import React from 'react';

import classes from './DatabarItem.module.css';

const DatabarItem = props => {
  return (
    <p className={classes.titem}>
      {props.name}: {props.value}
    </p>
  );
};

export default DatabarItem;
