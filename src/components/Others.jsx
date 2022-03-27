import React from 'react';
import {  FaWindowClose as CloseBtn } from "react-icons/fa";

const Others = ({close, others}) => {
  return (
      <div className='page'>
        <div className='closeContainer'>
        <CloseBtn size={25} onClick={close}/>
        </div>
        <ul className='pageList'>
            <li className='pageItem'>
              <h3>Más información:</h3>
              <p>{others.licence}</p>
              <p>{others.vehicle}</p>
              <p>{others.disponibility}</p>
            </li>
        </ul>
      </div>
    )
}

export default Others