import { WeatherApi } from './api/WeatherApi.js';
import { EmojiUI } from './ui/EmojiUI.js';


document.addEventListener('DOMContentLoaded', () => {
    const ui = new EmojiUI();
    const form = document.getElementById('weatherForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const city = ui.cityInput.value;
        const temperature = await WeatherApi.getTemperature(city);
        if (temperature !== null) {
            ui.updateUI(temperature);
        } else {
            alert('Nepavyko gauti šio miesto orų duomenų.');
        }
    });
});

