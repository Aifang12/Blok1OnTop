// Google Sheets integration for contact form submissions

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitToGoogleSheets = async (formData: ContactFormData): Promise<void> => {
  // You'll need to replace this URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWxYvsESNfuAOQO8wzmdPsdmtLR6yERFRePAIXH5PqxGPk144ulFK7z-sy7nUp_9-F/exec';
  
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    // Note: With no-cors mode, we can't check the response status
    // The request will appear to succeed even if it fails
    // You might want to implement a confirmation system in your Google Apps Script
    
  } catch (error) {
    console.error('Error submitting the message:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
};