import React from 'react'

export default function Projects({projects}) {
	

	return (
		<>
			{
				projects.map(project => (
				<section className='project-cont' key={project.id}>
					<div className='project' data-aos="fade-right">
						<img src={`/src/assets/${project.image}`} alt={`${project.title} image`} className='project-image'/>
						<div className='project-desc'>
							<h2>{project.title}</h2>
							<div>{project.description}</div>
							<a href={project.link} className='general-btn'>Check Website</a>
						</div>
					</div>
				</section>

				))
			}
		</>
	)
}
