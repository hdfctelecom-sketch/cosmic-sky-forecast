import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cloud, Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-cosmic-cyan/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="h-6 w-6 text-cosmic-cyan" />
              <span className="font-display font-bold text-lg text-gradient">
                Cosmic Sky Forecast
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience the future of weather forecasting with our cosmic-themed platform. 
              Get accurate predictions, beautiful visualizations, and astronomical data all in one place.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg bg-cosmic-cyan/10 hover:bg-cosmic-cyan/20 transition-colors"
              >
                <Github className="h-5 w-5 text-cosmic-cyan" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg bg-cosmic-cyan/10 hover:bg-cosmic-cyan/20 transition-colors"
              >
                <Twitter className="h-5 w-5 text-cosmic-cyan" />
              </motion.a>
              <motion.a
                href="mailto:hello@cosmicsky.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg bg-cosmic-cyan/10 hover:bg-cosmic-cyan/20 transition-colors"
              >
                <Mail className="h-5 w-5 text-cosmic-cyan" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 text-cosmic-cyan">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-cosmic-cyan transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-cosmic-cyan transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-cosmic-cyan transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 text-cosmic-cyan">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-cosmic-cyan transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-cosmic-cyan transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cosmic-cyan/20 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Cosmic Sky Forecast. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>using OpenWeatherMap & WeatherAPI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;