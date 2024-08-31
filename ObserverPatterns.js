class WeatherStation {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers() {
      this.observers.forEach((observer) => {
        observer.update(this);
      });
    }
  
    setWeatherData(weatherData) {
      this.weatherData = weatherData;
      this.notifyObservers();
    }
  }
  
  class WeatherDisplay {
    update(weatherStation) {
      console.log(`Current weather: ${weatherStation.weatherData}`);
    }
  }
  
  // Usage
  const weatherStation = new WeatherStation();
  const display1 = new WeatherDisplay();
  const display2 = new WeatherDisplay();
  
  weatherStation.addObserver(display1);
  weatherStation.addObserver(display2);
  
  weatherStation.setWeatherData('Sunny'); // Both displays update with the new weather data