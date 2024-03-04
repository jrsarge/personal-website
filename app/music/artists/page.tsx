import type { Metadata } from "next";
import MusicDisplay from "@/components/ui/music-display";
import PageTitle from "@/components/ui/page-title";
import content from "@/app/music/artists/content.json";

const title: { title: string; subtitle?: string; center?: boolean } = {
    title: "My Favorite Artists",
    subtitle: "Check out some of my Favorite Artists",
    center: true
}

export default function ArtistPage() {
	return (
		<main>
			<PageTitle components={ title } />
			{ content.map((artist, index) => (
				<MusicDisplay key={ artist.id } index={ index } components={ artist } />
			)) }
		</main>
	);
}

export let metadata: Metadata = {
    title: "My Favorite Artists"
};