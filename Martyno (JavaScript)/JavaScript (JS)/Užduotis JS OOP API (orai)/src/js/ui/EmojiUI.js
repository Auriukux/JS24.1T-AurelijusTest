import TemperatureUtils from '../utils/TemperatureUtils';

export class EmojiUI {
    constructor() {
        this.cityInput = document.getElementById('cityInput');
        this.temperatureDisplay = document.getElementById('temperature');
        this.emojiDisplay = document.getElementById('emoji');
    }

    getEmojiForTemperature(temp) {
        if (temp > 30) return '🔥 Vasara atėjo! Arba... gal tiesiog jūsų krosnis sprogo?';
        if (temp > 25) return '☀️ Puiki diena paplūdimyje! Bet tik jei vanduo nėra užterštas.';
        if (temp > 20) return '🌞 Šilta ir jauku, bet nepamirškite, kad saulė išdegins jūsų odą.';
        if (temp > 15) return '🌤️ Gera megztinio diena, jei megztiniai jūsų šeimoje nekelia alergijos.';
        if (temp > 10) return '☁️ Šiek tiek debesuota, bet nieko... dar nenumirėte nuo nuobodulio.';
        if (temp > 5) return '🌥️ Laikas papildomam pledui ir galbūt antidepresantams.';
        if (temp > 0) return '❄️ Šaldantys laikai, bet bent jau jūsų mašina neužšalo... dar.';
        if (temp > -5) return '🌨️ Sniego kąsneliai krinta, ir taip pat krinta jūsų viltis išeiti iš namų.';
        if (temp > -10) return '😨 Brrr, šalta! Jei esate be namų, tai gali būti paskutinis jūsų "brrr".';
        if (temp > -15) return '🧣 Ne tik šalikai ir pirštinės, bet ir deguonis tampa prabanga.';
        if (temp > -20) return '🥶 Žiema artėja, o su ja ir jūsų sąskaitos už šildymą...';
        if (temp > -25) return '🥶 Užšalusi tundra - puiki vieta palaidoti savo problemas... ir galbūt save.';
        return '🧊 Elza būtų patenkinta... bet jūs greičiausiai ne.';
    }

    updateUI(temperature) {
        const c = temperature, f = TemperatureUtils.celsiusToFahrenheit(c);
        this.temperatureDisplay.textContent = `${c.toFixed(1)}°C / ${f.toFixed(1)}°F`;

        const emojiText = this.getEmojiForTemperature(c).split(' ');
        this.emojiDisplay.innerHTML = emojiText.map((word, index) =>
            index === 0 ? word + '<br>' : word
        ).join(' ');
    }
}
