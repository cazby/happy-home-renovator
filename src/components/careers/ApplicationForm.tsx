
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { careerPositions } from '@/data/careerPositions';

const formSchema = z.object({
  position: z.string().min(1, 'Please select a position'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  reasonToHire: z.string().min(20, 'Please tell us a bit more about why we should hire you'),
  resume: z.instanceof(File).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultPosition?: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  open,
  onOpenChange,
  defaultPosition,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: defaultPosition || '',
      name: '',
      email: '',
      phone: '',
      reasonToHire: '',
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [resumeFile, setResumeFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Construct form data to be sent via email
    const formData = new FormData();
    formData.append('position', data.position);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('reasonToHire', data.reasonToHire);
    
    if (resumeFile) {
      formData.append('resume', resumeFile);
    }

    try {
      // In a real implementation, you would use a service to send this data
      // For now, we'll simulate a successful submission
      console.log('Application submitted:', data);
      console.log('Resume file:', resumeFile);
      
      // This would typically be where you send the data to a server
      // await fetch('/api/submit-application', {
      //   method: 'POST',
      //   body: formData,
      // });

      // Show success message
      toast.success('Application submitted successfully', {
        description: 'We will contact you shortly.',
      });
      
      // Close the dialog
      onOpenChange(false);
      
      // Reset the form
      form.reset();
      setResumeFile(null);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application', {
        description: 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Apply for a Position</DialogTitle>
          <DialogDescription>
            Complete the form below to apply. All fields are required unless marked optional.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <select 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="">Select a position</option>
                      {careerPositions.map((position) => (
                        <option key={position.id} value={position.id}>
                          {position.title}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
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
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-2">
              <FormLabel>Resume (PDF or Word document)</FormLabel>
              <Input 
                type="file" 
                accept=".pdf,.doc,.docx" 
                onChange={handleFileChange}
              />
              {resumeFile && (
                <p className="text-sm text-green-600">
                  File selected: {resumeFile.name}
                </p>
              )}
            </div>
            
            <FormField
              control={form.control}
              name="reasonToHire"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why should we hire you?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your relevant experience, skills, and why you're interested in this position..."
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-reno-accent hover:bg-reno-accent/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
