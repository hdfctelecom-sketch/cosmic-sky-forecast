import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-8"
    >
      <h2 className="text-2xl font-heading font-bold mb-6 text-cosmic-cyan">
        Send us a Message
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="glass border-cosmic-cyan/30 focus:border-cosmic-cyan focus:ring-cosmic-cyan/50"
              placeholder="Your full name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="glass border-cosmic-cyan/30 focus:border-cosmic-cyan focus:ring-cosmic-cyan/50"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            Subject *
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
            className="glass border-cosmic-cyan/30 focus:border-cosmic-cyan focus:ring-cosmic-cyan/50"
            placeholder="What's your message about?"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="glass border-cosmic-cyan/30 focus:border-cosmic-cyan focus:ring-cosmic-cyan/50 resize-none"
            placeholder="Tell us more about your inquiry, feedback, or suggestion..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-cosmic-cyan hover:bg-cosmic-cyan/90 text-primary-foreground font-medium py-3 glow-cyan"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
              />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 p-4 rounded-lg bg-cosmic-cyan/10 border border-cosmic-cyan/20">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-cosmic-cyan mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-cosmic-cyan mb-1">
              We value your privacy
            </p>
            <p className="text-xs text-muted-foreground">
              Your information will only be used to respond to your inquiry and will not be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;