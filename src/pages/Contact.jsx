import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Data from '../Data';

const header = Data.componentHeaders[2];

export default function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(''); // State to handle message status
  const [showMessage, setShowMessage] = useState(false);  // State to control visibility of the message
  const [input, setInput] = useState({
	name: "", email: "", message: ""
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2wjeejl',    // Replace with your EmailJS service ID
      'template_782v28q',   // Replace with your EmailJS template ID
      form.current,
      'GQoM7AahjzAbFiRgb'        // Replace with your EmailJS user ID
    ).then(
      (result) => {
        setMessageStatus('Message sent successfully!');
        setShowMessage(true);   // Show success message
        hideMessageAfterDelay(); // Hide the message after a short delay
		clearMessage(); // Clear message after success
      },
      (error) => {
        setMessageStatus('An error occurred, please try again.');
        setShowMessage(true);   // Show error message
        // hideMessageAfterDelay(); // Hide the message after a short delay
      }
    );
  };

  // Function to clear input field after a message is sent
  function handleChange(e) {
	// e.preventDefault();
		const {value, name} = e.target;

		setInput(prevInput => {
			return {
				...prevInput,
				[name]: value
			}
		})	
  }

  function clearMessage() {
	setTimeout(() => {
		setInput({
		name: "",
		email: "",
		message: ""
	});
	}, 3000);
	
  }

  // Function to hide the message after 3 seconds
  const hideMessageAfterDelay = () => {
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Message will disappear after 3 seconds
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
        <input type="text" autoComplete="true" name="name" onChange={handleChange} value={input.name} placeholder='Please enter your name' data-aos="slide-up" required />

        <label htmlFor="email" data-aos="zoom-in">Email</label>
        <input type="email" autoComplete="true" name="email" onChange={handleChange} value={input.email} placeholder="Please enter your email" data-aos="slide-up" required />

        <label htmlFor="message" data-aos="zoom-in">Message</label>
        <textarea name="message" autoComplete="true" onChange={handleChange} value={input.message} id="message" cols="150" rows="10" placeholder='Please enter your message' data-aos="slide-up" required></textarea>

		{/* Conditionally render the status message */}
		{showMessage && (
			<div className={`message-status ${messageStatus.includes('success') ? 'success' : 'error'}`}>
			{messageStatus}
			</div>
		)}

        <button type='submit' className='contact-btn' data-aos="slide-up" onClick={clearMessage}>SUBMIT</button>
      </form>
    </section>
  );
}
