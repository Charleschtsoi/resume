import { NextResponse } from "next/server";

/**
 * Contact email API is temporarily disabled (Resend not configured).
 * Re-enable by restoring Resend send logic when ready to use RESEND_API_KEY.
 */
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Contact form email is temporarily disabled. Please email charleschtsoi@gmail.com directly.",
    },
    { status: 503 }
  );
}
