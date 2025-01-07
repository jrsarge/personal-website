import type { Metadata } from "next";
import { StaticImageData } from "next/image";
import MasonryBlock from "@/components/ui/masonry-block";
import PageTitle from "@/components/ui/page-title";
const title: { title: string; subtitle?: string } = {
    title: "My Photography",
    subtitle: "Here are some of my photos I've taken over the years. I got interested in photography because my sister is an amazing photographer and I love capturing moments."
}


export default function Adventures() {
    
	return (
		<main>
			<PageTitle components={ title } />
			<section className="container">
				<h1 className="text-left dark:text-white text-2xl md:text-3xl xl:text-4xl font-medium text-gray-900 w-10/12 p-5">
					Articles
				</h1>
				<div className="grid grid-cols-1 gap-12 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 ">
					Fill in later
				</div>
			</section>
		</main>
	);
}

export let metadata: Metadata = {
    title: "My Photography"
};