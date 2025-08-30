import { create } from 'zustand';

export interface WeatherData {
  id: number;
  name: string;
  country: string;
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  pressure: number;
  visibility: number;
  uvIndex: number;
}

export interface ForecastData {
  dt: number;
  temp: {
    day: number;
    night: number;
    min: number;
    max: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  humidity: number;
  windSpeed: number;
  pop: number; // probability of precipitation
}

export interface HistoricalData {
  date: string;
  maxTemp: number;
  minTemp: number;
  avgTemp: number;
  condition: string;
  icon: string;
}

export interface AstronomyData {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moonPhase: string;
  moonIllumination: number;
}

interface WeatherStore {
  // Current weather
  currentWeather: WeatherData | null;
  isLoading: boolean;
  error: string | null;
  
  // Forecast data
  forecastData: ForecastData[];
  historicalData: HistoricalData[];
  astronomyData: AstronomyData | null;
  
  // Search & favorites
  searchQuery: string;
  favorites: string[];
  recentSearches: string[];
  
  // Comparison
  compareCity: WeatherData | null;
  
  // Actions
  setCurrentWeather: (weather: WeatherData | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setForecastData: (data: ForecastData[]) => void;
  setHistoricalData: (data: HistoricalData[]) => void;
  setAstronomyData: (data: AstronomyData | null) => void;
  setSearchQuery: (query: string) => void;
  addToFavorites: (city: string) => void;
  removeFromFavorites: (city: string) => void;
  addToRecentSearches: (city: string) => void;
  setCompareCity: (weather: WeatherData | null) => void;
}

export const useWeatherStore = create<WeatherStore>((set, get) => ({
  // Initial state
  currentWeather: null,
  isLoading: false,
  error: null,
  forecastData: [],
  historicalData: [],
  astronomyData: null,
  searchQuery: '',
  favorites: JSON.parse(localStorage.getItem('weather-favorites') || '[]'),
  recentSearches: JSON.parse(localStorage.getItem('weather-recent') || '[]'),
  compareCity: null,

  // Actions
  setCurrentWeather: (weather) => set({ currentWeather: weather }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  setForecastData: (data) => set({ forecastData: data }),
  setHistoricalData: (data) => set({ historicalData: data }),
  setAstronomyData: (data) => set({ astronomyData: data }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  addToFavorites: (city) => {
    const { favorites } = get();
    if (!favorites.includes(city)) {
      const newFavorites = [...favorites, city];
      localStorage.setItem('weather-favorites', JSON.stringify(newFavorites));
      set({ favorites: newFavorites });
    }
  },
  
  removeFromFavorites: (city) => {
    const { favorites } = get();
    const newFavorites = favorites.filter(fav => fav !== city);
    localStorage.setItem('weather-favorites', JSON.stringify(newFavorites));
    set({ favorites: newFavorites });
  },
  
  addToRecentSearches: (city) => {
    const { recentSearches } = get();
    const newRecent = [city, ...recentSearches.filter(item => item !== city)].slice(0, 5);
    localStorage.setItem('weather-recent', JSON.stringify(newRecent));
    set({ recentSearches: newRecent });
  },
  
  setCompareCity: (weather) => set({ compareCity: weather }),
}));