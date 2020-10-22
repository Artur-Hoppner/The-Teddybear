import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and goes into retirement in about {65 - props.age}{' '}
        Years.
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
