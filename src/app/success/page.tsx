import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";

interface SuccessProps {
  searchParams: { session_id?: string };
}

export default async function Success({ searchParams }: SuccessProps) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (session.status === "open") {
    return redirect("/");
  }

  if (session.status === "complete") {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to
          {session.customer_details?.email}. If you have any questions, please
          email
        </p>
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </section>
    );
  }
}
