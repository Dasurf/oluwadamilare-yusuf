import React from 'react';
import {Link} from "react-router-dom";

export default function Footer ({socials}) {
    const date = new Date();
    const year = date.getFullYear().toString();

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
                    <Link to={`https://www.${social.userProfile}`} target='_blank' key={social.id}><img src={`/static/${social.icon}`} alt={social.alt}/></Link>
                    ))}
                </div>
            </div>
        </div>
        <div className="lower">
            © Copyright {year} . Made by <Link to="/home">Oluwadamilare Yusuf</Link>
        </div>
    </footer>
  )
}
