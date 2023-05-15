import React from 'react';
import { motion } from 'framer-motion';
import Grid from './gridimage/grid'
import profile  from '../../assets/profile.png';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {

  return (
    <div className='mt-[5rem] '>
      <h2 className="head-text">About <span className='header_gradient'>Me</span></h2>
      <div className="app__profiles grid gap-2 grid-cols-2 w-100 ">

          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <h3 className='text-white'>Hey stranger<span className="wave ">👋,</span></h3>
            <p className=" p-text " style={{ marginTop: 10 }}> This is Iruoje Faith Funmileyi, A
            creative Front-End Developer with an interest in building products that provide the needs of users and are
            scalable. Skilled in designing, developing and testing multiple web-based applications incorporating a
            range of technologies.Aside the information above I earn a B.sc at Adekunle Ajasin University Akungab-Akoko </p>
          </motion.div>


          <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img ml-[8rem]">
      <div class=" items-center justify-center">
        <div class="h-96 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div class="flex h-full w-full items-center justify-center bg-white-800 back">
          <img src={profile}  />
          </div>
        </div>
      </div>
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