import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator"
import BYULogo from "@/public/resume/byu-logo.png"
import Image, { StaticImageData } from "next/image";
import resume from "@/app/resume/resume.json"
import PageTitle from "@/components/ui/page-title";

const jobs = resume.jobs;


export default function ResumePage() {
	return (
		<main>
			<div className="container mt-8">
				<h1 className="text-left dark:text-white text-2xl md:text-3xl xl:text-4xl font-medium text-gray-900 w-10/12 p-5">
					Education
				</h1>
				<div className="p-6 rounded-xl border-0 bg-white dark:bg-gray-800 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mx-auto max-w-[850px] ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-blue-300 dark:hover:ring-blue-500 hover:scale-[1.02]" >
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
			<div className="container">
				<h1 className="text-left dark:text-white text-2xl md:text-3xl xl:text-4xl font-medium text-gray-900 w-10/12 p-5">
					Experience
				</h1>
				{ resume.jobs.map((job) => (
					<div key={ job.title } className="p-6 rounded-xl border-0 bg-white dark:bg-gray-800 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mx-auto max-w-[850px] mb-6 ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-blue-300 dark:hover:ring-blue-500 hover:scale-[1.02]" >
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
			<div className="container">
				<h1 className="text-left dark:text-white text-2xl md:text-3xl xl:text-4xl font-medium text-gray-900 w-10/12 p-5">
					Skills & Achievements                                     
				</h1>
				<div className="p-6 rounded-xl border-0 bg-white dark:bg-gray-800 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-9/12 mb-6 mx-auto max-w-[850px] ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-blue-300 dark:hover:ring-blue-500 hover:scale-[1.02]" >
					<ul className="list-disc pl-5">
						{ resume.skills.map((skill, index) => (
						<li key={ index } className=" font-light" >{ skill }</li>
						)) }
					</ul>
					</div>
			</div>
		</main>
	);
}

    



export let metadata: Metadata = {
    title: "Resume"
};