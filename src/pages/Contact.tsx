import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Mail, Github, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch directly",
      value: "hello@cosmicsky.com",
      link: "mailto:hello@cosmicsky.com"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Contribute to the project",
      value: "github.com/cosmicsky",
      link: "https://github.com"
    },
    {
      icon: Twitter,
      title: "Twitter",
      description: "Follow for updates",
      value: "@cosmicsky",
      link: "https://twitter.com"
    },
    {
      icon: MessageCircle,
      title: "Feedback",
      description: "Share your thoughts",
      value: "Use the form",
      link: "#contact-form",
      onClick: () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Have questions, suggestions, or want to contribute? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-heading font-bold text-cosmic-cyan mb-6">
              Ways to Connect
            </h2>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                onClick={method.onClick}
                className={`glass rounded-2xl p-6 ${method.onClick ? 'cursor-pointer' : ''} hover:glow-cyan transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-cosmic-cyan/20">
                    <method.icon className="h-6 w-6 text-cosmic-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    {method.link && !method.onClick ? (
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cosmic-cyan hover:text-cosmic-cyan/80 transition-colors font-medium"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-cosmic-cyan font-medium">{method.value}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-heading font-semibold mb-3 text-cosmic-purple">
                Response Time
              </h3>
              <p className="text-muted-foreground text-sm">
                We typically respond to emails within 24-48 hours. For urgent issues, 
                please mention "URGENT" in your subject line.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="contact-form"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;