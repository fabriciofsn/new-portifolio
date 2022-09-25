import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Icons = () => {
  return (
    <div className="icons">
      <a target={'_blank'} href="https://github.com/fabriciofsn">
        <BsGithub style={{ fontSize: '1.8rem' }} />
      </a>
      <a
        target={'_blank'}
        href="https://www.instagram.com/fabricio_is_not_available/"
      >
        <BsInstagram style={{ fontSize: '1.8rem' }} />
      </a>
      <a
        target={'_blank'}
        href="https://www.linkedin.com/in/fabr%C3%ADcio-souza-fullstack/"
      >
        <BsLinkedin style={{ fontSize: '1.8rem' }} />
      </a>
      <a
        target={'_blank'}
        href="https://api.whatsapp.com/send?phone=5579996557845&text=Hey%20Dev!"
      >
        <BsWhatsapp style={{ fontSize: '1.8rem' }} />
      </a>
    </div>
  );
};

export default Icons;
