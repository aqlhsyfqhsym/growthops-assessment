// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    let body = req.body;
    console.log("Received data:", body);
return res.status(200).json({ message: "Your message has been sent successfully :)", data: body });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
