import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import {  FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://twitter.com/iruojefaith'>
       <BsTwitter />
    </a>

    </div>
    <div>
    <a href='https://github.com/iruojefaith'>
      <FaGithub />
    </a>

    </div>
    <div>
    <a href='https://www.linkedin.com/in/faith-iruoje-4b4a28199/'>
<BsLinkedin/>
    </a>

    </div>
  </div>
);

export default SocialMedia;