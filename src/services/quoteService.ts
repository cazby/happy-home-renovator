
import { FormValues } from '@/components/quote/QuoteForm';

export async function submitQuoteRequest(data: FormValues): Promise<void> {
  // Create a formatted email body with all the form data
  const emailContent = `
    New Quote Request from 1 Week Remodel Website:
    
    Name: ${data.name}
    Address: ${data.address}
    Email: ${data.email}
    Phone: ${data.phone}
    Preferred Contact Method: ${data.contactPreference}
    Message: ${data.message || 'No additional message provided'}
  `;
  
  // Using a simple mailto link as a fallback solution
  // In a production environment, you would use a proper backend API
  const mailtoLink = `mailto:george@cazby.com?subject=New Quote Request from ${data.name}&body=${encodeURIComponent(emailContent)}`;
  
  // Open the email client
  window.open(mailtoLink, '_blank');
}
