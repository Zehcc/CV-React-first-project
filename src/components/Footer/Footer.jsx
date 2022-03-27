import React from 'react'

const Footer = ({github, email, linkedin}) => {
  return (
    <div className='footer'>
        <a title="Linkedin" target="_blank" rel = "noreferrer" href={linkedin}><img src="./Assets/linkedin.png" alt="Linkedin" /></a>
        <a title="Github" target="_blank" rel = "noreferrer" href={github}><img src="./Assets/github.png" alt="Github" /></a>
        <a title="Gmail" target="_blank" rel = "noreferrer" href={email}><img src="./Assets/gmail.png" alt="Gmail" /></a>
    </div>
  )
}

export default Footer