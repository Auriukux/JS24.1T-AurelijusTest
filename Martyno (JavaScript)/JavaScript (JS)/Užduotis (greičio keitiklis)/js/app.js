/**
 * Converts speed from kilometers per hour to miles per hour.
 * @param {number} kilometersPerHour - Speed in kilometers per hour.
 * @return {number} Rounded speed in miles per hour or -1 if the input is invalid.
 */
function toMilesPerHour(kilometersPerHour) {
    // Check if the speed is negative
    if (kilometersPerHour < 0) {
        return -1;
    }
    // Conversion formula: 1 mile per hour = 1.609 kilometers per hour
    let milesPerHour = kilometersPerHour / 1.609;
    return Math.round(milesPerHour);
}

/**
 * Prints the speed conversion from km/h to mi/h or indicates if the value is invalid.
 * @param {number} kilometersPerHour - Speed in kilometers per hour.
 */
function printConversion(kilometersPerHour) {
    let mph = toMilesPerHour(kilometersPerHour);

    if (mph === -1) {
        console.log("Invalid Value");
    } else {
        console.log(`${kilometersPerHour} km/h = ${mph} mi/h`);
    }
}

printConversion(75);   // Should print "75 km/h = 47 mi/h"
printConversion(-5);   // Should print "Invalid Value"
printConversion(100);  // Should print "100 km/h = 62 mi/h"