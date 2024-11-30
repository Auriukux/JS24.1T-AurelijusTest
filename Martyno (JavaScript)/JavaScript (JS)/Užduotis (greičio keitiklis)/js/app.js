function toMilesPerHour(kilometersPerHour) {

    if (kilometersPerHour < 0) {
        return -1;
    }

    const milesPerHour = kilometersPerHour / 1.609;

    return Math.round(milesPerHour);
}

function printConversion(kilometersPerHour) {
    const milesPerHour = toMilesPerHour(kilometersPerHour);

    if (milesPerHour === -1) {
        console.log("Invalid Value");
    } else {
        console.log(`${kilometersPerHour} km/h = ${milesPerHour} mi/h`);
    }
}

printConversion(1.5);
printConversion(10.25);
printConversion(-5.6);
printConversion(25.42);
printConversion(75.114); 