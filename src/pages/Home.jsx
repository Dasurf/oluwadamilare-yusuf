import React from 'react'

export default function Home({socials}) {
  return (
    <div className='home-cont'>
        <h1 data-aos="zoom-out">HEY, I'M OLUWADAMILARE YUSUF</h1>
        <h3 data-aos="zoom-out">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</h3>
        <a data-aos="zoom-out" className='home-btn' href="./Projects.jsx">PROJECTS</a>
        <section data-aos="zoom-out" className='social-side'>
          {socials.map(social => (
            <a data-aos="zoom-out" href={`https://www.${social.userProfile}`} target='_blank' key={social.id}><img src={`/src/assets/${social.icon}`} alt={social.alt}/></a>
          ))}
        </section>
    </div>
  )
}
