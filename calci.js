
    const display = document.getElementById("display");

    function appendToDisplay(input) {
        display.value += input;
    }

    function clearDisplay() {
        display.value = "";
    }

    function deleteLastDigit() {
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

    function squareRoot() {
        try {
            let number = Number(display.value);

            if (number < 0) {
                display.value = "Error";
                return;
            }

            display.value = Math.sqrt(number);
        } catch (error) {
            display.value = "Error";
        }
    }

    function square() {
        try {
            let number = Number(display.value);
            display.value = Math.pow(number, 2);
        } catch (error) {
            display.value = "Error";
        }
    }

    function power() {
        try {
            let base = Number(display.value);
            let exponent = prompt("Enter the exponent:");

            if (exponent !== null) {
                display.value = Math.pow(base, Number(exponent));
            }
        } catch (error) {
            display.value = "Error";
        }
    }

    function factorial() {
        try {
            let number = Number(display.value);

            if (number < 0 || !Number.isInteger(number)) {
                display.value = "Error";
                return;
            }

            let result = 1;

            for (let i = 1; i <= number; i++) {
                result *= i;
            }

            display.value = result;
        } catch (error) {
            display.value = "Error";
        }
    }

    function reciprocal() {
        try {
            let number = Number(display.value);

            if (number === 0) {
                display.value = "Error";
                return;
            }

            display.value = 1 / number;
        } catch (error) {
            display.value = "Error";
        }
    }

    function logarithm() {
        try {
            let number = Number(display.value);

            if (number <= 0) {
                display.value = "Error";
                return;
            }

            display.value = Math.log10(number);
        } catch (error) {
            display.value = "Error";
        }
    }

    function naturalLog() {
        try {
            let number = Number(display.value);

            if (number <= 0) {
                display.value = "Error";
                return;
            }

            display.value = Math.log(number);
        } catch (error) {
            display.value = "Error";
        }
        
        function exponent(base, power) {
    return Math.pow(base, power);
}

console.log(exponent(2, 3));
    }

