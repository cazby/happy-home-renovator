
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
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
import { Checkbox } from '@/components/ui/checkbox';
import { User, Home, Mail, Phone, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Form schema definition
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

export type FormValues = z.infer<typeof formSchema>;

interface QuoteFormProps {
  onSubmit: (data: FormValues) => Promise<void>;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSubmit }) => {
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

  return (
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
  );
};

export default QuoteForm;
