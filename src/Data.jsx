import { Component } from "react";

export default {
    skills: ["HTML", "CSS", "Javascript", "React", "SASS", "Git", "Github", "Responsive design", "Terminal", "Bash"],
    socials: [
		{
			id: 0,
			name: "twitter",
			userProfile: "twitter.com/deezydasurf",
			icon: "twitter.png",
			alt: "twitter-icon"
		},
		{
			id: 1,
			name: "github",
			userProfile: "github.com/dasurf",
			icon: "github.png",
			alt: "github-icon"
		},
		{
			id: 2,
			name: "linkedin",
			userProfile: "linkedin.com/in/dasurf",
			icon: "linkedin.png",
			alt: "linkedin-icon"
		},
		{
			id: 3,
			name: "medium",
			userProfile: "medium.com/@damilareyusuf.dy",
			icon: "medium.png",
			alt: "medium-icon"
		},
		
	],
    projects: [
        {
            id: 0,
            title: "AM Realty",
            description: "I worked in a team of two to develop a real estatr website for a client to showcase their juicy offers for potential clients",
            link: "https://amrealty.vercel.app/",
            image: "amrealty.jpg",

        },
        {
            id: 1,
            title: "Todo App",
            description: "I created a simple todo app which lets you create lists of things to do and delete after completion",
            link: "https://todo-list-app-eight-liart.vercel.app/",
            image: "todo-app.jpg",

        },
        {
            id: 2,
            title: "Meme Generator",
            description: "I created a fun App which fetches random images from the API and create memes by adding texts to it",
            link: "https://meme-generator-zeta-two.vercel.app/",
            image: "meme-generator.jpg",

        },
    ],
    componentHeaders: [
        {
            id: 0,
            title: "About Me",
            description: "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
        },
        {
            id: 1,
            title: "Projects",
            description: "Here you will find some of the personal and clients projects that I created with live links to each project"
        },
        {
            id: 2,
            title: "Contact",
            description: "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        }

    ]


}