import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, phone, email, address } = body;

    if (!fullName || !phone || !address) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Send Email Notification via Resend (COMMENTED OUT)
    // if (process.env.RESEND_API_KEY && process.env.BUSINESS_EMAIL) {
    //   try {
    //     const resend = new Resend(process.env.RESEND_API_KEY);
    //     await resend.emails.send({
    //       from: 'Orders <onboarding@resend.dev>', // Use a verified domain in production
    //       to: process.env.BUSINESS_EMAIL,
    //       subject: `New Order: Luxury Watch - ${fullName}`,
    //       html: `
    //         <h1>New Order Received!</h1>
    //         <p><strong>Product:</strong> Luxury Sports Watch (Promo: ₦85,000)</p>
    //         <p><strong>Name:</strong> ${fullName}</p>
    //         <p><strong>Phone:</strong> ${phone}</p>
    //         <p><strong>Email:</strong> ${email || 'N/A'}</p>
    //         <p><strong>Address:</strong> ${address}</p>
    //       `,
    //     });
    //   } catch (emailError) {
    //     console.error('Failed to send email:', emailError);
    //     // Continue even if email fails
    //   }
    // }

    // 2. Add to Google Sheets via Webhook
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Date: new Date().toLocaleString(),
            Name: fullName,
            Phone: phone,
            Email: email || 'N/A',
            Address: address,
            Product: 'Luxury Sports Watch',
            Price: '₦85,000',
          }),
        });
      } catch (sheetError) {
        console.error('Failed to add to Google Sheets:', sheetError);
        // Continue even if sheet fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Order processing error:', error);
    return NextResponse.json({ error: 'Failed to process order' }, { status: 500 });
  }
}
