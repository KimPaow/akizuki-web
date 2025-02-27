import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  to: z.string().email(),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export async function POST(request: Request) {
  let body: z.infer<typeof schema> = {
    to: "hello@bjorkman.kim",
    subject: "subject",
    message: "some_message",
  };

  try {
    const json = await request.json();
    body = schema.parse(json);
  } catch (error) {
    console.error("Failed to parse request", error);
    return new Response("Failed to parse request body to JSON", {
      status: 500,
    });
  }

  try {
    const { to, subject, message } = body;
    const { data, error } = await resend.emails.send({
      // The domain that sends the email needs to be verified: https://resend.com/domains
      from: "秋月 <onboarding@resend.dev>",
      to: to ?? "hello@bjorkman.kim",
      subject: subject,
      html: message,
    });

    if (error) {
      console.error("Failed to send email", error);
      return new Response("Failed to send email", { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
