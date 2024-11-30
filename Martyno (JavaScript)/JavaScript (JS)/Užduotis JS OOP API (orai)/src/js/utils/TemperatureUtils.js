export default class TemperatureUtils {
    static celsiusToFahrenheit = (c) => (c * 9 / 5) + 32;
    static fahrenheitToCelsius = (f) => (f - 32) * 5 / 9;
    static celsiusToKelvin = (c) => c + 273.15;
    static kelvinToCelsius = (k) => k - 273.15;
    static fahrenheitToKelvin = (f) => (f - 32) * 5 / 9 + 273.15;
    static kelvinToFahrenheit = (k) => (k - 273.15) * 9 / 5 + 32;
    static roundToDecimal = (v, d = 2) => Number(Math.round(v + 'e' + d) + 'e-' + d);
}