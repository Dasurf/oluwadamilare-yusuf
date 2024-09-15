import React from 'react'

export default function Contact() {
	return (
		<section className='contact-cont'>
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
