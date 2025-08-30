import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useWeatherStore } from '@/store/weatherStore';
import WeatherCard from '@/components/WeatherCard';
import ForecastTabs from '@/components/ForecastTabs';

const Weather = () => {
  const { city } = useParams<{ city: string }>();
  const { currentWeather, isLoading, error, setLoading, setError } = useWeatherStore();

  useEffect(() => {
    if (city) {
      // TODO: Fetch weather data for the city
      console.log('Fetching weather for:', city);
    }
  }, [city]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-cosmic-cyan border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-2xl font-heading text-red-400 mb-4">Error</h1>
          <p className="text-muted-foreground">{error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-heading font-bold text-center mb-8 text-gradient">
            Weather in {city}
          </h1>
          
          <div className="space-y-8">
            <WeatherCard />
            <ForecastTabs />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Weather;