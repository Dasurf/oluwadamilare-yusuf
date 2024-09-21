import React from "react";
import { Link } from 'react-router-dom'
import Data from "../Data";

const header = Data.componentHeaders[0]

export default function About({skills}) {

  return (
	<section className="about-cont">
		<div data-aos="zoom-in">
			<div className="section-title">
				<h1>{header.title}</h1>
				<div className="title-design"></div>
				<p>{header.description}</p>
			</div>
		</div>
		<div className="about-details component-style" data-aos="slide-up">
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
					<Link to="https://www.linkedin.com/in/dasurf" target="_blank" className="inline-social"> Linkedin</Link>  and 
					<Link to="https://www.twitter.com/deezydasurf" target="_blank" className="inline-social"> Twitter </Link> 
					where I post useful content related to Web Development and Programming
				</p>
				<p>
					I'm open to <span className="bold">Job</span>  opportunities where I can contribute, learn and grow. If you have a good 
					opportunity that matches my skills and experience then don't hesitate to <span className="bold">contact</span> me.
				</p>
				<Link className="button" to="./Contact.jsx">CONTACT</Link>
			</div>
			<div className="my-skills" data-aos="slide-left">
				<h2>My Skills</h2>
				{<div className="just-skills">{skills.map((skill, index) => <div className="skill" key={index}>{skill}</div>)}</div>}
			</div>
		</div>
	</section>
  );
}
