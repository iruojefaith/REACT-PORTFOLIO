import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import Grid from './gridimage/grid';
import Button from './Button'
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },

};


const Header = () => ({
const onButtonClick = () => {
    fetch('01_IRUOJE_FAITH_Resume.pdf').then(response => {
        response.resume().then(resume => {
            const fileURL = window.URL.createObjectURL(resume);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = '01_IRUOJE_FAITH_Resume.pdf';
            alink.click();
        });
    });
  }
return (
  <>
     <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text "><span>FAITH</span></h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">FrontEnd Developer</p>
          <p className="p-text">Open Source Enthusiast </p>
        </div>
      </div>
      <div>
        <button onClick={onButtonClick}>Download CV </button>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img">
      <Grid />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.js, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
  </>
);

export default AppWrap(Header, 'home');