import type { Metadata } from "next";
import MusicDisplay from "@/components/ui/music-display";
import content from "@/app/music/artists/content.json";


export default function ArtistPage() {
	return (
		<main>
			{ content.map((artist, index) => (
				<MusicDisplay key={ artist.name } index={ index } components={ artist } />
			)) }
		</main>
	);
}

export let metadata: Metadata = {
    title: "My Favorite Artists"
};