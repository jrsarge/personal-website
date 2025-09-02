import type { Metadata } from "next";
import Image from "next/image";

const projects = [
	{
		title: "bonk.ai",
		description: "bonk.ai is a web app that uses AI to create a customized race training plan for runners. Originally made to connect with a user's Strava to create an even more personalized plan. Unfortunately the Strava API does not allow more than one user to be connected to this kind of application so attatched is a video showcasing Strava functionality.",
		link: "https://bonk-ai.vercel.app/",
		image: "/projects/bonk.ai-image.png"
	},
	{
		title: "myverifi",
		description: "A blockchain application for sending and recieving credentials. Created for a capstone project as part of the BYU Masters of Information Systems program.",
		link: "https://youtu.be/FMsGAZ19zZk",
		image: "/projects/myverifi.png"
	}
];

export default function DevelopmentPage() {
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
									{project.description}
								</p>
								<a 
									href={project.link} 
									target="_blank" 
									rel="noopener noreferrer"
									className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
								>
									Visit Project
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

export let metadata: Metadata = {
    title: "My Development Projects"
};