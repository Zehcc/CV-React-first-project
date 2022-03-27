import React from 'react'

const About = ({about}) => {
  return (
    <div className='about'>
      <h3><b>Sobre mi</b></h3>
      <p>{about.description}</p>
      <p><b>Frontend:</b> {about.frontend}</p>
      <p><b>Backend:</b> {about.backend}</p>
    </div>
  )
}

export default About