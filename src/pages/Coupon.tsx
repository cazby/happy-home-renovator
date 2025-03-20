
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Scissors, Tag, BadgePercent } from 'lucide-react';

const Coupon: React.FC = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Special Offer: $500 Off Your Renovation | 1 Week Remodel</title>
        <meta name="description" content="Limited time offer: Get $500 off any home repair or renovation over $2,500. Print or save this coupon for your next remodeling project." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-reno-800 mb-4">Special Savings Offer</h1>
          <p className="text-xl text-reno-600">Print or save this coupon to use on your next home renovation project!</p>
        </div>
        
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl border-4 border-dashed border-reno-accent p-1 bg-white">
            <CardContent className="p-0">
              <div className="border-2 border-gray-200 p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Tag className="h-6 w-6 text-reno-accent" />
                    <span className="font-semibold text-reno-accent">SPECIAL OFFER</span>
                  </div>
                  <Scissors className="h-6 w-6 text-reno-600" />
                </div>
                
                <div className="text-center py-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-reno-800 mb-2">SAVE $500</h2>
                  <p className="text-xl md:text-2xl text-reno-600 mb-6">on any repair or remodel over $2,500</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <BadgePercent className="h-5 w-5 text-reno-accent" />
                    <span className="text-lg font-medium text-reno-700">Limited Time Offer</span>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-md mb-6 max-w-md mx-auto">
                    <p className="text-sm text-reno-600">
                      Present this coupon at the time of estimate. Cannot be combined with other offers.
                      Valid for new customers only. Expires 90 days from issue.
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-reno-accent hover:bg-reno-accent/90">
                          Print Coupon
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Print Instructions</DialogTitle>
                          <DialogDescription>
                            To print this coupon, press Ctrl+P (Windows) or Cmd+P (Mac) on your keyboard,
                            and select "Print Current Page" from your browser's print dialog.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    
                    <Link to="/quote">
                      <Button variant="outline" className="border-reno-accent text-reno-accent hover:bg-reno-accent/10">
                        Use Coupon Now
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-lg font-bold text-reno-800">1 Week Remodel</p>
                  <p className="text-reno-600">Atlanta's Premier Renovation Specialists</p>
                  <p className="text-reno-accent font-medium mt-2">Coupon Code: SAVE500</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-reno-800 mb-4">Ready to use your coupon?</h2>
          <p className="text-lg text-reno-600 mb-6 max-w-2xl mx-auto">
            Contact us today to schedule your free consultation and mention your coupon
            to receive $500 off your project over $2,500.
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-reno-accent hover:bg-reno-accent/90">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Coupon;
