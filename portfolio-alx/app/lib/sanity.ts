import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineLive } from "next-sanity";

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "vX",
	useCdn: false,
});

const builder = imageUrlBuilder(client)
function urlFor(source: SanityImageSource) {
	return builder.image(source)
}

const { sanityFetch, SanityLive } = defineLive({
	client,
});

export { sanityFetch, SanityLive, urlFor }
