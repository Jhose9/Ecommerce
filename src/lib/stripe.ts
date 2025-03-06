import "server-only";

import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("La variable de entorno STRIPE_SECRET_KEY no está definida.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
