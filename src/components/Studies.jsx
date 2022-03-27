import React from 'react'
import {  FaWindowClose as CloseBtn } from "react-icons/fa";

const Studys = ({close, studies}) => {
  return (
    <div className='page'>
      <div className='closeContainer'>
      <CloseBtn size={25} onClick={close}/>
      </div>
      <ul className='pageList'>
        {studies.map((title,index)=>{
          return (
            <li key = {index} className='pageItem'>
              <h3>{title.name}</h3>
              <p>{title.date}</p>
              <p>{title.where}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Studys