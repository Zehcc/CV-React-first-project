import React from 'react'

const Hero = ({hero}) => {
  return (
    <div className='hero'>
      <img src={hero.image} alt=""/>
      <p>{hero.name} {hero.surname}</p>
      <p>{hero.adress}</p>
      <p>{hero.birthDate}</p>
      <p>{hero.email}</p>
    </div>
  )
}

export default Hero