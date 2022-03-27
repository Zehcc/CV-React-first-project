import React from 'react'
import {  FaWindowClose as CloseBtn } from "react-icons/fa";

const Experience = ({close, experience}) => {
  return (
    <div className='page'>
      <div className='closeContainer'>
      <CloseBtn size={25} onClick={close}/>
      </div>
      <ul className='pageList'>
        {experience.map((experience,index)=>{
          return (
            <li key = {index} className='pageItem'>
              <h3>{experience.name}</h3>
              <p>{experience.date}</p>
              <p>{experience.where}</p>
              <p>{experience.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Experience