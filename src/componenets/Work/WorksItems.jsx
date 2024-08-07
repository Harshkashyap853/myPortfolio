
import React from 'react'

function WorksItems({item}) {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className='work__title'>{item.title}</h3>
        <a href={item.sourceURL} className='work__button' target='_blank' rel='noopener noreferrer'>Source Code
        <i className='bx bx-right-arrow-alt work_button-icon'></i></a>
    </div>
  )
}

export default WorksItems;