import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import ParticlesBackground from './particles/ParticlesBackground';

function App() {


  return <div className='app'>
        <ParticlesBackground />
    <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
  <Footer/>
</div>
}
export default App;
