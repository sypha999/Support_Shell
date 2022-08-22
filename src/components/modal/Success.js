import React from 'react';
import successgif from '../../assets/successful.gif';
import { Middle, Tab } from '../../utils/common';

export default function Success() {
  return (
    <Middle>
      <Tab>
        <img
          src={successgif}
          alt=""
          style={{ maxWidth: '100%', height: 'Auto' }}
          width={450}
        />
        <p> Successful </p>
      </Tab>
    </Middle>
  );
}
