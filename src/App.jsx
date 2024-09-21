import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./pages/Projects.jsx";
import Data from "./Data.jsx";
import Footer from './components/Footer.jsx';
import ScrollToTop from './pages/ScrollToTop.jsx';

export default function App() {
	const socials = Data.socials;
	const projects = Data.projects;

	useEffect(() => {
		Aos.init({
			once: false,
			disable: "phone",
			duration: 1000,
			easing: 'ease-out-cubic',
		});
	}, []);

	return (
		<Router>
			<div className='app'>
				<ScrollToTop />
				<Navbar /> {/* Navbar is outside Routes so it's always visible */}
				
				<Routes>
					<Route path='/' element={<Home socials={socials} />} />
					<Route path='/home' element={<Home socials={socials} />} />
					<Route path='/about' element={<About skills={Data.skills} />} />
					<Route path='/projects' element={<Projects projects={projects} />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>

				<Footer socials={socials} />
			</div>
		</Router>
	);
}
