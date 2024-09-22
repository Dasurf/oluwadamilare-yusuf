import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Data from '../Data';

const header = Data.componentHeaders[2];

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2wjeejl', 
      'template_782v28q',
      form.current,
      'GQoM7AahjzAbFiRgb'
    ).then(
      (result) => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('An error occurred, please try again.');
      }
    );
  };

  return (
    <section className='contact-cont'>
      <div data-aos="zoom-in">
        <div className="section-title">
          <h1>{header.title}</h1>
          <div className="title-design"></div>
          <p>{header.description}</p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className='form' data-aos="fade-in">
        <label htmlFor="name" data-aos="zoom-in">Name</label>
        <input type="text" name="name" placeholder='Please enter your name' data-aos="slide-up" required />
        
        <label htmlFor="email" data-aos="zoom-in">Email</label>
        <input type="email" name="email" placeholder="Please enter your email" data-aos="slide-up" required />
        
        <label htmlFor="message" data-aos="zoom-in">Message</label>
        <textarea name="message" id="message" cols="150" rows="10" placeholder='Please enter your message' data-aos="slide-up" required></textarea>
        
        <button type='submit' className='contact-btn' data-aos="slide-up">SUBMIT</button>
      </form>
    </section>
  );
}
