// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import conn from "../../lib/db";
import { Product } from "../../types/product";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (conn) {
    const query = "SELECT * FROM users";
    const result : Product[] = (await conn.query(query)).rows;
    if (result) {
      res.status(200).json( result );
    } 
  }
}

