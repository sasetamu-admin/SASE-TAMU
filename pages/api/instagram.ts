import type { NextApiRequest, NextApiResponse } from "next";

const INSTAGRAM_ACCOUNT_ID = "17841401321346462";

type InstagramPost = {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_product_type: string;
};

type InstagramResponse = {
  data: InstagramPost[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN ?? "";
    const url = `https://graph.instagram.com/${INSTAGRAM_ACCOUNT_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp,media_product_type&access_token=${accessToken}`;

    try
    {
        const response = await fetch(url);
        const data = (await response.json()) as InstagramResponse;

        if (!response.ok) {
            console.error("Instagram fetch details:", data);
            return res.status(response.status).json({
                message: "Meta Graph API error",
                metaError: data
            });
        }

        const typedData = data as InstagramResponse;
        const posts = typedData.data.filter((post) => post.media_product_type === "REELS");
        return res.status(200).json(posts);

    } catch (error: any) {
        console.error("Internal Server Catch Block:", error);
        return res.status(500).json({ 
            error: "Internal server error occurred", 
            details: error?.message || error 
        });
    }
}