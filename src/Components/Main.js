import React from 'react';
import Icons from './Icons';
import Langs from './Langs';
import Name from './Name';
import Skills from './Skills';
import Stack from './Stack';
import Animation from './Animation';

const Main = () => {
  return (
    <section className="background">
      <div className="wrapper-wrapper">
        <div className="wrapper">
          <div className="limit-width">
            <div className="animation">
              <Animation />
            </div>
            <div className="me">
              <div className="social-medias">
                <div className="img"></div>
                <Name Name="Fabrício Souza" />
                <Icons />
                <Langs Langs="Languages Skills:" />
                <Stack />
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
