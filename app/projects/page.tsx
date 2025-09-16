"use client"
import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";

const projects = [
	{
		title: "bonk.ai",
		shortDescription: "AI-powered customized race training plans for runners.",
		fullDescription: "bonk.ai is a web app that uses AI to create a customized race training plan for runners. Originally made to connect with a user's Strava to create an even more personalized plan. Unfortunately the Strava API does not allow more than one user to be connected to this kind of application so attached is a video showcasing Strava functionality.",
		link: "https://bonk-ai.vercel.app/",
		image: "/projects/bonk.ai-image.png"
	},
	{
		title: "myverifi",
		shortDescription: "Blockchain application for credential management.",
		fullDescription: "A blockchain application for sending and receiving credentials. Created for a capstone project as part of the BYU Masters of Information Systems program. This project demonstrates the use of blockchain technology for secure credential verification and management.",
		link: "https://youtu.be/FMsGAZ19zZk",
		image: "/projects/myverifi.png"
	}
];

export default function DevelopmentPage() {
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	const openModal = (index: number) => {
		setSelectedProject(index);
	};

	const closeModal = () => {
		setSelectedProject(null);
	};

	return (
		<main>
			<section className="container">
				<div className="text-center mb-12 mt-8">
					<h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						My Projects
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						A collection of applications and projects I've built to explore new technologies and solve real-world problems.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
					{projects.map((project, index) => (
						<div key={index} className="p-6 rounded-xl border-0 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-amber-200 dark:ring-amber-700 hover:ring-amber-400 dark:hover:ring-amber-500 hover:scale-[1.02] border-l-4 border-l-amber-500">
							<div className="mb-4">
								<div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
									<Image 
										src={project.image} 
										alt={`${project.title} screenshot`}
										width={400}
										height={192}
										className="w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white mb-2">
									{project.title}
								</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
									{project.shortDescription}
								</p>
								<button 
									onClick={() => openModal(index)}
									className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 rounded-lg transition-colors"
								>
									Learn More
								</button>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Modal */}
			{selectedProject !== null && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
					<div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						<div className="p-8 pt-12">
							<div className="w-full h-64 rounded-lg mb-6 overflow-hidden">
								<Image 
									src={projects[selectedProject].image} 
									alt={`${projects[selectedProject].title} screenshot`}
									width={600}
									height={256}
									className="w-full h-full object-cover"
								/>
							</div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								{projects[selectedProject].title}
							</h2>
							<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
								{projects[selectedProject].fullDescription}
							</p>
							<div className="flex gap-4">
								<a
									href={projects[selectedProject].link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 rounded-lg transition-colors"
								>
									Visit Project
									<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
								{selectedProject === 0 && (
									<a
										href="https://www.loom.com/share/9dc7e530e724464ca70f1e4d0671e308?sid=9c008ee3-5591-4f2f-bdcb-b886f8b74496"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 rounded-lg transition-colors"
									>
										View Strava Functionality
										<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}