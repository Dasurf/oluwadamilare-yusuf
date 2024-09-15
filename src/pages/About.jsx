import React from "react";

export default function About({skills}) {

  return (
	<section className="about-cont">
		<div className="about-details" data-aos="slide-up">
			<div className="know-me" data-aos="slide-right">
				<h2>Get to know me!</h2>
				<p>
					I'm a <span className="bold">Frontend Focused Web Developer</span> building and managing the Front-end of Websites and Web 
					Applications that leads to the success of the overall product. Check out some of my work in the 
					<span className="bold"> Projects</span> section. 
				</p>
				<p>
					I also like sharing content related to the stuff that I have learned over the years in <span className="bold">Web Development </span>
					 so it can help other people of the Dev Community. Feel free to Connect or Follow me on my 
					<a href="https://www.linkedin.com/in/dasurf" target="_blank" className="inline-social"> Linkedin</a>  and 
					<a href="https://www.twitter.com/deezydasurf" target="_blank" className="inline-social"> Twitter </a> 
					where I post useful content related to Web Development and Programming
				</p>
				<p>
					I'm open to <span className="bold">Job</span>  opportunities where I can contribute, learn and grow. If you have a good 
					opportunity that matches my skills and experience then don't hesitate to <span className="bold">contact</span> me.
				</p>
				<a className="button" href="./Contact.jsx">CONTACT</a>
			</div>
			<div className="my-skills" data-aos="slide-left">
				<h2>My Skills</h2>
				{<div className="just-skills">{skills.map((skill, index) => <div className="skill" key={index}>{skill}</div>)}</div>}
			</div>
		</div>
	</section>
  );
}
