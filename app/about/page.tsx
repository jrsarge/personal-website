import type { Metadata } from "next";
import PageTitle from "@/components/ui/page-title";
import Image from "next/image";
import JacobPhoto from "@/public/about-me/jacob.png";

const title: { title: string; subtitle?: string } = {
    title: "About Me",
    subtitle: "Learn more about who I am, my background, and what drives me."
}

export default function AboutPage() {
	return (
		<main>
			<PageTitle components={ title } />
			<section className="container">
				<div className="max-w-4xl mx-auto p-5">
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
						<div className="flex-shrink-0">
							<Image 
								src={JacobPhoto} 
								alt="Jacob Sargent" 
								className="w-64 h-64 object-cover rounded-lg shadow-lg"
								priority
							/>
						</div>
						<div className="flex-1">
							<div className="prose dark:prose-invert max-w-none">
								<p className="text-lg leading-relaxed">
									Hi, I'm Jacob Sargent! I'm a Master of Information Systems student at BYU and a Product Manager passionate about leveraging technology to solve real-world problems.
								</p>
								<p>
									My journey has taken me from winning national competitions in AI and data analytics to spending two years in Panama developing fluency in Spanish and a deep appreciation for Latin American culture. I'm driven by the intersection of technology, business strategy, and human connection.
								</p>
								<p>
									When I'm not working on product management or studying, you'll find me on the trails. I'm an ultra runner who has completed four trail ultramarathons (including two 50-mile races) and two road marathons. Running teaches me persistence, strategic thinking, and the importance of preparation - qualities I bring to everything I do.
								</p>
								<p>
									I'm also an Eagle Scout with over 200 hours of community service, and I love contributing to projects that make a positive impact. Whether it's developing AI solutions for healthcare efficiency or leading teams in competitive environments, I'm always looking for opportunities to create meaningful change.
								</p>
								<div className="flex items-center gap-4 mt-6">
									<a 
										href="https://www.linkedin.com/in/jacob-sargent-3ab80a177/" 
										target="_blank" 
										rel="noopener noreferrer"
										className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg"
									>
										<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
										</svg>
										Connect on LinkedIn
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export let metadata: Metadata = {
    title: "About Me"
};