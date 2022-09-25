import React from 'react';
import Typical from 'react-typical';
import Name from './Name';
import Projects from './Projects';
import { FaHandPointDown } from 'react-icons/fa';

const Animation = () => {
  return (
    <div className="animation">
      <div className="anim">
        <h1 style={{ display: 'flex' }}>
          <span>Let's</span>
          <span style={{ margin: '0 10px', color: '#198754' }}>
            <Typical
              steps={['Learn', 1500, 'Thrive', 1500, 'Develop', 1500]}
              loop={Infinity}
            />
          </span>
          <span>Together</span>
        </h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Name Name="Projects" />{' '}
        <FaHandPointDown
          style={{ marginTop: '7px', fontSize: '1.3rem', color: '#ead41c' }}
        />
      </div>
      <Projects />
    </div>
  );
};

export default Animation;
