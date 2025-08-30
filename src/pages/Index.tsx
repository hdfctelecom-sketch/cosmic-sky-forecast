import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, TrendingUp, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import { Link } from 'react-router-dom';

const Index = () => {
  const [currentLocation, setCurrentLocation] = useState<string>('');

  const trendingCities = [
    { name: 'New York', temp: 22, condition: 'Sunny', emoji: '☀️' },
    { name: 'London', temp: 18, condition: 'Cloudy', emoji: '☁️' },
    { name: 'Tokyo', temp: 28, condition: 'Clear', emoji: '🌤️' },
    { name: 'Sydney', temp: 15, condition: 'Rainy', emoji: '🌧️' },
    { name: 'Dubai', temp: 35, condition: 'Hot', emoji: '🔥' },
    { name: 'Paris', temp: 20, condition: 'Partly Cloudy', emoji: '⛅' }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Weather data for cities worldwide'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Live weather conditions and forecasts'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Historical data and trends'
    }
  ];

  useEffect(() => {
    // Mock geolocation for demonstration
    setCurrentLocation('London, UK');
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cosmic-cyan/10 blur-3xl"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1] 
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-cosmic-purple/10 blur-3xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">Futuristic Weather</span>
              <br />
              <span className="text-foreground">at Your Fingertips</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the cosmos of weather forecasting with stunning visualizations, 
              precise predictions, and astronomical insights.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <SearchBar />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-cosmic-cyan hover:bg-cosmic-cyan/90 text-primary-foreground font-semibold px-8 py-3 glow-cyan group"
                asChild
              >
                <Link to="/weather/london">
                  Explore Weather
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cosmic-cyan/50 hover:bg-cosmic-cyan/10 px-8 py-3"
                asChild
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Location Weather */}
      {currentLocation && (
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-cosmic-cyan" />
                <h2 className="text-xl font-heading font-semibold">
                  Your Location
                </h2>
              </div>
              
              <div className="flex items-center justify-center space-x-6">
                <span className="text-4xl">🌤️</span>
                <div>
                  <p className="text-2xl font-bold text-gradient">{currentLocation}</p>
                  <p className="text-3xl font-heading font-bold">18°C</p>
                  <p className="text-muted-foreground">Partly Cloudy</p>
                </div>
              </div>
              
              <Button 
                className="mt-4 bg-cosmic-purple hover:bg-cosmic-purple/90 text-primary-foreground"
                asChild
              >
                <Link to={`/weather/${encodeURIComponent(currentLocation)}`}>
                  View Full Forecast
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Trending Cities */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">
              Trending Cities
            </h2>
            <p className="text-muted-foreground text-lg">
              Popular weather destinations around the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="glass rounded-xl p-6 hover:glow-cyan transition-all duration-300 cursor-pointer group"
              >
                <Link 
                  to={`/weather/${encodeURIComponent(city.name)}`}
                  className="block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-semibold text-lg group-hover:text-cosmic-cyan transition-colors">
                      {city.name}
                    </h3>
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {city.emoji}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{city.temp}°C</span>
                    <span className="text-sm text-muted-foreground">{city.condition}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">
              Why Choose Cosmic Sky?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Advanced weather technology meets beautiful design for the ultimate forecasting experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="glass rounded-xl p-8 text-center hover:glow-purple transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cosmic-cyan/20 mb-6">
                  <feature.icon className="h-8 w-8 text-cosmic-cyan" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="glass rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gradient">
              Ready to Explore the Cosmos?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Cosmic Sky Forecast for accurate, 
              beautiful weather information.
            </p>
            
            <Button 
              size="lg" 
              className="bg-cosmic-cyan hover:bg-cosmic-cyan/90 text-primary-foreground font-semibold px-12 py-3 glow-cyan animate-pulse-glow"
              asChild
            >
              <Link to="/weather/new-york">
                Start Forecasting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;