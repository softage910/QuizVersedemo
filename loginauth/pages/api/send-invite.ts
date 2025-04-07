
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    
    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: "onboarding@softage.ai",
        pass: "wpsv hneo idty rykw",
      },
    });

    
    const mailOptions = {
      from: `"SoftAge Onboarding" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "You're Invited to Join SoftAge Onboarding",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
          <h2 style="color: #2563eb;">Welcome to SoftAge AI</h2>
          
          <p style="font-size: 15px; color: #333;">
            Hi there 👋,
          </p>
    
          <p style="font-size: 15px; color: #333;">
            You've been invited to begin your onboarding journey with <strong>SoftAge Information Technology Ltd.</strong> as part of the AI-Operations team.
          </p>
    
          <p style="font-size: 15px; color: #333;">
            Click the button below to get started with your onboarding process.
          </p>
    
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://guide.softage.ai" target="_blank" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">
              Start Onboarding
            </a>
          </div>
    
          <p style="font-size: 14px; color: #555;">
            If you have any questions, feel free to reach out to the SoftAge team.
          </p>
    
          <p style="font-size: 14px; color: #555; margin-top: 30px;">
            Best regards,<br />
            <strong>SoftAge Onboarding Team</strong>
          </p>
        </div>
      `,
    };
    

    // ✅ Send the mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Invite email sent!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
