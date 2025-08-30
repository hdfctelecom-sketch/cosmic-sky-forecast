import { motion } from 'framer-motion';
import { Cloud, Wind, Droplets, Eye, Gauge, Sun, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWeatherStore } from '@/store/weatherStore';

const WeatherCard = () => {
  const { currentWeather, favorites, addToFavorites, removeFromFavorites } = useWeatherStore();

  // Mock data for demonstration
  const mockWeather = {
    id: 1,
    name: 'London',
    country: 'GB',
    temp: 18,
    description: 'Partly cloudy',
    icon: '02d',
    humidity: 65,
    windSpeed: 12,
    feelsLike: 20,
    pressure: 1013,
    visibility: 10,
    uvIndex: 3
  };

  const weather = currentWeather || mockWeather;
  const isFavorite = favorites.includes(weather.name);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(weather.name);
    } else {
      addToFavorites(weather.name);
    }
  };

  const weatherDetails = [
    { icon: Droplets, label: 'Humidity', value: `${weather.humidity}%` },
    { icon: Wind, label: 'Wind Speed', value: `${weather.windSpeed} km/h` },
    { icon: Gauge, label: 'Pressure', value: `${weather.pressure} hPa` },
    { icon: Eye, label: 'Visibility', value: `${weather.visibility} km` },
    { icon: Sun, label: 'UV Index', value: weather.uvIndex },
    { icon: Cloud, label: 'Feels Like', value: `${weather.feelsLike}°C` }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-8 glow-cyan"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-heading font-bold text-gradient">
            {weather.name}, {weather.country}
          </h2>
          <p className="text-muted-foreground">{weather.description}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFavorite}
          className="hover:bg-cosmic-cyan/20"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? 'text-red-400 fill-red-400' : 'text-muted-foreground'
            }`}
          />
        </Button>
      </div>

      {/* Main Temperature Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center space-x-4">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl"
          >
            ☁️
          </motion.div>
          <div>
            <span className="text-6xl font-heading font-bold text-gradient">
              {weather.temp}°
            </span>
            <span className="text-2xl text-muted-foreground">C</span>
          </div>
        </div>
      </motion.div>

      {/* Weather Details Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {weatherDetails.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="bg-cosmic-cyan/10 rounded-lg p-4 border border-cosmic-cyan/20"
          >
            <div className="flex items-center space-x-3">
              <detail.icon className="h-5 w-5 text-cosmic-cyan" />
              <div>
                <p className="text-xs text-muted-foreground">{detail.label}</p>
                <p className="font-semibold">{detail.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Last Updated */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 text-center"
      >
        <p className="text-xs text-muted-foreground">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WeatherCard;