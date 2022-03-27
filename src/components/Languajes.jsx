import React from 'react'
import {  FaWindowClose as CloseBtn } from "react-icons/fa";

const Languajes = ({close, languages}) => {
  return (
    <div className='page'>
      <div className='closeContainer'>
      <CloseBtn size={25} onClick={close}/>
      </div>
      <ul className='pageList'>
        {languages.map((language,index)=>{
          return (
            <li key = {index} className='pageItem'>
              <h3>{language.language}</h3>
              <p>Nivel escrito: {language.wrlevel}</p>
              <p>Nivel oral: {language.splevel}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Languajes