import React from 'react';

import classes from './CoinsTableRow.module.css';

const CoinsTableRow = props => {
  const columns = [
    'rank',
    // 'logo',
    'name',
    'marketCap',
    'price',
    'volume',
    'circSupply',
    'Change24',
    'graph',
  ];
  let id = 0;
  const coinsTableRows = columns.map((p, i) => {
    const classNames = [`${classes.item}`, `${classes[p]}`];
    const justifyEnd = i === 0 || i === 1 || i === 7 ? null : `${classes.justifyEnd}`;
    classNames.push(justifyEnd);
    id += 1;
    return (
      <p key={id} className={classNames.join(' ')}>
        {props[p]}
      </p>
    );
  });
  return <>{coinsTableRows}</>;
};

export default CoinsTableRow;
