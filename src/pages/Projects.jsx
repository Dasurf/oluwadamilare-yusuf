import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data'

const header = Data.componentHeaders[1];
export default function Projects({projects}) {
	

	return (
		<div className='project-umbrella'>
			<div data-aos="zoom-in">
				<div className="section-title">
					<h1>{header.title}</h1>
					<div className="title-design"></div>
					<p>{header.description}</p>
				</div>
			</div>
			{
				projects.map(project => (
				<section className='project-cont' key={project.id}>
					<div className='project component-style' data-aos="fade-right">
						<img src={`/static/${project.image}`} alt={`${project.title} image`} className='project-image'/>
						<div className='project-desc'>
							<h2>{project.title}</h2>
							<div>{project.description}</div>
							<Link to={project.link} className='general-btn'>Check Website</Link>
						</div>
					</div>
				</section>

				))
			}
		</div>
	)
}
