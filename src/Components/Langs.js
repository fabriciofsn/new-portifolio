import React from 'react';
import usa from '../Flags/usa.png';
import portugall from '../Flags/portugall.png';

const Langs = (props) => {
  return (
    <div>
      <h3 style={{ color: 'white', fontWeight: 'normal' }}>{props.Langs}</h3>;
      <div className="flags">
        <div className="usa">
          <div style={{ color: 'white' }}>
            <img className="united" src={usa} alt="usa flag" />
          </div>
          <div style={{ color: 'white' }}>
            <img className="portu" src={portugall} alt="portugal flag" />
          </div>
        </div>
        <div className="stars">
          <p>&#9733;&#9733;&#9734;</p>
          <p>&#9733;&#9733;&#9733;</p>
        </div>
      </div>
    </div>
  );
};

export default Langs;
