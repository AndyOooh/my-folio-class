import React from 'react';

import classes from './CoinsTableTitlebar.module.css';

const CoinsTableTitlebar = () => {
  const titles = [
    'Rank',
    'Name',
    'Market Cap',
    'Price',
    'Volume (24k)',
    'Circulating Supply',
    'Change (24h)',
    'Price Graph (7d)',
  ];

  const pTitles = titles.map((title, index) => {
    const classNames = [`${classes.item}`];
    // Below: error: 'expected assignment or func call instead saw expression'
    // index === 0 || 1 || 7 ? null : classNames.push(`${classes.test}`); 
    const justifyEnd = (index === 0 || index === 1 || index === 7) ? null : `${classes.justifyEnd}`;
    // Below: attempt at refactor not working 
    // const justifyEnd = index === (0 || 1 || 6) ? null : `${classes.justifyEnd}`;  
    classNames.push(justifyEnd);

    return (
      <p className={classNames.join(' ')} key={title}>
        {title}
      </p>
    );
  });
  return <>{pTitles}</>;
};

export default CoinsTableTitlebar;
