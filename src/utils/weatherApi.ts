import axios from 'axios';

// Note: In production, these would be stored as environment variables
// For now, they're placeholders for when you add your API keys
const OPENWEATHER_API_KEY = 'your_openweather_api_key_here';
const WEATHERAPI_KEY = 'your_weatherapi_key_here';

export interface OpenWeatherResponse {
  name: string;
  sys: { country: string };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: { speed: number };
  visibility: number;
  coord: { lat: number; lon: number };
}

export interface OpenWeatherForecastResponse {
  list: Array<{
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
    wind: { speed: number };
    pop: number;
  }>;
}

export interface WeatherAPIResponse {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    pressure_mb: number;
    vis_km: number;
    uv: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

// OpenWeatherMap API functions
export const getCurrentWeather = async (city: string): Promise<OpenWeatherResponse> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw new Error('Failed to fetch weather data');
  }
};

export const getForecast = async (city: string): Promise<OpenWeatherForecastResponse> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw new Error('Failed to fetch forecast data');
  }
};

// WeatherAPI functions
export const getHistoricalWeather = async (city: string, date: string) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/history.json?key=${WEATHERAPI_KEY}&q=${city}&dt=${date}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching historical weather:', error);
    throw new Error('Failed to fetch historical data');
  }
};

export const getAstronomyData = async (city: string, date: string) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/astronomy.json?key=${WEATHERAPI_KEY}&q=${city}&dt=${date}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching astronomy data:', error);
    throw new Error('Failed to fetch astronomy data');
  }
};

// Utility function to get past 7 days of historical data
export const getWeeklyHistoricalData = async (city: string) => {
  const promises = [];
  const today = new Date();
  
  for (let i = 1; i <= 7; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    promises.push(getHistoricalWeather(city, dateString));
  }
  
  try {
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error('Error fetching weekly historical data:', error);
    throw new Error('Failed to fetch historical data');
  }
};

// Mock data functions for development (when API keys are not available)
export const getMockWeatherData = () => ({
  name: 'London',
  sys: { country: 'GB' },
  main: {
    temp: 18,
    feels_like: 20,
    humidity: 65,
    pressure: 1013
  },
  weather: [{
    main: 'Clouds',
    description: 'partly cloudy',
    icon: '02d'
  }],
  wind: { speed: 12 },
  visibility: 10000,
  coord: { lat: 51.5074, lon: -0.1278 }
});

export const getMockForecastData = () => ({
  list: Array.from({ length: 40 }, (_, i) => ({
    dt: Date.now() + (i * 3 * 60 * 60 * 1000), // 3-hour intervals
    main: {
      temp: 15 + Math.random() * 10,
      temp_min: 12 + Math.random() * 8,
      temp_max: 18 + Math.random() * 10,
      humidity: 50 + Math.random() * 40
    },
    weather: [{
      main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
      description: 'mock weather',
      icon: '01d'
    }],
    wind: { speed: 5 + Math.random() * 15 },
    pop: Math.random() * 0.8
  }))
});