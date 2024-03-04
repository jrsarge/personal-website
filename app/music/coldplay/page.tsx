import type { Metadata } from "next";
import MusicDisplay from "@/components/ui/music-display";

// Import Content
import content from "@/app/music/coldplay/content.json";

export default function ColdplayPage() {
	return (
		<main>
			<section className="container">
				{ content.map((album, index) => (
					<MusicDisplay key={ album.id } index={ index } components={ album } />
				)) }
				<br />
			</section>
		</main>
	);
}

export let metadata: Metadata = {
    title: "Coldplay Albums"
};