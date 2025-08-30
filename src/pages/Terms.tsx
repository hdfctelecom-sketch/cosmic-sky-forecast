import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-heading font-bold mb-8 text-gradient text-center">
            Terms of Service
          </h1>
          
          <div className="glass rounded-2xl p-8 space-y-8">
            <div className="text-sm text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </div>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Cosmic Sky Forecast, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                2. Use License
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily access Cosmic Sky Forecast for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                3. Weather Data Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Weather information is provided by third-party services including OpenWeatherMap and WeatherAPI. 
                While we strive for accuracy, weather predictions are inherently uncertain and should not be the 
                sole basis for critical decisions. We are not responsible for any damages resulting from the use 
                of weather information provided through our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                4. Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                use of the Service, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                5. Service Availability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or discontinue the service at any time without notice. 
                We shall not be liable to you or any third party for any modification, suspension, or 
                discontinuance of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                6. Limitations
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Cosmic Sky Forecast or its suppliers be liable for any damages arising 
                out of the use or inability to use the materials on our website, even if we have been 
                notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold mb-4 text-cosmic-cyan">
                7. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at hello@cosmicsky.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;