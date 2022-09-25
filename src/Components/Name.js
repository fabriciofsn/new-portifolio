import React from 'react';

const Name = (props) => {
  return (
    <h3
      style={{
        margin: '10px 0',
        color: 'white',
        fontWeight: 'normal',
      }}
    >
      {props.Name}
    </h3>
  );
};

export default Name;
