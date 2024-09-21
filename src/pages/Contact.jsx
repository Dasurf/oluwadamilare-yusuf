import React from 'react'
import Data from '../Data'

const header = Data.componentHeaders[2];

export default function Contact() {
	return (
		<section className='contact-cont'>
			<div data-aos="zoom-in">
				<div className="section-title">
					<h1>{header.title}</h1>
					<div className="title-design"></div>
					<p>{header.description}</p>
				</div>
			</div>
			<form className='form' data-aos="fade-in">
				<label htmlFor="name" data-aos="zoom-in">name</label>
				<input type="text" placeholder='Please enter your name' data-aos="slide-up"/>
				<label htmlFor="email" data-aos="zoom-in" >email</label>
				<input type="email" placeholder="Please enter your email" data-aos="slide-up"/>
				<label htmlFor="message" data-aos="zoom-in">message</label>
				<textarea name="message" id="message" cols="150" rows="10" placeholder='Please enter your message' data-aos="slide-up"></textarea>
				<button type='submit' className='contact-btn' data-aos="slide-up">SUBMIT</button>
			</form>
		</section>
	)
}
