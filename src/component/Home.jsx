import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data'

export default function Home({socials}) {
  const home = Data.componentHeaders[0];

  return (
    <div className='home-cont'>
        <h1 data-aos="zoom-out">{home.title}</h1>
        <h3 data-aos="zoom-out">{home.description}</h3>
        <Link data-aos="zoom-out" className='home-btn' to="/projects">PROJECTS</Link>
        <section data-aos="zoom-out" className='social-side'>
          {socials.map(social => (
            <Link data-aos="zoom-out" to={`https://www.${social.userProfile}`} target='_blank' key={social.id}><img src={`/static/${social.icon}`} alt={social.alt}/></Link>
          ))}
        </section>
    </div>
  )
}
