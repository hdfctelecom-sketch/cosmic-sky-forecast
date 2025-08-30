import { motion } from 'framer-motion';
import { Cloud, Zap, Globe, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Cloud,
      title: "Advanced Forecasting",
      description: "Get accurate weather predictions using data from multiple reliable sources including OpenWeatherMap and WeatherAPI."
    },
    {
      icon: Zap,
      title: "Real-time Data",
      description: "Access live weather conditions, hourly forecasts, and 7-day predictions updated in real-time."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Weather information for cities worldwide with detailed local conditions and astronomical data."
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "Intuitive interface with beautiful visualizations and responsive design for all devices."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
            About Cosmic Sky Forecast
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Experience the future of weather forecasting with our cutting-edge platform that combines 
            accurate meteorological data with stunning cosmic-themed visualizations.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <h2 className="text-2xl font-heading font-bold mb-4 text-cosmic-cyan">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe that weather information should be both accurate and beautiful. Our mission is to provide 
            users with comprehensive weather data through an immersive, futuristic interface that makes checking 
            the weather an engaging experience. By combining data from trusted sources like OpenWeatherMap and 
            WeatherAPI, we deliver reliable forecasts while pushing the boundaries of weather app design.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="glass rounded-2xl p-6 hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-cosmic-cyan/20">
                  <feature.icon className="h-6 w-6 text-cosmic-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Data Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass rounded-2xl p-8"
        >
          <h2 className="text-2xl font-heading font-bold mb-4 text-cosmic-cyan">Data Sources</h2>
          <p className="text-muted-foreground mb-6">
            We use multiple trusted weather APIs to ensure accuracy and reliability:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-cosmic-cyan/10">
              <h3 className="font-semibold mb-2">OpenWeatherMap</h3>
              <p className="text-sm text-muted-foreground">
                Current weather conditions and 5-day forecasts with high precision and global coverage.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-cosmic-purple/10">
              <h3 className="font-semibold mb-2">WeatherAPI</h3>
              <p className="text-sm text-muted-foreground">
                Historical weather data and detailed astronomy information including moon phases and sunrise/sunset times.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;