import type { Metadata } from "next";
import Image from "next/image";

const projects = [
	{
		title: "bonk.ai",
		description: "A webapp where people can have AI-generated running plans made based off their running data in their Strava, which it gets through the Strava API.",
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
				<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
					{projects.map((project, index) => (
						<div key={index} className="p-6 rounded-xl border-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-gray-200 dark:ring-gray-600 hover:ring-gray-400 dark:hover:ring-gray-500 hover:scale-[1.02] border-l-4 border-l-gray-400">
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
									className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
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