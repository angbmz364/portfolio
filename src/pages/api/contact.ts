import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false; 

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();

    if (!message) {
      return new Response(
        JSON.stringify({
          error: "Message is required",
        }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "saskdev@gmail.com",
      subject: "Nuevo mensaje desde el portfolio",
      text: message,
    });

    return new Response(
      JSON.stringify({
        success: true,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Something went wrong",
      }),
      { status: 500 }
    );
  }
};