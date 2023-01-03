import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import particlesVideo from './assets/Particles.mp4'


function App() {


  return<div className='app'>
   <div className=' relative w-full h-full'>
      <video
      src={particlesVideo}
      type="video/mp4"
      loop
      controls={false}
      muted
      autoPlay className='w-full h-full object-cover fixed '>
      </video>
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-blackOverlay'>

    <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
  <Footer/>
  </div>
  </div>
</div>
}
export default App;
