import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-heading font-bold mb-8 text-gradient text-center">
            Privacy Policy
          </h1>
          
          <div className="glass rounded-2xl p-8 space-y-8">
            <div className="text-sm text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </div>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Search for weather information in specific cities</li>
                <li>Save cities to your favorites list</li>
                <li>Contact us through our contact form</li>
                <li>Use our website and interact with our features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide weather information for requested locations</li>
                <li>Remember your favorite cities and recent searches</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our service and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                3. Local Storage
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use local storage in your browser to save your preferences, favorite cities, and recent searches. 
                This information is stored locally on your device and is not transmitted to our servers unless you 
                explicitly request weather data for those locations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                4. Third-Party Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use third-party weather APIs (OpenWeatherMap and WeatherAPI) to provide weather information. 
                When you request weather data, your search queries may be transmitted to these services. 
                Please review their privacy policies for information about how they handle data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                5. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                6. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of certain communications</li>
                <li>Clear your local storage and saved preferences</li>
                <li>Request information about how we process your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                8. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                9. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at hello@cosmicsky.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;