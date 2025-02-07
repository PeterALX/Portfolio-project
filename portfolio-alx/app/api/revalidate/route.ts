import { revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { NextRequest, NextResponse } from "next/server";

const hookSecret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET
export async function POST(req: NextRequest) {
	try {
		const { body, isValidSignature } = await parseBody<{
			_type: string;
			slug?: string | undefined;
		}>(req, hookSecret);
		// check if req is from sanity webhook
		if (!isValidSignature) {
			return new Response("Invalid Signature", { status: 401 });
		}
		// webhook should have a body, reject if not.
		if (!body?._type) {
			return new Response("Bad Request", { status: 400 });
		}
		// body holds info about the tag to revalidate, use it to revalidate the specific data?
		console.log(body._type)
		revalidateTag(body._type);
		return NextResponse.json({
			status: 200,
			revalidated: true,
			now: Date.now(),
			body,
		});

	} catch (error: any) {
		console.error(error);
		if (error instanceof Error) {
			return new Response(error.message, { status: 500 });
		}
		return new Response(String(error), { status: 500 });
	}
}
