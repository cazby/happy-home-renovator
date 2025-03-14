
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/PageLayout';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Home, Mail, Phone, MessageSquare } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  address: z.string().min(5, { message: 'Please enter your full address' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  contactPreference: z.string().min(1, { message: 'Please specify your preferred contact method' }),
  message: z.string().optional(),
  notRobot: z.boolean().refine(val => val === true, {
    message: 'Please confirm you are not a robot',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Quote = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      address: '',
      email: '',
      phone: '',
      contactPreference: '',
      message: '',
      notRobot: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    
    // Display success toast
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you shortly to discuss your project.",
    });
    
    // Navigate back to home after submission
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <PageLayout>
      <Helmet>
        <title>Get a Free Quote | 1 Week Remodel</title>
        <meta name="description" content="Request a free quote for your home renovation project. Kitchen remodels, bathroom renovations, and home additions in just 1 week." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-reno-800 mb-4">Get Your Free Quote</h1>
            <p className="text-xl text-reno-600">You've made a great choice! We really value you and your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <img 
                src="/lovable-uploads/f8fd0770-99de-4149-9af1-9a325d527e60.png" 
                alt="Home renovation" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <div className="mt-6 bg-reno-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-reno-800 mb-2">Why Choose 1 Week Remodel?</h3>
                <ul className="space-y-2 text-reno-600">
                  <li>✓ Completed in just 1 week</li>
                  <li>✓ Professional, experienced team</li>
                  <li>✓ Quality materials and craftsmanship</li>
                  <li>✓ Transparent pricing, no hidden fees</li>
                  <li>✓ Satisfaction guaranteed</li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Request Information</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll contact you with a free estimate.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <User size={16} />
                              Your Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Home size={16} />
                              Address
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St, Atlanta, GA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2">
                                <Mail size={16} />
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="your@email.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2">
                                <Phone size={16} />
                                Phone
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="(123) 456-7890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="contactPreference"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <MessageSquare size={16} />
                              Preferred Contact Method
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Email, Phone, Text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Details (optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project..." 
                                className="resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="notRobot"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I am not a robot
                              </FormLabel>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full bg-reno-accent hover:bg-reno-accent/90">
                        Submit Quote Request
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Quote;
