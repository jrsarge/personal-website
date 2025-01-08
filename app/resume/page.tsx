import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator"
import BYULogo from "@/public/resume/byu-logo.png"
// import R365Logo from ""
// import WrkdayLogo from ""
// import HauptLogo from ""
// import JollyLogo from ""
import Image from "next/image";
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
				<div className="p-5 rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-9/12 mx-auto max-w-[850px]" >
					<div className="flex justify-start items-center space-x-2 pb-4" >
						<Image src={ BYULogo } alt="Company Logo" className=" w-10" />
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
					<div key={ job.title } className="p-5 rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-9/12 mx-auto max-w-[850px] mb-5" >
						<div>
							<div className="flex justify-start items-center space-x-2 pb-4" >
								<Image src={ BYULogo } alt="Company Logo" className=" w-10" />
								<h1 className="text-xl font-semibold leading-none tracking-tight">
									{ job.title }
								</h1>
							</div>
							<Separator className="my-2" />
							<p className=" font-normal text-base">{ job.company }</p>
							<p className="text-sm text-muted-foreground">{ job.start_date } - {job.end_date !== null ? (job.end_date) : ("Present")}</p>
							<p className="text-sm text-muted-foreground">{ job.city }, { job.state } { job.country !== "USA" ? (`- ${job.country}`) : ("") }</p>
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
				<div className="p-5 rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-9/12 mb-5 mx-auto max-w-[850px]" >
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