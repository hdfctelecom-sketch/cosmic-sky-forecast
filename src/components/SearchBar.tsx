import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Clock, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useWeatherStore } from '@/store/weatherStore';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { recentSearches, favorites, addToRecentSearches } = useWeatherStore();

  const popularCities = [
    'New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Dubai', 'Singapore', 'Mumbai'
  ];

  const handleSearch = (city: string) => {
    if (city.trim()) {
      addToRecentSearches(city);
      navigate(`/weather/${encodeURIComponent(city)}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Delay closing to allow clicking on suggestions
    setTimeout(() => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsOpen(false);
      }
    }, 200);
  };

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search for a city..."
            className="pl-10 pr-12 glass border-cosmic-cyan/30 focus:border-cosmic-cyan focus:ring-cosmic-cyan/50 focus:glow-cyan"
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 hover:bg-cosmic-cyan/20"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 w-full glass rounded-lg border border-cosmic-cyan/30 p-4 z-50"
          >
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Recent</span>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleSearch(city)}
                      className="w-full text-left px-2 py-1 text-sm rounded hover:bg-cosmic-cyan/10 transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Favorites */}
            {favorites.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-cosmic-cyan" />
                  <span className="text-sm font-medium text-muted-foreground">Favorites</span>
                </div>
                <div className="space-y-1">
                  {favorites.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleSearch(city)}
                      className="w-full text-left px-2 py-1 text-sm rounded hover:bg-cosmic-cyan/10 transition-colors flex items-center gap-2"
                    >
                      <Star className="h-3 w-3 text-cosmic-cyan fill-cosmic-cyan" />
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Cities */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Popular Cities</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {popularCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleSearch(city)}
                    className="text-left px-2 py-1 text-sm rounded hover:bg-cosmic-cyan/10 transition-colors"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;