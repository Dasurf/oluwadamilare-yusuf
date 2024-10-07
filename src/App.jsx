import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Home from "./component/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./component/Projects.jsx";
import Data from "./Data.jsx";
import Footer from './components/Footer.jsx';
import ScrollToTop from './component/ScrollToTop.jsx';
import NotFound from './component/NotFound.jsx';

export default function App() {
	const socials = Data.socials;
	const projects = Data.projects;

	useEffect(() => {
		Aos.init({
			once: false,
			disable: "phone",
			duration: 1000,
			easing: 'ease-out-cubic',
			mirror: true,
		});
	}, []);

	// Custom component to conditionally render Navbar and Footer
	function Layout({ children }) {
		const location = useLocation();
		
		// Condition to hide Navbar and Footer on NotFound route
		const hideNavbarFooter = location.pathname === '/404' || location.pathname === '*';

		return (
			<>
				{!hideNavbarFooter && <Navbar />}
				{children}
				{!hideNavbarFooter && <Footer socials={socials} />}
			</>
		);
	}

	return (
		<Router>
			<div className='app'>
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<Layout><Home socials={socials} /></Layout>} />
					<Route path='/home' element={<Layout><Home socials={socials} /></Layout>} />
					<Route path='/about' element={<Layout><About skills={Data.skills} /></Layout>} />
					<Route path='/projects' element={<Layout><Projects projects={projects} /></Layout>} />
					<Route path='/contact' element={<Layout><Contact /></Layout>} />

					{/* 404 Not Found Page */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}
