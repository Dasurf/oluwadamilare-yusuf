import React from 'react'

export default function Footer ({socials}) {
  return (
    <footer data-aos="zoom-in" className='footer-cont'>
        <div className='upper'>
            <div className='name-desc'>
                <h3>OLUWADAMILARE YUSUF</h3>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div className='footer-social'>
                <h3>SOCIAL</h3>
                <div className='link-cont'>
                    {socials.map(social => (
                    <a href={`https://www.${social.userProfile}`} target='_blank' key={social.id}><img src={`/src/assets/${social.icon}`} alt={social.alt}/></a>
                    ))}
                </div>
            </div>
        </div>
        <div className="lower">
            © Copyright 2024 . Made by <a href="./Home.jsx">Oluwadamilare Yusuf</a>
        </div>
    </footer>
  )
}
