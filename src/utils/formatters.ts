/**
 * Utility functions for formatting weather data
 */

// Temperature formatting
export const formatTemperature = (temp: number, unit: 'C' | 'F' = 'C'): string => {
  const rounded = Math.round(temp);
  return `${rounded}°${unit}`;
};

// Wind speed formatting
export const formatWindSpeed = (speed: number, unit: 'kmh' | 'mph' = 'kmh'): string => {
  const rounded = Math.round(speed);
  return `${rounded} ${unit === 'kmh' ? 'km/h' : 'mph'}`;
};

// Pressure formatting
export const formatPressure = (pressure: number): string => {
  return `${Math.round(pressure)} hPa`;
};

// Humidity formatting
export const formatHumidity = (humidity: number): string => {
  return `${Math.round(humidity)}%`;
};

// Visibility formatting
export const formatVisibility = (visibility: number): string => {
  const km = visibility / 1000;
  return `${Math.round(km)} km`;
};

// Date formatting
export const formatDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

// Time formatting
export const formatTime = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

// Weather condition to emoji mapping
export const getWeatherEmoji = (condition: string, icon?: string): string => {
  const conditionLower = condition.toLowerCase();
  
  if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
    return '☀️';
  }
  if (conditionLower.includes('cloud')) {
    return conditionLower.includes('partly') ? '⛅' : '☁️';
  }
  if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return '🌧️';
  }
  if (conditionLower.includes('storm') || conditionLower.includes('thunder')) {
    return '⛈️';
  }
  if (conditionLower.includes('snow')) {
    return '🌨️';
  }
  if (conditionLower.includes('mist') || conditionLower.includes('fog')) {
    return '🌫️';
  }
  if (conditionLower.includes('wind')) {
    return '💨';
  }
  
  // Fallback based on OpenWeatherMap icon codes
  if (icon) {
    const iconCode = icon.substring(0, 2);
    switch (iconCode) {
      case '01': return '☀️';
      case '02': return '⛅';
      case '03':
      case '04': return '☁️';
      case '09':
      case '10': return '🌧️';
      case '11': return '⛈️';
      case '13': return '🌨️';
      case '50': return '🌫️';
      default: return '🌤️';
    }
  }
  
  return '🌤️'; // Default emoji
};

// UV Index formatting with risk level
export const formatUVIndex = (uvIndex: number): { value: string; risk: string; color: string } => {
  const rounded = Math.round(uvIndex);
  
  if (rounded <= 2) {
    return { value: rounded.toString(), risk: 'Low', color: 'text-green-400' };
  } else if (rounded <= 5) {
    return { value: rounded.toString(), risk: 'Moderate', color: 'text-yellow-400' };
  } else if (rounded <= 7) {
    return { value: rounded.toString(), risk: 'High', color: 'text-orange-400' };
  } else if (rounded <= 10) {
    return { value: rounded.toString(), risk: 'Very High', color: 'text-red-400' };
  } else {
    return { value: rounded.toString(), risk: 'Extreme', color: 'text-purple-400' };
  }
};

// Moon phase formatting
export const formatMoonPhase = (phase: string): { emoji: string; description: string } => {
  const phaseLower = phase.toLowerCase();
  
  if (phaseLower.includes('new')) {
    return { emoji: '🌑', description: 'New Moon' };
  }
  if (phaseLower.includes('waxing crescent')) {
    return { emoji: '🌒', description: 'Waxing Crescent' };
  }
  if (phaseLower.includes('first quarter')) {
    return { emoji: '🌓', description: 'First Quarter' };
  }
  if (phaseLower.includes('waxing gibbous')) {
    return { emoji: '🌔', description: 'Waxing Gibbous' };
  }
  if (phaseLower.includes('full')) {
    return { emoji: '🌕', description: 'Full Moon' };
  }
  if (phaseLower.includes('waning gibbous')) {
    return { emoji: '🌖', description: 'Waning Gibbous' };
  }
  if (phaseLower.includes('last quarter') || phaseLower.includes('third quarter')) {
    return { emoji: '🌗', description: 'Last Quarter' };
  }
  if (phaseLower.includes('waning crescent')) {
    return { emoji: '🌘', description: 'Waning Crescent' };
  }
  
  return { emoji: '🌙', description: phase };
};

// City name formatter
export const formatCityName = (city: string): string => {
  return city
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Probability of precipitation formatting
export const formatPrecipitationPop = (pop: number): string => {
  const percentage = Math.round(pop * 100);
  return `${percentage}%`;
};

// Air quality index formatting (if available)
export const formatAQI = (aqi: number): { value: string; level: string; color: string } => {
  if (aqi <= 50) {
    return { value: aqi.toString(), level: 'Good', color: 'text-green-400' };
  } else if (aqi <= 100) {
    return { value: aqi.toString(), level: 'Moderate', color: 'text-yellow-400' };
  } else if (aqi <= 150) {
    return { value: aqi.toString(), level: 'Unhealthy for Sensitive', color: 'text-orange-400' };
  } else if (aqi <= 200) {
    return { value: aqi.toString(), level: 'Unhealthy', color: 'text-red-400' };
  } else if (aqi <= 300) {
    return { value: aqi.toString(), level: 'Very Unhealthy', color: 'text-purple-400' };
  } else {
    return { value: aqi.toString(), level: 'Hazardous', color: 'text-red-600' };
  }
};