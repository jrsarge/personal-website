"use client"
import { Separator } from "@/components/ui/separator"
import BYULogo from "@/public/resume/byu-logo.png"
import PurdueLogo from "@/public/resume/purdue-logo.png"
import UtahStateLogo from "@/public/resume/utahstate-logo.png"
import PanamaFlag from "@/public/resume/panama-flag.png"
import BSALogo from "@/public/resume/bsa-logo.webp"
import Image from "next/image";
import resume from "@/app/resume/resume.json"
import { useState } from "react";


export default function ResumePage() {
	const [educationOpen, setEducationOpen] = useState(true);
	const [experienceOpen, setExperienceOpen] = useState(true);
	const [skillsOpen, setSkillsOpen] = useState(true);

	return (
		<main>
			<div className="container mt-8">
				<button 
					onClick={() => setEducationOpen(!educationOpen)}
					className="flex items-center justify-between w-full text-left dark:text-white text-2xl md:text-3xl xl:text-4xl font-medium text-gray-900 p-5 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
				>
					<span>Education</span>
					<svg 
						className={`w-6 h-6 transition-transform duration-200 ${educationOpen ? 'rotate-180' : ''}`}
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</button>
				<div className={`transition-all duration-300 ease-in-out overflow-hidden ${educationOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
					<div className="p-6 rounded-xl border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mx-auto max-w-[850px] ring-1 ring-blue-200 dark:ring-blue-700 hover:ring-blue-400 dark:hover:ring-blue-500 hover:scale-[1.02] mb-6 border-l-4 border-l-blue-500" >
						<div className="flex justify-start items-center space-x-2 pb-4" >
							<Image src={ BYULogo } alt="BYU Logo" className=" w-12" />
							<div>
								<h1 className="text-xl font-semibold leading-none tracking-tight">
									{ resume.education[0].institution }
								</h1>
								<p className="text-sm text-muted-foreground">{ resume.education[0].start_month } { resume.education[0].start_year } - { resume.education[0].graduation_month } { resume.education[0].graduation_year }</p>
								<p className="text-sm text-muted-foreground">{ resume.education[0].city }, { resume.education[0].state }</p>

							</div>
						</div>
						<h2 className=" text-lg font-normal leading-none tracking-tight">
							{ resume.education[0].degree }
						</h2>
						<p className="text-sm text-muted-foreground">{ resume.education[0].college }</p>
						<br></br>
						<p className=" pb-1" ><b>GPA:</b> { resume.education[0].gpa }</p>
						<p className=" text-xs" >{ resume.education[0].additionals }</p>
					</div>
				</div>
			</div>
			<div className="container">
				<button 
					onClick={() => setExperienceOpen(!experienceOpen)}
					className="flex items-center justify-between w-full text-left dark:text-white text-2xl md:text-3xl xl:text-4xl font-medium text-gray-900 p-5 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
				>
					<span>Experience</span>
					<svg 
						className={`w-6 h-6 transition-transform duration-200 ${experienceOpen ? 'rotate-180' : ''}`}
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</button>
				<div className={`transition-all duration-300 ease-in-out overflow-hidden ${experienceOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
					{ resume.jobs.map((job) => (
						<div key={ job.title } className="p-6 rounded-xl border-0 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mx-auto max-w-[850px] mb-6 ring-1 ring-teal-200 dark:ring-teal-700 hover:ring-teal-400 dark:hover:ring-teal-500 hover:scale-[1.02] border-l-4 border-l-teal-500" >
							<div>
								<div className="flex justify-start items-center space-x-2 pb-4" >
								<Image src={ job.logo } alt={`${job.company} Logo`} width={40} height={40} className="w-12" />
									<h1 className="text-xl font-semibold leading-none tracking-tight">
										{ job.title }
									</h1>
								</div>
								<Separator className="my-2" />
								<p className=" font-normal text-base">{ job.company }</p>
								<p className="text-sm text-muted-foreground">{ job.start_date } - {job.end_date !== null ? (job.end_date) : ("Present")}</p>
								<p className="text-sm text-muted-foreground">{ job.city }{ job.state !== null ? (`, ${job.state}`) : ( "" ) } </p>
							</div>
							<br></br>
							<ul className="list-disc pl-5 space-y-4">
								{job.descriptions.map((desc, index) => {
									const words = desc.split(" ");
									const firstWord = words.shift();
									const restOfWords = words.join(" ");
									
									return (
										<li key={index} className="font-light">
											<strong>{firstWord}</strong> {restOfWords}
										</li>
									);
								})}
							</ul>
						</div>
					)) }
				</div>
			</div>
			<div className="container">
				<button 
					onClick={() => setSkillsOpen(!skillsOpen)}
					className="flex items-center justify-between w-full text-left dark:text-white text-2xl md:text-3xl xl:text-4xl font-medium text-gray-900 p-5 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
				>
					<span>Skills & Achievements</span>
					<svg 
						className={`w-6 h-6 transition-transform duration-200 ${skillsOpen ? 'rotate-180' : ''}`}
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</button>
				<div className={`transition-all duration-300 ease-in-out overflow-hidden ${skillsOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
					{/* Purdue Competition Win Highlight Card */}
					<div className="p-6 rounded-xl border-0 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mb-6 mx-auto max-w-[850px] ring-1 ring-purple-200 dark:ring-purple-700 hover:ring-purple-400 dark:hover:ring-purple-500 hover:scale-[1.02] border-l-4 border-l-purple-500" >
						<div className="flex items-start space-x-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
									<Image src={PurdueLogo} alt="Purdue Logo" className="w-10 h-10 object-contain" />
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center space-x-2 mb-2">
									<h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">🏆 1st Place</h3>
								</div>
								<h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">
									Purdue Data 4 Good Competition
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
									Led a winning team in Purdue's Data 4 Good competition, applying AI and analytics to a real world problem in the healthcare industry.
								</p>
								<a 
									href="https://business.purdue.edu/journal/24/s/stories/data4good.php" 
									target="_blank" 
									rel="noopener noreferrer"
									className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
								>
									Read the full story
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* BYU Competition Win Highlight Card */}
					<div className="p-6 rounded-xl border-0 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mb-6 mx-auto max-w-[850px] ring-1 ring-purple-200 dark:ring-purple-700 hover:ring-purple-400 dark:hover:ring-purple-500 hover:scale-[1.02] border-l-4 border-l-purple-500" >
						<div className="flex items-start space-x-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
									<Image src={BYULogo} alt="BYU Logo" className="w-10 h-10 object-contain" />
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center space-x-2 mb-2">
									<h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">🏆 1st Place</h3>
								</div>
								<h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">
									BYU Religious Diversity Case Competition
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
									Led a winning team in BYU's Religious Diversity Case Competition, developing strategic solutions for complex diversity and inclusion challenges facing the Ford Motor Company.
								</p>
								<a 
									href="https://www.linkedin.com/feed/update/urn:li:activity:7148724754244415489/" 
									target="_blank" 
									rel="noopener noreferrer"
									className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
								>
									View on LinkedIn
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* AIS AI Competition Highlight Card */}
					<div className="p-6 rounded-xl border-0 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mb-6 mx-auto max-w-[850px] ring-1 ring-purple-200 dark:ring-purple-700 hover:ring-purple-400 dark:hover:ring-purple-500 hover:scale-[1.02] border-l-4 border-l-purple-500" >
						<div className="flex items-start space-x-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
									<Image src={UtahStateLogo} alt="Utah State Logo" className="w-10 h-10 object-contain" />
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center space-x-2 mb-2">
									<h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">🥈 2nd Place</h3>
								</div>
								<h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">
									National AIS AI Competition at Utah State
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
									Achieved 2nd place nationally in the Association of Information Systems "Dare Mighty Innovations" AI Competition, developing innovative AI solutions to address complex business challenges. Our solution focused on leveraging ambient listening and natural language processing to aid nurses in charting patient notes more efficiently and accurately.
								</p>
								<a 
									href="https://communities.aisnet.org/aisstudentchapters/eventshome/competitions/pastcompetitions/2024-competitions/dare-mighty-innovations" 
									target="_blank" 
									rel="noopener noreferrer"
									className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
								>
									View competition details
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Tools & Technologies Highlight Card */}
					<div className="p-6 rounded-xl border-0 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mb-6 mx-auto max-w-[850px] ring-1 ring-purple-200 dark:ring-purple-700 hover:ring-purple-400 dark:hover:ring-purple-500 hover:scale-[1.02] border-l-4 border-l-purple-500" >
						<div className="flex items-start space-x-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
									</svg>
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center space-x-2 mb-3">
									<h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">💻 Technical Experience</h3>
								</div>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-2">
									{[
										"JavaScript", "Python", "LangGraph", "C#", "ASP.NET Core", "Blazor",
										"SQL", "HTML5", "CSS", "Django", "Node.js", "Bootstrap", 
										"VBA", "Google App Script", "R", "Swift", "AWS"
									].map((tech) => (
										<span key={tech} className="inline-flex items-center px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Physical Achievement Highlight Card */}
					<div className="p-6 rounded-xl border-0 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mb-6 mx-auto max-w-[850px] ring-1 ring-purple-200 dark:ring-purple-700 hover:ring-purple-400 dark:hover:ring-purple-500 hover:scale-[1.02] border-l-4 border-l-purple-500" >
						<div className="flex items-start space-x-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
									<span className="text-2xl">🏃‍♂️</span>
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center space-x-2 mb-3">
									<h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">Ultra Runner</h3>
								</div>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-900/30 rounded-full flex items-center justify-center">
											<span className="text-sm font-bold text-gray-700 dark:text-gray-300">4</span>
										</div>
										<div>
											<h4 className="text-sm font-medium text-gray-900 dark:text-white">Trail Ultramarathons Completed</h4>
											<p className="text-xs text-gray-600 dark:text-gray-400">2 × 50-mile races • 2 × 31-mile races</p>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<div className="flex-shrink-0 w-8 h-8 bg-slate-100 dark:bg-slate-900/30 rounded-full flex items-center justify-center">
											<span className="text-sm font-bold text-slate-700 dark:text-slate-300">2</span>
										</div>
										<div>
											<h4 className="text-sm font-medium text-gray-900 dark:text-white">Road Marathons Completed</h4>
											<p className="text-xs text-gray-600 dark:text-gray-400">26.2 miles each</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Language & Cultural Experience Card */}
					<div className="p-6 rounded-xl border-0 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mb-6 mx-auto max-w-[850px] ring-1 ring-purple-200 dark:ring-purple-700 hover:ring-purple-400 dark:hover:ring-purple-500 hover:scale-[1.02] border-l-4 border-l-purple-500" >
						<div className="flex items-start space-x-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
									<Image src={PanamaFlag} alt="Panama Flag" className="w-10 h-6 object-cover rounded-sm" />
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center space-x-2 mb-3">
									<h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">Fluent in Spanish</h3>
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									Spent 2 years living in Panama after high school, developing fluency in Spanish, and a deep appreciation for Latin American culture and their people.
								</p>
							</div>
						</div>
					</div>

					{/* Eagle Scout Achievement Card */}
					<div className="p-6 rounded-xl border-0 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mb-6 mx-auto max-w-[850px] ring-1 ring-purple-200 dark:ring-purple-700 hover:ring-purple-400 dark:hover:ring-purple-500 hover:scale-[1.02] border-l-4 border-l-purple-500" >
						<div className="flex items-start space-x-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
									<Image src={BSALogo} alt="BSA Logo" className="w-10 h-10 object-contain" />
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center space-x-2 mb-3">
									<h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">🦅 Eagle Scout</h3>
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									Achieved the highest rank in the Boy Scouts of America program. Amassed ~200 hours of service in the community. Earned 21 merit badges. Orchestrated and lead a service project collecting used board games to dontate to schools to use for ESL programs, motor skill development programs, and rainy days. Collected and donated over 100 board games.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

    



