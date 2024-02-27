// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
const drawTriangle = (length = 5) => {

    // ... write code ...
    let stars = "*";
    for (let i = 0; i < length; i++) {
        console.log(stars);
        stars += "*";
    }
};

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
const drawJavascriptWord = (word = "javascript") => {
    const text = word.toUpperCase();

    let curTextLenght = text.length;
    const textLenght = curTextLenght;

    let printText = "";
    for (let i = 0; i < textLenght + 1; i++) {
        for (let j = 0; j < (textLenght) - (textLenght - curTextLenght); j++) {
            printText += " *";
        }

        for (let j = curTextLenght; j < textLenght; j++) {
            printText += " " + text[j];
        }

        curTextLenght--;
        console.log(printText);
        printText = "";
    }
};


// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
const getVehiclesAndTopSpeed = (vehicles) => {
    let returningVehicles = []

    for (const vehicle of vehicles) {
        const newVehicle = {
            name: vehicle.name,
            topSpeed: 0
        }

        for (const speed of vehicle.measuredSpeeds) {
            if (speed > newVehicle.topSpeed) {
                newVehicle.topSpeed = speed;
            }
        }

        returningVehicles.push(newVehicle);
    }

    return returningVehicles;
};
