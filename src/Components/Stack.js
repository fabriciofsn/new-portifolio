import React from 'react';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaGitAlt } from 'react-icons/fa';

const Stack = () => {
  return (
    <div className="stack">
      <h3>Stack Skills:</h3>
      <div className="icons-lan">
        <AiFillHtml5 style={{ color: '#E56027' }} />
        <DiCss3 style={{ color: '#0170BA' }} />
        <IoLogoJavascript style={{ color: '#EAD41C', fontSize: '2.5rem' }} />
        <FaReact style={{ color: '#61DBFB' }} />
      </div>
      <div className="icons-lan">
        <FaGitAlt style={{ color: '#E44C30' }} />
        <AiFillGithub style={{ color: '#E44C30' }} />
      </div>
    </div>
  );
};

export default Stack;
