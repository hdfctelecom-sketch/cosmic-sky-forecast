# 🌌 Cosmic Sky Forecast

A futuristic weather prediction website built with React, TypeScript, and Tailwind CSS. Experience weather forecasting like never before with stunning cosmic-themed visualizations, glassmorphism UI, and comprehensive meteorological data.

![Cosmic Sky Forecast](https://via.placeholder.com/1200x600/0B0D12/00E0FF?text=Cosmic+Sky+Forecast)

## ✨ Features

### 🎨 **Futuristic Design**
- **Cosmic Theme**: Deep space colors with neon cyan (#00E0FF) and purple (#7B2FF7) accents
- **Glassmorphism UI**: Translucent cards with blur effects and neon glows
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Responsive Design**: Beautiful on all devices from mobile to desktop

### 🌍 **Comprehensive Weather Data**
- **Current Weather**: Live conditions from OpenWeatherMap API
- **5-Day Forecast**: Detailed hourly and daily predictions
- **Historical Data**: Past 7 days weather from WeatherAPI
- **Astronomy Info**: Sunrise, sunset, moon phases, and illumination

### 🚀 **Advanced Features**
- **Global Search**: Find weather for any city worldwide
- **Favorites System**: Save and quickly access your favorite locations
- **City Comparison**: Compare weather between two cities side-by-side
- **Interactive Charts**: Beautiful data visualizations with Recharts
- **Auto-location**: Detect and display local weather automatically

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Charts**: Recharts
- **State Management**: Zustand
- **API Requests**: Axios
- **Routing**: React Router DOM
- **Data Fetching**: TanStack Query

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Navigation bar
│   ├── Footer.tsx       # Footer component
│   ├── SearchBar.tsx    # Global search with autocomplete
│   ├── WeatherCard.tsx  # Main weather display
│   ├── ForecastTabs.tsx # Tabbed forecast interface
│   └── ContactForm.tsx  # Contact form
├── pages/               # Route components
│   ├── Index.tsx        # Home page
│   ├── Weather.tsx      # Weather details page
│   ├── About.tsx        # About page
│   ├── Contact.tsx      # Contact page
│   ├── Terms.tsx        # Terms of service
│   └── Privacy.tsx      # Privacy policy
├── store/               # State management
│   └── weatherStore.ts  # Zustand store for weather data
├── utils/               # Utility functions
│   ├── weatherApi.ts    # API integration
│   └── formatters.ts    # Data formatting helpers
└── hooks/               # Custom React hooks
    └── use-toast.ts     # Toast notifications
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- API keys from:
  - [OpenWeatherMap](https://openweathermap.org/api) (for current weather & forecasts)
  - [WeatherAPI](https://www.weatherapi.com/) (for historical data & astronomy)

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd cosmic-sky-forecast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API keys**
   
   Edit `src/utils/weatherApi.ts` and replace the placeholder values:
   ```typescript
   const OPENWEATHER_API_KEY = 'your_actual_openweather_api_key';
   const WEATHERAPI_KEY = 'your_actual_weatherapi_key';
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:8080`

## 🔗 API Integration

### OpenWeatherMap APIs Used
- **Current Weather**: `GET /data/2.5/weather`
- **5-Day Forecast**: `GET /data/2.5/forecast`

### WeatherAPI Endpoints Used
- **Historical Weather**: `GET /v1/history.json`
- **Astronomy Data**: `GET /v1/astronomy.json`

### Example API Calls

```typescript
// Current weather
const weather = await getCurrentWeather('London');

// 5-day forecast
const forecast = await getForecast('London');

// Historical data (past 7 days)
const historical = await getWeeklyHistoricalData('London');

// Astronomy data
const astronomy = await getAstronomyData('London', '2025-08-30');
```

## 🎨 Design System

### Colors
```css
/* Cosmic Theme Palette */
--background: #0B0D12      /* Deep cosmic black */
--cosmic-cyan: #00E0FF     /* Neon sky blue */
--cosmic-purple: #7B2FF7   /* Purple glow */
--cosmic-gray: #dbdbdb     /* Soft gray text */
```

### Typography
- **Headings**: Orbitron, Antonio (futuristic fonts)
- **Body**: Inter, Roboto (clean readability)

### Effects
- **Glassmorphism**: `backdrop-filter: blur(12px)`
- **Neon Glows**: `box-shadow: 0 0 20px hsl(189 100% 50% / 0.3)`
- **Smooth Animations**: Custom Framer Motion variants

## 📱 Pages Overview

### 🏠 **Home Page** (`/`)
- Hero section with search
- Current location weather
- Trending cities grid
- Feature highlights

### 🌦️ **Weather Page** (`/weather/:city`)
- Current conditions card
- Tabbed interface:
  - **Hourly**: Next 24 hours forecast
  - **7-Day**: Weekly weather outlook
  - **Historical**: Past 7 days data
  - **Astronomy**: Sun/moon information

### ℹ️ **About Page** (`/about`)
- Mission statement
- Features overview
- Data source credits

### 📧 **Contact Page** (`/contact`)
- Contact form
- Social links
- Response time information

### 📄 **Legal Pages**
- Terms of Service (`/terms`)
- Privacy Policy (`/privacy`)

## 🌟 Key Features Detailed

### Search & Autocomplete
- Global city search with suggestions
- Recent searches history
- Favorite cities quick access
- Popular cities recommendations

### Weather Visualization
- Interactive temperature charts
- Precipitation probability bars
- Wind speed indicators
- UV index with risk levels
- Moon phase visualizations

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Accessible navigation

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Adding New Features
1. Create components in `src/components/`
2. Add pages to `src/pages/` and update routing
3. Extend the Zustand store for state management
4. Add new API functions to `src/utils/weatherApi.ts`
5. Update formatters in `src/utils/formatters.ts`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist/` folder contains the production-ready files.

### Deploy Options
- **Vercel**: Connect your GitHub repo for auto-deployments
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenWeatherMap** - Weather data API
- **WeatherAPI** - Historical weather and astronomy data
- **shadcn/ui** - Beautiful UI components
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization library

## 📞 Support

If you have any questions or need help:

- 📧 Email: hello@cosmicsky.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-repo/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-repo/discussions)

---

<div align="center">
  <p>Made with ❤️ for the future of weather forecasting</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>