import React from 'react';
import './Skills.css';


function Skills() {
  return (
    <section className='skill section'id='skills'>
        <h2 className='section__title'>My Skills</h2>
        <span className='section__subtitle'>I have a broad range of applicable skill that will enable me to be a valuable member of your team.</span>


{/* 
        <div className='skill__container container grid'>
                
                
        <div class="skill-box">
            <span class="title">HTML</span>
            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">90%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">CSS</span>
            <div class="skill-bar">
                <span class="skill-per css">
                    <span class="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">JavaScript</span>
            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">React</span>
            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">80%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">NodeJS</span>
            <div class="skill-bar">
                <span class="skill-per nodejs">
                    <span class="tooltip">30%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">Tailwind</span>
            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">60%</span>
                </span>
            </div>
        </div>
        </div> */}


        <div className='skills__container container grid'>
             <div className='skills__content'>
                    <div className='skills__group'>
                        <div className='skill__data'>
                        <i class='bx bxl-c-plus-plus bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>C++</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class='bx bxl-react bx-lg'></i>
                        <div className='skills__name'>
                        <h3 className='skills__name'>React</h3>
                        </div>
                        </div>
                        
                        <div className='skill__data'>
                        <i class='bx bxl-html5 bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>HTML</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class='bx bxl-css3 bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>CSS</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class='bx bxl-tailwind-css bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>Tailwind</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class='bx bxl-nodejs bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>Node js</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class='bx bxl-python bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>Python</h3>
                        </div>
                        </div>
                        
                        <div className='skill__data'>
                        <i class='bx bxl-javascript bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>JavaScript</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class="devicon-c-plain colored" style={{fontSize: '2.85rem',  color: 'var(---color)'}}></i>
                        <div>
                        <h3 className='skills__name'>C</h3>
                        </div>
                        </div>


                        <div className='skill__data'>
                        <i class='bx bxl-git bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>Git</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class='bx bxl-docker bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>Docker</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class='bx bxl-mongodb bx-lg'></i>
                        <div>
                        <h3 className='skills__name'>Mongodb</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class="devicon-solidity-plain colored " style={{fontSize: '2.85rem',  color: 'var(---color)'}}></i>
                        <div>
                        <h3 className='skills__name'>Solidity</h3>
                        </div>
                        </div>

                        <div className='skill__data'>
                        <i class="devicon-azure-plain colored" style={{fontSize: '2.85rem',  color: 'var(---color)'}}></i>
                        <div>
                        <h3 className='skills__name'>Azure</h3>
                        </div>
                        </div>


                    </div>
             </div>
        </div>
    </section>
  )
}

export default Skills;