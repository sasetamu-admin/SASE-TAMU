import type { NextApiRequest, NextApiResponse } from "next";

const INSTAGRAM_ACCOUNT_ID = "17841401321346462";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const url = `https://graph.instagram.com/${INSTAGRAM_ACCOUNT_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp,media_product_type&access_token=${accessToken}`;

    try
    {
        const response = await fetch(url);
        const data = await response.json();

        const posts = data.data.filter((post) => post.media_product_type === "REELS");
        res.status(200).json(posts);
    } catch(error)
    {
        res.status(500).json({ error: "failed to fetch instagram posts" });
    }
}