
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/PageLayout';
import QuoteForm, { FormValues } from '@/components/quote/QuoteForm';
import QuoteSidebar from '@/components/quote/QuoteSidebar';
import QuoteHeader from '@/components/quote/QuoteHeader';
import { submitQuoteRequest } from '@/services/quoteService';

const Quote: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = async (data: FormValues): Promise<void> => {
    console.log('Form submitted:', data);
    
    try {
      await submitQuoteRequest(data);
      
      // Display success toast
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you shortly to discuss your project.",
      });
      
      // Navigate back to home after submission
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout>
      <Helmet>
        <title>Get a Free Quote | 1 Week Remodel</title>
        <meta name="description" content="Request a free quote for your home renovation project. Kitchen remodels, bathroom renovations, and home additions in just 1 week." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <QuoteHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <QuoteSidebar imageUrl="/lovable-uploads/f8fd0770-99de-4149-9af1-9a325d527e60.png" />
            </div>
            
            <div className="md:col-span-3">
              <QuoteForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Quote;
