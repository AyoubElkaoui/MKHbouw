import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Alle verplichte velden moeten ingevuld zijn' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig emailadres' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the form submission in a database
    // 3. Send a notification to your team

    // For now, we'll just log it and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // In a real implementation, you would send an email here:
    // await sendEmail({
    //   to: 'info@mkhbouw.nl',
    //   subject: `Nieuw contact formulier: ${subject}`,
    //   html: `
    //     <h2>Nieuw bericht van ${name}</h2>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Telefoon:</strong> ${phone || 'Niet opgegeven'}</p>
    //     <p><strong>Onderwerp:</strong> ${subject}</p>
    //     <p><strong>Bericht:</strong></p>
    //     <p>${message}</p>
    //   `
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Er is iets misgegaan. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
