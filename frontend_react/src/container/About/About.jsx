import React from 'react';
import { motion } from 'framer-motion';
import Grid from './gridimage/grid'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {

  return (
    <div className='mt-[15rem] '>

      <div className="app__profiles grid gap-4 grid-cols-2 w-100 ">

          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <h3 className='text-white'>Hey stranger<span className="wave ">👋,</span></h3>
            <p className="p-text" style={{ marginTop: 10 }}> </p>
          </motion.div>

          <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img ml-[8rem]">
      <Grid />
    </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);