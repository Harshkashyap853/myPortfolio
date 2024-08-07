import React from 'react';
import Works from  './Works.jsx';
import './Work.css'


function Work() {
  return (
    <section className='work section' id="portfolio">
            <h2 className='section__title'>Portfolio</h2>
            <span className='section__subtitle'>My Work</span>
            <Works />
    </section>
  )
}

export default Work;