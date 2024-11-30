export class WeatherApi {
    static async getTemperature(city) {
        const apiKey = 'bc37e6a57a64cd6f64a1a7e6a7df5d59';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.main.temp;
        } catch (error) {
            console.error('Nepavyko gauti temperatūros:', error);
            return null;
        }
    }
}