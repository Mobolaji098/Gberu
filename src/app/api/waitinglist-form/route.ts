// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     console.log(req);


    
//     return NextResponse.json({ success: true }, { status: 200 });
    

  
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }


import type { NextApiRequest, NextApiResponse } from 'next'
 
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//   const data = req.body
//   console.log(data);
  
//   res.status(200).json({ data })
// }}

// export default function handler(req:NextApiRequest, res:NextApiResponse) {
//   const requestMethod = req.method;
//   console.log(requestMethod);
//   const body = JSON.parse(req.body);
//   switch (requestMethod) {
//     case "POST":
//       res
//         .status(200)
//         .json({ message: `You submitted the following data: ${body}` });

//     // handle other HTTP methods
//     default:
//       res.status(200).json({ message: "Welcome to API Routes!" });
//   }
// }

import { headers } from 'next/headers'

export async function GET() {
   try {
    var data = 'bolaji'
    return new Response('Hello, Next.js!',)
   } catch (error) {
    return 
   }
}

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
   return new Response(JSON.stringify({message:'Submitted'}), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  } catch (error) {
   throw error 
  }
}

