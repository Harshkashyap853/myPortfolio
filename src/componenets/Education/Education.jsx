
import React from 'react';
import './Education.css';

function Education() {
  return (
    <section className='qualififcation section'id='education'>
        <h2 className='section__title'>Education</h2>
        <span className='section__subtitle'>My personal Journey</span>
          <div className='qualification__container container'>
          <div className='qualification__sections'>
          <div className='qualification__content'>
              <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>Graduation</h3>
                    <span className='qualification__subtitle'>KLE technological university<br/>B.Tech Computer Science</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i>2021-2025
                    </div>
                  </div>

                  <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                  </div>

              </div>
              <div className='qualification__data'>
                    <div></div>
              
                  <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                  </div>

                  <div>
                    <h3 className='qualification__title'>High School</h3>
                    <span className='qualification__subtitle'>Holy Cross pub school<br/>PCM</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i>2018-2020
                    </div>
                  </div>
              </div>
              <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>Middle School</h3>
                    <span className='qualification__subtitle'>DAV pub School<br/>
                      Darbhanga Road
                     <br/> Bakhri, Muzzaffarpur</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i>2015-2018
                    </div>
                  </div>

                  <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                  </div>

              </div>
              <div className='qualification__data'>
                    <div></div>
              
                  <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                  </div>

                  <div>
                    <h3 className='qualification__title'>Primary School</h3>
                    <span className='qualification__subtitle'>DAV pub school<br/>Khabra, MUzaffarpur</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i>2006-2015
                    </div>
                  </div>
              </div>
              
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education;