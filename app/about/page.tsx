import type { Metadata } from "next";
import PageTitle from "@/components/ui/page-title";

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
					<div className="prose dark:prose-invert">
						<p>Welcome to my personal website! I'm passionate about technology and creating meaningful solutions.</p>
						
						<p>This section will contain more information about my background, interests, and personal journey.</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export let metadata: Metadata = {
    title: "About Me"
};