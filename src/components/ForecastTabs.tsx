import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Cloud, Sun, Moon, Wind, Droplets, Calendar, Clock } from 'lucide-react';

const ForecastTabs = () => {
  // Mock data for charts
  const hourlyData = [
    { time: '12:00', temp: 18, humidity: 65, wind: 12 },
    { time: '13:00', temp: 20, humidity: 60, wind: 15 },
    { time: '14:00', temp: 22, humidity: 55, wind: 18 },
    { time: '15:00', temp: 24, humidity: 50, wind: 20 },
    { time: '16:00', temp: 23, humidity: 58, wind: 16 },
    { time: '17:00', temp: 21, humidity: 62, wind: 14 },
    { time: '18:00', temp: 19, humidity: 68, wind: 11 }
  ];

  const weeklyData = [
    { day: 'Mon', high: 24, low: 16, condition: 'Sunny', icon: '☀️' },
    { day: 'Tue', high: 22, low: 14, condition: 'Partly Cloudy', icon: '⛅' },
    { day: 'Wed', high: 19, low: 12, condition: 'Rainy', icon: '🌧️' },
    { day: 'Thu', high: 18, low: 10, condition: 'Cloudy', icon: '☁️' },
    { day: 'Fri', high: 21, low: 13, condition: 'Sunny', icon: '☀️' },
    { day: 'Sat', high: 23, low: 15, condition: 'Clear', icon: '🌤️' },
    { day: 'Sun', high: 25, low: 17, condition: 'Sunny', icon: '☀️' }
  ];

  const historicalData = [
    { date: 'Aug 23', temp: 20, condition: 'Cloudy' },
    { date: 'Aug 24', temp: 18, condition: 'Rainy' },
    { date: 'Aug 25', temp: 22, condition: 'Sunny' },
    { date: 'Aug 26', temp: 19, condition: 'Partly Cloudy' },
    { date: 'Aug 27', temp: 21, condition: 'Clear' },
    { date: 'Aug 28', temp: 17, condition: 'Rainy' },
    { date: 'Aug 29', temp: 23, condition: 'Sunny' }
  ];

  const astronomyData = {
    sunrise: '06:24',
    sunset: '20:15',
    moonrise: '22:30',
    moonset: '08:45',
    moonPhase: 'Waxing Crescent',
    illumination: 32
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-3 border border-cosmic-cyan/30">
          <p className="text-sm font-medium text-cosmic-cyan">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm text-foreground">
              {entry.name}: {entry.value}{entry.dataKey === 'temp' ? '°C' : entry.dataKey === 'humidity' ? '%' : ' km/h'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass rounded-2xl p-6"
    >
      <Tabs defaultValue="hourly" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-cosmic-cyan/10 rounded-lg p-1">
          <TabsTrigger 
            value="hourly" 
            className="data-[state=active]:bg-cosmic-cyan data-[state=active]:text-primary-foreground"
          >
            <Clock className="h-4 w-4 mr-2" />
            Hourly
          </TabsTrigger>
          <TabsTrigger 
            value="weekly"
            className="data-[state=active]:bg-cosmic-cyan data-[state=active]:text-primary-foreground"
          >
            <Calendar className="h-4 w-4 mr-2" />
            7-Day
          </TabsTrigger>
          <TabsTrigger 
            value="historical"
            className="data-[state=active]:bg-cosmic-cyan data-[state=active]:text-primary-foreground"
          >
            <Cloud className="h-4 w-4 mr-2" />
            Historical
          </TabsTrigger>
          <TabsTrigger 
            value="astronomy"
            className="data-[state=active]:bg-cosmic-cyan data-[state=active]:text-primary-foreground"
          >
            <Sun className="h-4 w-4 mr-2" />
            Astronomy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hourly" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold text-cosmic-cyan">
              Hourly Forecast
            </h3>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="temp" 
                    stroke="hsl(var(--cosmic-cyan))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--cosmic-cyan))', strokeWidth: 2, r: 4 }}
                    name="Temperature"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold text-cosmic-cyan">
              7-Day Forecast
            </h3>
            
            <div className="grid gap-4">
              {weeklyData.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-cosmic-cyan/10 border border-cosmic-cyan/20"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{day.icon}</span>
                    <div>
                      <p className="font-semibold">{day.day}</p>
                      <p className="text-sm text-muted-foreground">{day.condition}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{day.high}° / {day.low}°</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="historical" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold text-cosmic-cyan">
              Past 7 Days
            </h3>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="temp" 
                    fill="hsl(var(--cosmic-purple))"
                    name="Temperature"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="astronomy" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold text-cosmic-cyan">
              Astronomical Data
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sun Times */}
              <div className="bg-cosmic-cyan/10 rounded-lg p-4 border border-cosmic-cyan/20">
                <div className="flex items-center space-x-2 mb-4">
                  <Sun className="h-5 w-5 text-cosmic-cyan" />
                  <h4 className="font-semibold">Sun</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunrise</span>
                    <span className="font-medium">{astronomyData.sunrise}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunset</span>
                    <span className="font-medium">{astronomyData.sunset}</span>
                  </div>
                </div>
              </div>

              {/* Moon Times */}
              <div className="bg-cosmic-purple/10 rounded-lg p-4 border border-cosmic-purple/20">
                <div className="flex items-center space-x-2 mb-4">
                  <Moon className="h-5 w-5 text-cosmic-purple" />
                  <h4 className="font-semibold">Moon</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Moonrise</span>
                    <span className="font-medium">{astronomyData.moonrise}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Moonset</span>
                    <span className="font-medium">{astronomyData.moonset}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phase</span>
                    <span className="font-medium">{astronomyData.moonPhase}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Illumination</span>
                    <span className="font-medium">{astronomyData.illumination}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default ForecastTabs;