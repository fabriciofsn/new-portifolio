import React, { useState } from 'react';

const Button = () => {
  const [btn, setBtn] = useState(true);

  function handleClick() {
    const me = document.querySelector('.me');
    setBtn(!btn);
    if (btn) {
      me.style.right = '0';
      me.style.backgroundColor = 'black';
    } else {
      me.style.right = '-320px';
    }
  }

  return (
    <button
      style={{
        padding: '.875rem',
        fontSize: '.875rem',
        backgroundColor: '#198754',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
      }}
      onClick={handleClick}
    >
      MENU
    </button>
  );
};

export default Button;
