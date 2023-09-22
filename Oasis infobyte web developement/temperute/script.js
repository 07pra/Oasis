document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");
    const temperatureInput = document.getElementById("temperatureInput");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const inputValue = parseFloat(temperatureInput.value);
        const fromValue = fromUnit.value;
        const toValue = toUnit.value;

        if (!isNaN(inputValue)) {
            let convertedValue;

            if (fromValue === "celsius" && toValue === "fahrenheit") {
                convertedValue = (inputValue * 9/5) + 32;
            } else if (fromValue === "celsius" && toValue === "kelvin") {
                convertedValue = inputValue + 273.15;
            } else if (fromValue === "fahrenheit" && toValue === "celsius") {
                convertedValue = (inputValue - 32) * 5/9;
            } else if (fromValue === "fahrenheit" && toValue === "kelvin") {
                convertedValue = (inputValue - 32) * 5/9 + 273.15;
            } else if (fromValue === "kelvin" && toValue === "celsius") {
                convertedValue = inputValue - 273.15;
            } else if (fromValue === "kelvin" && toValue === "fahrenheit") {
                convertedValue = (inputValue - 273.15) * 9/5 + 32;
            } else {
                convertedValue = inputValue; // Same unit, no conversion needed
            }

            result.textContent = `Result: ${convertedValue.toFixed(2)} ${toValue}`;
        } else {
            result.textContent = "Invalid input. Please enter a valid number.";
        }
    });
});
