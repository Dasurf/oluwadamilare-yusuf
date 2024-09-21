import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({socials}) {

  return (
    <div className='home-cont'>
        <h1 data-aos="zoom-out">HEY, I'M OLUWADAMILARE YUSUF</h1>
        <h3 data-aos="zoom-out">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</h3>
        <Link data-aos="zoom-out" className='home-btn' to="/projects">PROJECTS</Link>
        <section data-aos="zoom-out" className='social-side'>
          {socials.map(social => (
            <Link data-aos="zoom-out" to={`https://www.${social.userProfile}`} target='_blank' key={social.id}><img src={`/static/${social.icon}`} alt={social.alt}/></Link>
          ))}
        </section>
    </div>
  )
}
