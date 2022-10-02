// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Product = {
    id: number;
    name: string;
    price: number;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product[]>
) {
    res.status(200).json([
        { id: 1, name: "caneta", price: 2.5 },
        { id: 2, name: "lapis", price: 1.5 },
        { id: 3, name: "caderno", price: 12.5 },
        { id: 4, name: "borracha", price: 2 },
    ]);
}
