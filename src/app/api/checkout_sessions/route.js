// import { NextRequest, NextResponse } from "next/server";
// import { headers } from "next/headers";

// import { stripe } from "@/lib/stripe";

// interface ApiError extends Error {
//   statusCode?: number;
// }

// export async function POST(req: NextRequest): Promise<NextResponse> {
//   try {
//     const searchParams = new URL(req.url).searchParams;
//     const headersList = await headers();
//     const origin = headersList.get("origin");
//     const quantity = parseInt(searchParams.get("quantity") || "1", 10);

//     if (isNaN(quantity) || quantity <= 0) {
//       throw new Error("Quantity must be a valid positive integer.");
//     }
//     // Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//           price: "price_1QzSbq8TWQXxMY8Z570UIPey",
//           quantity: quantity,
//         },
//       ],
//       mode: "payment",
//       success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${origin}/?canceled=true`,
//     });
//     return NextResponse.redirect(session.url!, 303);
//   } catch (err) {
//     const errorMessage =
//       err instanceof Error ? err.message : "Error desconocido";
//     const errorStatus =
//       err instanceof Error && "statusCode" in err
//         ? (err as ApiError).statusCode
//         : 500;

//     return NextResponse.json({ error: errorMessage }, { status: errorStatus });
//   }
// }

import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "@/lib/stripe";

export async function POST(req) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const headersList = await headers();
    const origin = headersList.get("origin");
    const quantity = parseInt(searchParams.get("quantity") || "1", 10);

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1QzSbq8TWQXxMY8Z570UIPey",
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
