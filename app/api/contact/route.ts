import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Gebruik 'onboarding@resend.dev' zolang mkhbouw.nl niet geverifieerd is bij Resend.
// Na domeinverificatie wijzig naar: 'MKH Bouw <info@mkhbouw.nl>'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'MKH Bouw <onboarding@resend.dev>';

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

    if (!process.env.RESEND_API_KEY) {
      console.warn('[Contact Form] RESEND_API_KEY not configured. Submission logged:');
      console.warn(JSON.stringify({ name, email, phone, subject, message, timestamp: new Date().toISOString() }, null, 2));

      return NextResponse.json(
        {
          success: true,
          message: 'Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.'
        },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to MKH Bouw
    await resend.emails.send({
      from: FROM_EMAIL,
      to: 'info@mkhbouw.nl',
      replyTo: email,
      subject: `Nieuw contactformulier: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2563eb; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">Nieuw bericht via contactformulier</h2>
          </div>
          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Naam:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Telefoon:</td>
                <td style="padding: 8px 0; color: #1f2937;">${phone || 'Niet opgegeven'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Onderwerp:</td>
                <td style="padding: 8px 0; color: #1f2937;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Bericht:</p>
              <p style="color: #1f2937; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Bevestigingsmail naar klant alleen als eigen domein geverifieerd is
    // (onboarding@resend.dev kan alleen naar je eigen email sturen)
    if (process.env.RESEND_FROM_EMAIL) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: 'Bedankt voor uw bericht - MKH Bouw',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #2563eb; padding: 24px; border-radius: 8px 8px 0 0;">
              <h2 style="color: white; margin: 0;">Bedankt voor uw bericht!</h2>
            </div>
            <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <p style="color: #1f2937; line-height: 1.6;">Beste ${name},</p>
              <p style="color: #1f2937; line-height: 1.6;">
                Bedankt voor uw bericht. Wij hebben uw aanvraag in goede orde ontvangen en
                nemen binnen <strong>24 uur</strong> contact met u op.
              </p>
              <p style="color: #1f2937; line-height: 1.6;">
                Heeft u een dringende vraag? Bel ons gerust op
                <a href="tel:+31684794108" style="color: #2563eb;">06 84794108</a>.
              </p>
              <p style="color: #6b7280; line-height: 1.6; margin-top: 24px;">
                Met vriendelijke groet,<br>
                <strong>MKH Bouw</strong><br>
                Johan Kernstraat 17, 1065 VC Amsterdam<br>
                <a href="tel:+31684794108" style="color: #2563eb;">06 84794108</a> |
                <a href="mailto:info@mkhbouw.nl" style="color: #2563eb;">info@mkhbouw.nl</a>
              </p>
            </div>
          </div>
        `,
      });
    }

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
      { error: 'Er is iets misgegaan bij het versturen. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
