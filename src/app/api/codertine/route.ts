import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import { v2 as cloudinary } from 'cloudinary';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to authenticate with Google
async function getAuthClient(): Promise<GoogleAuth> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Replace \\n with \n
    },
    scopes: SCOPES,
  });
  return auth;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the form data
    const formData = await request.formData();
    
    // Extract all form fields
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const college = formData.get('college') as string;
    const branch = formData.get('branch') as string;
    const year = formData.get('year') as string;
    const whatsappConfirm = formData.get('whatsappConfirm') as string;
    const paymentFile = formData.get('payment_ss') as File;

    // Validate required fields
    if (!name || !phone || !email || !college || !branch || !year || !paymentFile) {
      return NextResponse.json(
        { error: 'Missing required fields or payment screenshot.' },
        { status: 400 }
      );
    }

    // Validate WhatsApp confirmation
    if (whatsappConfirm !== 'true') {
      return NextResponse.json(
        { error: 'You must join the WhatsApp group to register.' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GOOGLE_SHEET_ID) {
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    // Validate Cloudinary configuration
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json(
        { error: 'Cloudinary configuration error.' },
        { status: 500 }
      );
    }

    const authClient = await getAuthClient();

    // 1. UPLOAD PAYMENT SCREENSHOT TO CLOUDINARY
    try {
      // Convert File to Buffer
      const arrayBuffer = await paymentFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64String = buffer.toString('base64');
      const dataURI = `data:${paymentFile.type};base64,${base64String}`;

      // Upload to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(dataURI, {
        folder: 'codertine-registrations',
        public_id: `${name.replace(/\s+/g, '_')}_${Date.now()}`,
        resource_type: 'auto',
        transformation: [
          { quality: 'auto:good' },
          { fetch_format: 'auto' }
        ]
      });

      const imageUrl = uploadResult.secure_url;

      // 2. STORE DATA IN GOOGLE SHEETS
      const sheets = google.sheets({ version: 'v4', auth: authClient });

      const sheetData = [
        new Date().toLocaleString(),
        name,
        email,
        phone,
        college,
        branch,
        year,
        imageUrl, // Add the Cloudinary URL of the payment screenshot
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'A1', // Appends to the first empty row of the sheet
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [sheetData],
        },
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Registration successful! Your submission has been recorded.',
        imageUrl 
      });

    } catch (uploadError) {
      console.error('Error uploading to Cloudinary:', uploadError);
      return NextResponse.json(
        { error: 'Failed to upload payment screenshot. Please try again.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing registration:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}