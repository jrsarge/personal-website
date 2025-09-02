import type { Metadata } from "next";
import Image from "next/image";
import PageTitle from "@/components/ui/page-title";

const title: { title: string; subtitle?: string } = {
    title: "My Software Projects",
    subtitle: "Here is where I'll display projects I've worked on to display some of the things I've learned or taught myself."
}

const projects = [
	{
		title: "bonk.ai",
		description: "A webapp where people can have AI-generated running plans made based off their running data in their Strava, which it gets through the Strava API.",
		link: "https://bonk-ai.vercel.app/",
		image: "/projects/bonk-ai.png"
	}
];

export default function DevelopmentPage() {
	return (
		<main>
			<PageTitle components={ title } />
			<section className="container">
				<h1 className="text-left dark:text-white text-2xl md:text-3xl xl:text-4xl font-medium text-gray-900 w-10/12 p-5">
					Projects
				</h1>
				<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
					{projects.map((project, index) => (
						<div key={index} className="p-6 rounded-xl border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-blue-200 dark:ring-blue-700 hover:ring-blue-400 dark:hover:ring-blue-500 hover:scale-[1.02] border-l-4 border-l-blue-500">
							<div className="mb-4">
								<div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
									<span className="text-gray-500 dark:text-gray-400">Project Image</span>
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
									className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
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