import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx"; 
import Home from "./pages/Home.jsx"; 
import Navbar from "./components/Navbar.jsx"; 
import Projects from "./pages/Projects.jsx"; 
import Data from "./Data.jsx";
import TopDescriptions from './pages/TopDescriptions.jsx';
import Footer from './components/Footer.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


export default function App() {
	const socials = Data.socials;
	const projects = Data.projects;
	const componentHeaders = Data.componentHeaders;

	useEffect(() => {
		Aos.init({
			once: false,
			disable: "phone",
			duration: 1000,
			easing: 'ease-out-cubic',
		})
	}, []);
	
	let router;
	
	
	return (
		<div className='app'>
			<Navbar />
			<Home
				socials={socials}
			/>

			{[<About 
				skills={Data.skills}
			/>,
			<Projects 
				projects={projects}
			/>,
			<Contact />].map((component, index) => {
				router = createBrowserRouter([
					{path: `/${componentHeaders[index].title}`, element: component}
				])

				return <div key={index} data-aos="slide-up" data-aos-anchor-placement="top center" className={`component-style ${index % 2 === 0 && "component-background"}`}>
					<TopDescriptions 
						componentHeaders={componentHeaders}
						component={component}
						index={index}
					/>
					
				</div>
			})}
			<Footer
				socials={socials}
			/>
		</div>
	)
}

