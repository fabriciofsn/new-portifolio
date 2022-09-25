import React from 'react';
import { FiCheck } from 'react-icons/fi';

const Skills = () => {
  return (
    <div className="skills">
      <h3 style={{ color: 'white' }}>Soft Skills:</h3>
      <ul>
        <li>
          <FiCheck /> Organized
        </li>
        <li>
          <FiCheck /> Clean Code
        </li>
        <li>
          <FiCheck />
          perfectionist
        </li>
        <li>
          <FiCheck />
          detail-oriented
        </li>
        <li>
          <FiCheck /> Team Work
        </li>
        <li>
          <FiCheck /> Empathy
        </li>
      </ul>
    </div>
  );
};

export default Skills;
