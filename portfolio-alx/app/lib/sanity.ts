import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineLive } from "next-sanity";


const client = createClient({
	projectId: "uwumnvw9",
	dataset: "production",
	apiVersion: "vX",
	useCdn: false,
});

const builder = imageUrlBuilder(client.withConfig({ apiVersion: "2024-11-01" }))
function urlFor(source: SanityImageSource) {
	return builder.image(source)
}

const { sanityFetch, SanityLive } = defineLive({
	client,
});

export { sanityFetch, SanityLive, urlFor }